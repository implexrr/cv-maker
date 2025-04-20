import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import Experience from "../resume/Experience"


const InputFields = () => {
  return (
    <div id="input-fields-container">
      <div id="input-fields">
        <ResetInputs></ResetInputs>
        <PersonalDetailsInput></PersonalDetailsInput>
        <EducationInput></EducationInput>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default InputFields