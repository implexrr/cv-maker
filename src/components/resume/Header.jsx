const Header = ({personalDetails}) => {
  return (
    <div id="resumeHeaderContainer">
      <h2>{personalDetails.fullName}</h2>
      <div className="personalDetails container">
        <div className="personalDetails email resume">
          {personalDetails.email}
        </div>
        <div className="personalDetails phone resume">
          {personalDetails.phone}
        </div>
        <div className="personalDetails address resume">
          {personalDetails.address}
        </div>
      </div>
    </div>

  )
}

export default Header