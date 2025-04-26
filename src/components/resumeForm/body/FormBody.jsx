import SaveSubmissionButton from "../buttons/SaveSubmissionButton";
import CancelSubmissionButton from "../buttons/CancelSubmissionButton";

const FormBody = ({formData, setFormData, saveSubmission, toggleCredentialForm, credentials, credentialType}) => {
  return (
    <div className="formBody">
      <div id="institutionInput" className="education inputContainer">
        <label htmlFor="institution">Institution</label>
        <input
          type="text"
          id="institution"
          name="institution"
          placeholder="University of Superdupercool"
          value={formData.institution}
          required
          onChange={(e) =>
            setFormData((oldForm) => ({
              ...oldForm,
              institution: e.target.value,
            }))
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
          value={formData.degree}
          required
          onChange={(e) =>
            setFormData((oldForm) => ({
              ...oldForm,
              degree: e.target.value,
            }))
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
          value={formData.startDate}
          required
          onChange={(e) =>
            setFormData((oldForm) => ({
              ...oldForm,
              startDate: e.target.value,
            }))
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
          value={formData.endDate}
          required
          onChange={(e) =>
            setFormData((oldForm) => ({
              ...oldForm,
              endDate: e.target.value,
            }))
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
          value={formData.location}
          required
          onChange={(e) =>
            setFormData((oldForm) => ({
              ...oldForm,
              location: e.target.value,
            }))
          }
        />
      </div>
      <div id="submitEducation" className="buttonPair">
        <SaveSubmissionButton saveSubmission={saveSubmission} credentials={credentials} credentialType={credentialType} />
        <CancelSubmissionButton toggleCredentialForm={toggleCredentialForm} />
      </div>
    </div>
  );
};

export default FormBody;
