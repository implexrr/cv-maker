import Header from './Header'
import Education from './Education'
import Experience from './Experience'

const Resume = () => {
  return (
    <div id="resumeContainer">
      <div id="resume">
        <Header></Header>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  )
}

export default Resume