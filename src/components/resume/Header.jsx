const Header = ({personalDetails}) => {
  return (
    <div className="resumeHeader preview container">
      <h2 className="personalDetails title">{personalDetails.fullName}</h2>
      <div className="personalDetails container">
        <div className="email">
          {personalDetails.email}
        </div>
        <div className="phone">
          {personalDetails.phone}
        </div>
        <div className="address">
          {personalDetails.address}
        </div>
      </div>
    </div>
  )
}

export default Header