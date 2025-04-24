import slugify from "../../utils/slugify";

const Experience = ({experienceData}) => {
  return (
    <div id="experiencePreview">
      <h2 className="experience title">Experience</h2>
      <div className="experience details container">
        {experienceData.map((experienceItem) => {
          const key = slugify(`${experienceItem.companyName}-${experienceItem.title}-${experienceItem.startDate}-${experienceItem.endDate}`);
          return (
            <div key={key} className="experienceItem">
              <div className="top">
                <h3 className="companyName">{experienceItem.companyName}</h3>
                <div className="location">{experienceItem.location}</div>
              </div>
              <div className="bottom">
                <div className="title">{experienceItem.title}</div>
                <div className="date">{experienceItem.startDate} - {experienceItem.endDate}</div>
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