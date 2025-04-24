const PersonalDetails = ({personalDetailsData}) => {
  return (
    <div className="resumeHeader preview container">
      <h2 className="personalDetails title">{personalDetailsData.fullName}</h2>
      <div className="personalDetails container">
        <div className="email">
          {personalDetailsData.email}
        </div>
        <div className="phone">
          {personalDetailsData.phone}
        </div>
        <div className="address">
          {personalDetailsData.address}
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails