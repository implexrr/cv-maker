import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Experience from './Experience'

const ResumePreview = ({resumeData}) => {
  return (
    <div id="resumePreviewContainer">
      <div id="resumePreview">
        <PersonalDetails personalDetailsData={resumeData.personalDetails}></PersonalDetails>
        <Education educationData={resumeData.education}></Education>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default ResumePreview