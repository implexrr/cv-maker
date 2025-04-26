import CredentialForm from "./CredentialForm";

const EducationForm = ({ resumeData, setResumeData }) => {
  return (
    <CredentialForm resumeData={resumeData} setResumeData={setResumeData} credentialType="education"/>
  );
};

export default EducationForm;
