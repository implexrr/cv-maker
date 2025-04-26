import ResetForms from "./ResetForms"
import PersonalDetailsForm from "./PersonalDetailsForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"


const ResumeForm = ({ resumeData, setResumeData }) => {
  return (
    <div id="resumeFormContainer">
      <div id="resumeForm">
        <ResetForms></ResetForms>
        <PersonalDetailsForm
          personalDetails={resumeData.personalDetails}
          setResumeData={setResumeData}
        />
        <EducationForm
          education={resumeData.education}
          setResumeData={setResumeData}
        />
        <ExperienceForm
          experience={resumeData.experience}
          setResumeData={setResumeData}     
        />
      </div>
    </div>
  )
}

export default ResumeForm