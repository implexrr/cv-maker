import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import Experience from "./ExperienceInput"


const ResumeForm = ({ personalDetails, setPersonalDetails }) => {
  return (
    <div id="resumeFormContainer">
      <div id="resumeForm">
        <ResetInputs></ResetInputs>
        <PersonalDetailsInput
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        >
        </PersonalDetailsInput>
        <EducationInput></EducationInput>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default ResumeForm