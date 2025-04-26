import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlice from "./body/CredentialSlice";
import { useFormHandlers } from "../hooks/useFormHandlers";

const CredentialForm = ({ resumeData, setResumeData, credentialType }) => {

  const {
    formData,
    setFormData,
    isAddingCredential,
    toggleCredentialForm,
    saveSubmission,
    deleteCredential,
    toggleCredentialVisibility
  } = useFormHandlers({ resumeData, setResumeData, credentialType });
  const labelText = credentialType.charAt(0).toUpperCase() + credentialType.slice(1);
  return (
    <form className={credentialType}>
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleCredentialForm={toggleCredentialForm} // formutils
        labelText={labelText}
      />
      {isAddingCredential && (
        <FormBody
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission} // formutils
          toggleCredentialForm={toggleCredentialForm} // formutils
        />
      )}

      <div className={`${credentialType}Items`}>
        {resumeData[credentialType].map((credentialItem) => {

          return (
            <CredentialSlice
              key={credentialItem.id}
              toggleCredentialVisibility={toggleCredentialVisibility} // formutils
              deleteCredential={deleteCredential} // formutils
              credentialItem={credentialItem}
            />
          );
        })}
      </div>
    </form>
  );
};

export default CredentialForm;
