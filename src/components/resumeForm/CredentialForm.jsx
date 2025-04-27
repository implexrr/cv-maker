import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlices from "./body/CredentialSlices";
import { useFormHandlers } from "../hooks/useFormHandlers";

const CredentialForm = ({ resumeData, setResumeData, credentialType }) => {
  const {
    formData,
    setFormData,
    isAddingCredential,
    toggleForm,
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
        toggleForm={toggleForm}
        labelText={labelText}
      />
      {isAddingCredential && (
        // TDL - MAKE THIS MORE DYNAMIC AND ALSO PASS FIELDS
        <FormBody
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission}
          toggleForm={toggleForm}
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
