import { useState } from "react";
import slugify from "../../utils/slugify";
import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlice from "./body/CredentialSlice";
import emptyForm from "../../data/emptyForm.json"

const EducationForm = ({ education, setResumeData }) => {
  const [isAddingCredential, setIsAddingCredential] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  
  const setCredentialData = (credentials, newCredentials) =>
    setResumeData((resumeData) => ({ ...resumeData, [credentials]: newCredentials}));

  const toggleCredentialForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
    setFormData(emptyForm);
  };

  const deleteCredential = (idToDelete, credentials, credentialType) => {
    const newCredentials = credentials.filter((item) => item.id !== idToDelete);
    setCredentialData(credentialType, newCredentials);
  };

  const saveSubmission = (credentials, credentialType) => {
    const slug = slugify(
      `${formData.institution}${formData.degree}${formData.startDate}${formData.endDate}`,
    );
    const newItem = { ...formData, id: slug };
    setCredentialData(credentialType, [...credentials, newItem]);
    toggleCredentialForm();
  };

  const toggleCredentialVisibility = (idToToggle, credentials, credentialType) => {
    const newCredentials = credentials.map((credentialItem) =>
      credentialItem.id === idToToggle
        ? { ...credentialItem, hidden: !credentialItem.hidden }
        : credentialItem,
    );
    setCredentialData(credentialType, newCredentials);
  };

  return (
    <form className="education">
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleCredentialForm={toggleCredentialForm}
        labelText="Education"
      />
      {isAddingCredential && (
        <FormBody
          credentials={education}
          credentialType="education"
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission}
          toggleCredentialForm={toggleCredentialForm}
        />
      )}

      <div className="educationItems">
        {education.map((educationItem) => {
          return (
            <CredentialSlice
              key={educationItem.id}
              credentials={education}
              credentialType="education"
              credentialItem={educationItem}
              toggleCredentialVisibility={toggleCredentialVisibility}
              deleteCredential={deleteCredential}
              id={educationItem.id}
            />
          );
        })}
      </div>
    </form>
  );
};

export default EducationForm;
