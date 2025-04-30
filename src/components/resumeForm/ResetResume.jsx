import ClearResumeButton from "./buttons/ClearResumeButton";
import LoadExampleButton from "./buttons/LoadExampleButton";
import emptyCV from "../../data/emptyCV.json";
import sampleCV from "../../data/sampleCV.json";

const ResetResume = ({ setResumeData }) => {
  const clearResume = () => {
    setResumeData(emptyCV);
  };
  const loadDefaultResume = () => {
    setResumeData(sampleCV);
  };

  return (
    <div className="buttonPair" id="resetResume">
      <ClearResumeButton clearResume={clearResume}></ClearResumeButton>
      <LoadExampleButton
        loadDefaultResume={loadDefaultResume}
      ></LoadExampleButton>
    </div>
  );
};

export default ResetResume;
