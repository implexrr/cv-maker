import { useState } from "react";
import EditForm from "./EditForm";

/**
 * Component representing a single credential entry (like education or work experience),
 * with options to edit, hide/show, or delete the item.
 *
 * @param {Object} props
 * @param {Object} props.credentialItem - The credential data object.
 * @param {Function} props.toggleCredentialVisibility - Toggles visibility (hidden/shown).
 * @param {Function} props.updateCredential - Function to update the credential data.
 * @param {Function} props.deleteCredential - Function to delete the credential.
 */

const CredentialSlice = ({
  credentialItem,
  toggleCredentialVisibility,
  updateCredential,
  deleteCredential,
}) => {
  const [isEditing, setIsEditing] = useState(false); // Tracks whether we're in edit mode
  const [formData, setFormData] = useState(); // Local state for editing form values

  // Removes non-editable fields from the credential data (id, type, hidden).
  const sanitizeForm = (credentialData) => {
    const sanitizedData = {};
    for (const [key, value] of Object.entries(credentialData)) {
      if (key !== "id" && key !== "type" && key !== "hidden") {
        sanitizedData[key] = value;
      }
    }
    return sanitizedData;
  };

  // Toggles edit mode and initializes formData with cleaned-up values.
  const toggleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
    setFormData(sanitizeForm(credentialItem));
  };

  // Calls the update function and exits edit mode.
  const triggerUpdate = () => {
    updateCredential(credentialItem.id, formData);
    toggleEdit();
  };

  return (
    <>
      <div id={`input${credentialItem.id}`} className={"credentialSlice"}>
        <p className="credentialSlice">{credentialItem.institution}</p>
        <div className="buttonsContainer">
          <button
            type="button"
            className="editCredential icon"
            onClick={() => {
              !isEditing && toggleEdit();
            }}
          ></button>
          <button
            type="button"
            className={
              credentialItem.hidden
                ? "hideCredential icon"
                : "showCredential icon"
            }
            onClick={() => {
              toggleCredentialVisibility(credentialItem.id);
            }}
          ></button>
          <button
            type="button"
            className="deleteCredential icon"
            onClick={() => {
              deleteCredential(credentialItem.id);
            }}
          ></button>
        </div>
      </div>
      {isEditing && (
        <EditForm
          credentialItem={credentialItem}
          sanitizeForm={sanitizeForm}
          formData={formData}
          setFormData={setFormData}
          triggerUpdate={triggerUpdate}
          toggleEdit={toggleEdit}
        />
      )}
    </>
  );
};

export default CredentialSlice;
