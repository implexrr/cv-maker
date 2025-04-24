import slugify from "../../utils/slugify";

const Education = ({educationData}) => {
  console.log(educationData);
  return (
    <div id="educationPreview">
      <h2 className="education title">Education</h2>
      <div className="education details container">
        {educationData.map((eduItem) => {
          const key = slugify(`${eduItem.institution}-${eduItem.degree}-${eduItem.startDate}-${eduItem.endDate}`);
          return (
            <div key={key} className="educationItem">
              <h3 className="institution">{eduItem.institution}</h3>
              <div className="degree">{eduItem.degree}</div>
              <div className="location">{eduItem.location}</div>
              <div className="date">{eduItem.startDate} - {eduItem.endDate}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Education