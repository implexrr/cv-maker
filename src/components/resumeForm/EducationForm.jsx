import { useState } from "react";
import slugify from "../../utils/slugify";
import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlice from "./body/CredentialSlice";
import emptyForm from "../../data/emptyForm.json"

const EducationForm = ({ resumeData, setResumeData }) => {
  const [isAddingCredential, setIsAddingCredential] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  
  const setCredentialData = (credentialType, newCredentials) =>
    setResumeData((resumeData) => ({ ...resumeData, [credentialType]: newCredentials}));

  const toggleCredentialForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
    setFormData(emptyForm);
  };

  const deleteCredential = (idToDelete, credentialType) => {
    const newCredentials = resumeData[credentialType].filter((item) => item.id !== idToDelete);
    setCredentialData(credentialType, newCredentials);
  };

  // TDL: force form to always submit key-val pair with credentialType = "whatever" so that you can get credentialType from credentials, then save submission accordingly
  const saveSubmission = (credentialType) => {
    const slug = slugify(
      `${formData.institution}${formData.degree}${formData.startDate}${formData.endDate}`,
    );
    const newItem = { ...formData, id: slug, type: credentialType };
    setCredentialData(credentialType, [...resumeData[credentialType], newItem]);
    toggleCredentialForm();
  };

  const toggleCredentialVisibility = (idToToggle, credentialType) => {
    console.log(credentialType);
    console.log(resumeData);
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
          console.log(credentialItem);
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
