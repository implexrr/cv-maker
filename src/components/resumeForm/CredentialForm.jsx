import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlices from "./body/CredentialSlices";
import { useFormHandlers } from "../hooks/useFormHandlers";

const CredentialForm = ({ resumeData, setResumeData, credentialType }) => {
  const {
    formData,
    setFormData,
    isAddingCredential,
    toggleCredentialForm,
    saveSubmission,
    deleteCredential,
    toggleCredentialVisibility,
  } = useFormHandlers({ resumeData, setResumeData, credentialType });

  const labelText =
    credentialType.charAt(0).toUpperCase() + credentialType.slice(1);

  return (
    <form className={credentialType}>
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleCredentialForm={toggleCredentialForm}
        labelText={labelText}
      />
      {isAddingCredential && (
        <FormBody
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission}
          toggleCredentialForm={toggleCredentialForm}
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
