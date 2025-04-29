import credentialsFields from "../../data/credentialsFields.json"

import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlices from "./body/CredentialSlices";

import { useFormHandlers } from "../hooks/useFormHandlers";
import capitalize from "../../utils/capitalize";

const CredentialForm = ({ resumeData, setResumeData, credentialType }) => {
  const {
    formData,
    setFormData,
    isAddingCredential,
    toggleForm,
    saveSubmission,
    toggleCredentialVisibility,
    updateCredential,
    deleteCredential,
  } = useFormHandlers({ resumeData, setResumeData, credentialType });

  return (
    <form onSubmit={saveSubmission} className={credentialType}>
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
          credentialFields={credentialsFields[credentialType]}
        />
      )}
      <CredentialSlices
        credentialType={credentialType}
        credentialItems={resumeData[credentialType]}
        toggleCredentialVisibility={toggleCredentialVisibility}
        updateCredential={updateCredential}
        deleteCredential={deleteCredential}
      />
    </form>
  );
};

export default CredentialForm;
