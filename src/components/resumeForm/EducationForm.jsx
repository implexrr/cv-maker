import { useState } from "react";
import slugify from "../../utils/slugify";
import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import EducationItem from "./body/EducationItem";
import { emptyForm } from "../../utils/formUtils";

const EducationForm = ({ education, setResumeData }) => {
  const [isAddingCredential, setIsAddingCredential] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  const setEducationData = (education) =>
    setResumeData((resumeData) => ({ ...resumeData, education }));

  const toggleCredentialForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
  };

  const deleteCredential = (idToDelete) => {
    const newEducation = education.filter((item) => item.id !== idToDelete);
    setEducationData(newEducation);
  };

  const saveSubmission = () => {
    const slug = slugify(
      `${formData.institution}${formData.degree}${formData.startDate}${formData.endDate}`,
    );
    const newItem = { ...formData, id: slug };
    setEducationData([...education, newItem]);
    setFormData(emptyForm);
    toggleCredentialForm();
  };

  const toggleCredentialVisibility = (idToToggle) => {
    const newEducation = education.map((educationItem) =>
      educationItem.id === idToToggle
        ? { ...educationItem, hidden: !educationItem.hidden }
        : educationItem,
    );
    setEducationData(newEducation);
  };

  return (
    <form className="education">
      <FormLabel
        isAddingCredential={isAddingCredential}
        toggleCredentialForm={toggleCredentialForm}
        formType="Education"
      />
      {isAddingCredential && (
        <FormBody
          formData={formData}
          setFormData={setFormData}
          saveSubmission={saveSubmission}
          toggleCredentialForm={toggleCredentialForm}
        />
      )}

      <div className="educationItems">
        {education.map((educationItem) => {
          return (
            <EducationItem
              key={educationItem.id}
              educationItem={educationItem}
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
