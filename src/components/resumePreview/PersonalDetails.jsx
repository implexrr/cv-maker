const PersonalDetails = ({personalDetailsData}) => {
  return (
    <div id="personalDetailsPreview">
      <h2 className="personalDetails title">{personalDetailsData.fullName}</h2>
      <div className="personalDetails details container">
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