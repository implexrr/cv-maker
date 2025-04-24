import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import ExperienceInput from "./ExperienceInput"


const ResumeForm = ({ personalDetails, setPersonalDetails, education, setEducation, experience, setExperience }) => {
  console.log(education);
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