import slugify from "../../utils/slugify";

const Education = ({educationData}) => {
  return (
    <div id="educationPreview">
      <h2 className="education title">Education</h2>
      <div className="education details container">
        {educationData.map((educationItem) => {
          const key = slugify(`${educationItem.institution}-${educationItem.degree}-${educationItem.startDate}-${educationItem.endDate}`);
          return (
            <div key={key} className="educationItem">
              <div className="top">
                <h3 className="institution">{educationItem.institution}</h3>
                <div className="location">{educationItem.location}</div>
              </div>
              <div className="bottom">
                <div className="degree">{educationItem.degree}</div>
                <div className="date">{educationItem.startDate} - {educationItem.endDate}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Education