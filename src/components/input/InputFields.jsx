import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import Experience from "./ExperienceInput"


const InputFields = () => {
  return (
    <div id="inputFieldsContainer">
      <div id="inputFields">
        <ResetInputs></ResetInputs>
        <PersonalDetailsInput></PersonalDetailsInput>
        <EducationInput></EducationInput>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default InputFields