import ClearResumeButton from "./buttons/ClearResumeButton";
import LoadExampleButton from "./buttons/LoadExampleButton";
import emptyCV from "../../data/emptyCV.json";

const ResetResume = ({setResumeData}) => {
  const clearResume = () => {
    setResumeData(emptyCV);
  }
  return (
    <div className="buttonPair" id="resetResume">
      <ClearResumeButton clearResume={clearResume}></ClearResumeButton>
      <LoadExampleButton></LoadExampleButton>
    </div>
  );
};

export default ResetResume;