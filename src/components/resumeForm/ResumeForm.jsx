import ResetResume from "./ResetResume";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const ResumeForm = ({ resumeData, setResumeData }) => {
  return (
    <div id="resumeFormContainer">
      <div id="resumeForm">
        <ResetResume resumeData={resumeData} setResumeData={setResumeData} />
        <PersonalDetailsForm
          personalDetails={resumeData.personalDetails}
          setResumeData={setResumeData}
        />
        <EducationForm resumeData={resumeData} setResumeData={setResumeData} />
        <ExperienceForm resumeData={resumeData} setResumeData={setResumeData} />
      </div>
    </div>
  );
};

export default ResumeForm;
