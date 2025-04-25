import React, { useState } from "react"
import Header from './components/header/Header'
import ResumePreview from './components/resumePreview/ResumePreview'
import ResumeForm from './components/resumeForm/ResumeForm'
import sampleCV from "./data/sampleCV.json"
import './styles/App.css'

function App() {
  // Initialize state with the structure of sampleCV
  const [resumeData, setResumeData] = useState(sampleCV);

  const setPersonalDetails = (personalDetails) =>
    setResumeData((resumeData) => ({ ...resumeData, personalDetails }));

  const setEducation = (education) =>
    setResumeData((resumeData) => ({ ...resumeData, education }));

  const setExperience = (experience) =>
    setResumeData((resumeData) => ({ ...resumeData, experience }));

  return (
    <>
      <Header></Header>
      <ResumeForm
        personalDetails={resumeData.personalDetails}
        setPersonalDetails={setPersonalDetails}
        education={resumeData.education}
        setEducation={setEducation}
        experience={resumeData.experience}
        setExperience={setExperience}
      />
      <ResumePreview resumeData={resumeData}></ResumePreview>
    </>
  )
}

export default App
