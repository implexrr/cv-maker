import { useState } from "react";
import slugify from "../../utils/slugify";
import SaveSubmissionButton from "./buttons/SaveSubmissionButton";
import CancelSubmissionButton from "./buttons/CancelSubmissionButton";

const EducationInput = ({ education, setEducation }) => {
  return (
      <form className="education">
        <div className="formLabel">
          <div className="formLabel icon"></div>
          <div className="formLabel title">Education</div>
          <button
            type="button"
            className="addCredential icon"
          ></button>
        </div>

        <div id="institutionInput" className="education inputContainer">
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            id="institution"
            name="institution"
            placeholder="University of Superdupercool"
            required
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
          />
        </div>

        <div id="institutionInput" className="education inputContainer">
          <label htmlFor="institution">Start Date</label>
          <input
            type="text"
            id="institution"
            name="institution"
            placeholder="November 5, 1605"
            required
          />
        </div>

        <div id="institutionInput" className="education inputContainer">
          <label htmlFor="institution">End Date</label>
          <input
            type="text"
            id="institution"
            name="institution"
            placeholder="November 6, 1605"
            required
          />
        </div>

        <div id="institutionInput" className="education inputContainer">
          <label htmlFor="institution">Location</label>
          <input
            type="text"
            id="institution"
            name="institution"
            placeholder="123 Foobar Rd, Barfoo, Canada"
            required
          />
        </div>
        <div id="submitEducation" className="buttonPair">
          <SaveSubmissionButton/>
          <CancelSubmissionButton/>
        </div>
        <div className="educationItems">
          {
            education.map((educationItem) => {
              const key = slugify(`${educationItem.institution}-${educationItem.degree}-${educationItem.startDate}-${educationItem.endDate}`);
              return (
                <div key={key} className="educationItem">
                  <p className="educationItem">{educationItem.institution}</p>
                  <div className="buttonsContainer">
                    <button type="button" className="editCredential icon"></button>
                    <button type="button" className="showCredential icon"></button>
                    <button type="button" className="deleteCredential icon"></button>
                  </div>
                </div>
              );
            })
          }
      </div>
      </form>
  )
}


export default EducationInput
