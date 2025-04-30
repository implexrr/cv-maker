const Education = ({ educationData }) => {
  return (
    <div id="educationPreview">
      <h2 className="education title">Education</h2>
      <div className="education details container">
        {educationData.map((educationItem) => {
          return (
            <div
              id={`preview${educationItem.id}`}
              key={educationItem.id}
              className={`${educationItem.hidden ? "educationItem hidden" : "educationItem"}`}
            >
              <div className="top">
                <h3 className="institution">{educationItem.institution}</h3>
                <p className="location">{educationItem.location}</p>
              </div>
              <div className="bottom">
                <p className="degree">{educationItem.degree}</p>
                <p className="date">
                  {educationItem.startDate} - {educationItem.endDate}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
