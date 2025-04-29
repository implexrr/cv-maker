const Experience = ({experienceData}) => {
  return (
    <div id="experiencePreview">
      <h2 className="experience title">Experience</h2>
      <div className="experience details container">
        {experienceData.map((experienceItem) => {
          return (
            <div id={`preview${experienceItem.id}`} key={experienceItem.id} className={`${experienceItem.hidden ? " hidden" : ""}`}>
              <div className="top">
                <h3 className="institution">{experienceItem.institution}</h3>
                <p className="location">{experienceItem.location}</p>
              </div>
              <div className="bottom">
                <p className="title">{experienceItem.title}</p>
                <p className="date">{experienceItem.startDate} - {experienceItem.endDate}</p>
              </div>
              <div className="description">
                <p className="title">{experienceItem.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Experience