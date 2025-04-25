import { useState } from "react";
import slugify from "../../utils/slugify";
import SaveSubmissionButton from "./buttons/SaveSubmissionButton";
import CancelSubmissionButton from "./buttons/CancelSubmissionButton";

const EducationInput = ({ education, setEducation }) => {
  const [isAddingCredential, setIsAddingCredential] = useState(false);

  const emptyForm = {
    id: "",
    institution: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: ""
  }

  const [formData, setFormData] = useState(emptyForm);

  const toggleCredentialForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
  };
  

  const deleteCredential = (idToDelete) => {
    const newEducation = education.filter((item) => item.id !== idToDelete);
    setEducation(newEducation);
  };

  const saveSubmission = () => {
    const slug = slugify(`${formData.institution}${formData.degree}${formData.startDate}${formData.endDate}`);
    const newItem = { ...formData, id: slug };
    setEducation([...education, newItem]);
    setFormData(emptyForm);
    toggleCredentialForm();
  }

  const toggleCredentialVisibility = (idToToggle) => {
    const newEducation = education.map((educationItem) =>
      educationItem.id === idToToggle
        ? { ...educationItem, hidden: !educationItem.hidden }
        : educationItem,
    );
    setEducation(newEducation);
  };
  

  return (
    <form className="education">
      <div
        className="formLabel"
        style={{
          justifyContent: isAddingCredential
          ? "center"
          : "space-between"
        }}
      >
        <div className="formLabel icon"></div>
        <div className="formLabel title">Education</div>
        {!isAddingCredential && (
          <button
            type="button"
            className="addCredential icon"
            onClick={toggleCredentialForm}
          ></button>
        )}
      </div>

      {isAddingCredential && (
        <>
          <div id="institutionInput" className="education inputContainer">
            <label htmlFor="institution">Institution</label>
            <input
              type="text"
              id="institution"
              name="institution"
              placeholder="University of Superdupercool"
              required
              onChange={(e) =>
                setFormData(oldForm => ({ ...oldForm, institution: e.target.value }))
              }
            />
          </div>

          <div id="degreeInput" className="education inputContainer">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="Hon. BSc Mathematics"
              required
              onChange={(e) =>
                setFormData(oldForm => ({ ...oldForm, degree: e.target.value }))
              }
            />
          </div>

          <div id="startDateInput" className="education inputContainer">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              placeholder="November 5, 1605"
              required
              onChange={(e) =>
                setFormData(oldForm => ({ ...oldForm, startDate: e.target.value }))
              }
            />
          </div>

          <div id="endDateInput" className="education inputContainer">
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              id="endDate"
              name="endDate"
              placeholder="November 6, 1605"
              required
              onChange={(e) =>
                setFormData(oldForm => ({ ...oldForm, endDate: e.target.value }))
              }
            />
          </div>

          <div id="locationInput" className="education inputContainer">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="123 Foobar Rd, Barfoo, Canada"
              required
              onChange={(e) =>
                setFormData(oldForm => ({ ...oldForm, location: e.target.value }))
              }
            />
          </div>
          <div id="submitEducation" className="buttonPair">
            <SaveSubmissionButton saveSubmission={saveSubmission}/>
            <CancelSubmissionButton toggleCredentialForm={toggleCredentialForm}/>
          </div>
        </>
      )}

      <div className="educationItems">
        {education.map((educationItem) => {
          return (
            <div
              key={educationItem.id}
              id={`input${educationItem.id}`}
              className="educationItem"
            >
              <p className="educationItem">{educationItem.institution}</p>
              <div className="buttonsContainer">
                <button type="button" className="editCredential icon"></button>
                <button
                  type="button"
                  className={
                    educationItem.hidden
                      ? "hideCredential icon"
                      : "showCredential icon"
                  }
                  onClick={() => {
                    toggleCredentialVisibility(educationItem.id);
                  }}
                ></button>
                <button
                  type="button"
                  className="deleteCredential icon"
                  onClick={() => {
                    deleteCredential(educationItem.id);
                  }}
                ></button>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default EducationInput;
