import ClearResumeButton from "./buttons/ClearResumeButton";
import LoadExampleButton from "./buttons/LoadExampleButton";

const ResetInputs = () => {
  return (
    <div className="buttonPair" id="resetInputs">
      <ClearResumeButton></ClearResumeButton>
      <LoadExampleButton></LoadExampleButton>
    </div>
  );
};

export default ResetInputs;