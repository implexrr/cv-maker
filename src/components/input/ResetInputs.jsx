import ClearResumeButton from "./buttons/ClearResumeButton";
import LoadExampleButton from "./buttons/LoadExampleButton";

const ResetInputs = () => {
  return (
    <div id="reset-inputs">
      <ClearResumeButton></ClearResumeButton>
      <LoadExampleButton></LoadExampleButton>
    </div>
  );
};

export default ResetInputs;
