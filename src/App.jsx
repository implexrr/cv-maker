import React, { useState } from "react"
import Header from './components/header/Header'
import ResumePreview from './components/resumePreview/ResumePreview'
import ResumeForm from './components/resumeForm/ResumeForm'
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
      <ResumePreview resumeData={resumeData}></ResumePreview>
    </>
  )
}

export default App
