import React, { useState } from "react";
import Header from "./components/header/Header";
import ResumePreview from "./components/resumePreview/ResumePreview";
import ResumeForm from "./components/resumeForm/ResumeForm";
import Footer from "./components/footer/Footer";
import sampleCV from "./data/sampleCV.json";
import "./styles/App.css";

function App() {
  const [resumeData, setResumeData] = useState(sampleCV);

  return (
    <>
      <Header />
      <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
      <ResumePreview resumeData={resumeData} />
      <Footer />
    </>
  );
}

export default App;
