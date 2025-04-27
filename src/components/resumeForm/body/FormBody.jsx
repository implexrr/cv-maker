import capitalize from "../../../utils/capitalize";
import slugify from "../../../utils/slugify";
import SaveSubmissionButton from "../buttons/SaveSubmissionButton";
import CancelSubmissionButton from "../buttons/CancelSubmissionButton";

const FormBody = ({formData, setFormData, saveSubmission, toggleForm, credentialFields}) => {
  return (
    <div className="formBody">
      {
        credentialFields.map((credentialField) => (
          <div key={ slugify(credentialField.name + credentialField.type + credentialField.labelText)} className={`${credentialField.name} inputContainer`}>
          <label htmlFor={credentialField.name}>{capitalize(credentialField.labelText)}</label>
          <input
            type={credentialField.type}
            id={credentialField.name}
            name={credentialField.name}
            placeholder={credentialField.placeholder}
            value={formData[credentialField.name]}
            required={credentialField.required}
            onChange={(e) =>
              setFormData((oldFormData) => ({
                ...oldFormData,
                [credentialField.name]: e.target.value,
              }))
            }
          />
        </div>  
        ))
      }
      <div className="buttonPair">
        <SaveSubmissionButton saveSubmission={saveSubmission} />
        <CancelSubmissionButton toggleForm={toggleForm} />
      </div>
    </div>
  );
};

export default FormBody;