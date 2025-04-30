const PersonalDetails = ({ personalDetailsData }) => {
  return (
    <div id="personalDetailsPreview">
      <h2 className="personalDetails title">{personalDetailsData.fullName}</h2>
      <div className="personalDetails details container">
        <div className="emailPreviewContainer">
          <div className="email icon"></div>
          <p className="email">{personalDetailsData.email}</p>
        </div>
        <div className="phonePreviewContainer">
          <div className="phone icon"></div>
          <p className="phone">{personalDetailsData.phone}</p>
        </div>
        <div className="addressPreviewContainer">
          <div className="address icon"></div>
          <p className="address">{personalDetailsData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
