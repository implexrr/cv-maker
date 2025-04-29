import CredentialForm from "./CredentialForm";

const ExperienceForm = ({ resumeData, setResumeData }) => {
  return (
    <CredentialForm resumeData={resumeData} setResumeData={setResumeData} credentialType="experience"/>
  );
}

export default ExperienceForm

