// TDL
import slugify from "../../../utils/slugify";
import credentialsFields from "../../../data/credentialsFields.json"
import UpdateCredentialButton from "../buttons/UpdateCredentialButton";
import CancelUpdateButton from "../buttons/CancelUpdateButton";

const EditForm = ({formData, setFormData, credentialItem, triggerUpdate, toggleEdit}) => {
  const credentialFields = credentialsFields[credentialItem.type];
  return (
    <div className="editCredentialForm">
      <div className="formBody">
        {
          credentialFields.map((credentialField) => (
            <div key={credentialItem.id + slugify(credentialField.name + credentialField.type + credentialField.labelText)} className={`${credentialField.name} inputContainer`}>
              <label htmlFor={credentialItem.id + credentialField.name}>{credentialField.labelText}</label>
              <input
              type={credentialField.type}
              id={credentialItem.id + credentialField.name}
              name={credentialField.name}
              placeholder={credentialField.placeholder}
              value={formData[credentialField.name]}
              required={credentialField.required}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  [credentialField.name] : e.target.value,
                }))
              }}
            />
            </div>
          ))
        }
        <div className="buttonPair">
          <UpdateCredentialButton
            triggerUpdate={triggerUpdate}
          />
          <CancelUpdateButton
            cancelUpdate={toggleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default EditForm;

