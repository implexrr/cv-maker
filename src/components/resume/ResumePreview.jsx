import Header from './Header'
import Education from './Education'
import Experience from './Experience'

const ResumePreview = ({resumeData}) => {
  return (
    <div id="resumePreviewContainer">
      <div id="resumePreview">
        <Header personalDetails={resumeData.personalDetails}></Header>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default ResumePreview