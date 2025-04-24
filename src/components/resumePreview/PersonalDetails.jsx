const PersonalDetails = ({personalDetailsData}) => {
  return (
    <div id="personalDetailsPreview">
      <h2 className="personalDetails title">{personalDetailsData.fullName}</h2>
      <div className="personalDetails details container">
        <p className="email">
          {personalDetailsData.email}
        </p>
        <p className="phone">
          {personalDetailsData.phone}
        </p>
        <p className="address">
          {personalDetailsData.address}
        </p>
      </div>
    </div>
  )
}

export default PersonalDetails