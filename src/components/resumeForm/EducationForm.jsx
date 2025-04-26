import FormLabel from "./labels/FormLabel";
import FormBody from "./body/FormBody";
import CredentialSlice from "./body/CredentialSlice";
import CredentialForm from "./CredentialForm";

const EducationForm = ({ resumeData, setResumeData }) => {
  return (
    <CredentialForm resumeData={resumeData} setResumeData={setResumeData} credentialType="education"/>
  );
};

export default EducationForm;
