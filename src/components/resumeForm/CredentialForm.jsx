import capitalize from "../../utils/capitalize";
import credentialFields from "../../data/credentialsFields.json"
import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlices from "./body/CredentialSlices";
import { useFormHandlers } from "../hooks/useFormHandlers";

const CredentialForm = ({ resumeData, setResumeData, credentialType }) => {
  console.log(credentialFields[credentialType]);
  const {
    formData,
    setFormData,
    isAddingCredential,
    toggleForm,
    saveSubmission,
    deleteCredential,
    toggleCredentialVisibility,
  } = useFormHandlers({ resumeData, setResumeData, credentialType });

  return (
    <form className={credentialType}>
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleForm={toggleForm}
        labelText={capitalize(credentialType)}
      />
      {isAddingCredential && (
        <FormBody
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission}
          toggleForm={toggleForm}
          credentialFields={credentialFields[credentialType]}
        />
      )}
      <CredentialSlices
        credentialType={credentialType}
        credentialItems={resumeData[credentialType]}
        toggleCredentialVisibility={toggleCredentialVisibility}
        deleteCredential={deleteCredential}
      />
    </form>
  );
};

export default CredentialForm;
