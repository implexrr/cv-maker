import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import ExperienceIInput from "./ExperienceInput"


const ResumeForm = ({ personalDetails, setPersonalDetails, education, setEducation, experience, setExperience }) => {
  return (
    <div id="resumeFormContainer">
      <div id="resumeForm">
        <ResetInputs></ResetInputs>
        <PersonalDetailsInput
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationInput
          education={education}
          setEducation={setEducation}
        />
        <ExperienceInput
          experience={experience}
          setExperience={setExperience}     
        />
      </div>
    </div>
  )
}

export default ResumeForm