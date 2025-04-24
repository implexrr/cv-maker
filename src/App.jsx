import React, { useState } from "react"
import Header from './components/header/Header'
import Resume from './components/resume/Resume'
import ResumeForm from './components/input/ResumeForm'
import sampleCV from "./data/sampleCV.json"
import './styles/App.css'

function App() {
  // Initialize state with the structure of sampleCV
  const [resumeData, setResumeData] = useState(sampleCV);

  // a small helper to update only personalDetails
  const setPersonalDetails = (newPersonalDetails) =>
    setResumeData((oldResumeData) => ({
      ...oldResumeData,
      personalDetails: newPersonalDetails
    }))


  return (
    <>
      <Header></Header>
      <ResumeForm
        personalDetails={resumeData.personalDetails}
        setPersonalDetails={setPersonalDetails}>
      </ResumeForm>
      <Resume resumeData={resumeData}></Resume>
    </>
  )
}

export default App
