import { useState } from "react";
import EditForm from "./EditForm";

const CredentialSlice = ({credentialItem, toggleCredentialVisibility, updateCredential, deleteCredential}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState();

  const sanitizeForm = (credentialData) => {
    const sanitizedData = {};
    for (const [key, value] of Object.entries(credentialData)) {
      if (key !== "id" && key !== "type" && key !== "hidden") {
        sanitizedData[key] = value;
      }
    }
    return sanitizedData;
  }

  const toggleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
    setFormData(sanitizeForm(credentialItem));
  };

  const triggerUpdate = () => {
    updateCredential(credentialItem.id, formData);
    toggleEdit();
  }

  return (
    <>
      <div
        id={`input${credentialItem.id}`}
        className={"credentialSlice"}
        >
          <p className="credentialSlice">{credentialItem.institution}</p>
          <div className="buttonsContainer">
            <button type="button" className="editCredential icon" onClick={() => {!isEditing && toggleEdit()}}></button>
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
  )
}

export default CredentialSlice
