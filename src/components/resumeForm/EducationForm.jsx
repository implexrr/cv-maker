import { useState } from "react";
import slugify from "../../utils/slugify";
import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlice from "./body/CredentialSlice";
import emptyForm from "../../data/emptyForm.json"

const EducationForm = ({ resumeData, setResumeData }) => {
  const [isAddingCredential, setIsAddingCredential] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  
  // formutils
  const setCredentialData = (credentialType, newCredentials) =>
    setResumeData((resumeData) => ({ ...resumeData, [credentialType]: newCredentials}));

  // formutils
  const toggleCredentialForm = (credentialType) => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
    setFormData(emptyForm[credentialType]);
  };

  // formutils
  const deleteCredential = (idToDelete, credentialType) => {
    const newCredentials = resumeData[credentialType].filter((item) => item.id !== idToDelete);
    setCredentialData(credentialType, newCredentials);
  };

  // formutils
  const saveSubmission = (credentialType) => {
    const slug = slugify(
      `${formData.institution}${formData.degree}${formData.startDate}${formData.endDate}`,
    );
    const newItem = { ...formData, id: slug, type: credentialType, hidde: false };
    setCredentialData(credentialType, [...resumeData[credentialType], newItem]);
    toggleCredentialForm(credentialType);
  };

  // formutils
  const toggleCredentialVisibility = (idToToggle, credentialType) => {

    const newCredentials = resumeData[credentialType].map((item) =>
      item.id === idToToggle
        ? { ...item, hidden: !item.hidden }
        : item,
    );
    setCredentialData(credentialType, newCredentials);
  };

  return (
    <form className="education">
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleCredentialForm={toggleCredentialForm} // formutils
        labelText="Education"
        credentialType="education"
      />
      {isAddingCredential && (
        <FormBody
          credentialType="education"
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission} // formutils
          toggleCredentialForm={toggleCredentialForm} // formutils
        />
      )}

      <div className="educationItems">
        {resumeData["education"].map((credentialItem) => {

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

export default EducationForm;
