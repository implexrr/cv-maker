import Header from './Header'
import Education from './Education'
import Experience from './Experience'

const Resume = ({resumeData}) => {
  return (
    <div id="resumeContainer">
      <div id="resume">
        <Header personalDetails={resumeData.personalDetails}></Header>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default Resume