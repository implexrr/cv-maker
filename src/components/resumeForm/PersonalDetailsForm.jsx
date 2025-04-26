import { useState } from "react";

const PersonalDetailsForm = ({ personalDetails, setResumeData }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded((expanded) => !expanded);
  };

  const setPersonalDetails = (personalDetails) =>
    setResumeData((resumeData) => ({ ...resumeData, personalDetails }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  }

  return (
    <form className="personalDetails">
      <div className="formLabel">
        <div className="formLabel icon"></div>
        <div className="formLabel title">Personal Details</div>
        <button
          type="button"
          className={isExpanded ? "showLess icon" : "showMore icon"}
          onClick={handleToggle}
        ></button>
      </div>
      {isExpanded && (
        <>
          <div id="fullNameInput" className="personalDetails inputContainer">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Bob McJobhunter"
              defaultValue={personalDetails.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div id="addressInput" className="personalDetails inputContainer">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="123 Maplevood Rd, ON, Canada"
              defaultValue={personalDetails.address}
              onChange={handleChange}
              required
            />
          </div>

          <div id="phoneInput" className="personalDetails inputContainer">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="647-967-1111"
              defaultValue={personalDetails.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div id="emailInput" className="personalDetails inputContainer">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="pleasehireme42@gmail.com"
              name="email"
              defaultValue={personalDetails.email}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
    </form>
  );
};

export default PersonalDetailsForm;
