import ResetInputs from "./ResetInputs"
import PersonalDetailsInput from "./PersonalDetailsInput"
import EducationInput from "./EducationInput"
import Experience from "../resume/Experience"


const InputFields = () => {
  return (
    <>
      <ResetInputs></ResetInputs>
      <PersonalDetailsInput></PersonalDetailsInput>
      <EducationInput></EducationInput>
      <Experience></Experience>
    </>
  )
}

export default InputFields