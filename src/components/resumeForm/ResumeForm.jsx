import ResetForms from "./ResetForms"
import PersonalDetailsForm from "./PersonalDetailsForm"
import EducationForm from "./EducationForm"
import ExperienceForm from "./ExperienceForm"


const ResumeForm = ({ personalDetails, setPersonalDetails, education, setEducation, experience, setExperience }) => {
  return (
    <div id="resumeFormContainer">
      <div id="resumeForm">
        <ResetForms></ResetForms>
        <PersonalDetailsForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationForm
          education={education}
          setEducation={setEducation}
        />
        <ExperienceForm
          experience={experience}
          setExperience={setExperience}     
        />
      </div>
    </div>
  )
}

export default ResumeForm