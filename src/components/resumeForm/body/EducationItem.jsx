const EducationItem = ({educationItem, toggleCredentialVisibility, deleteCredential, id}) => {
  return (
    <div
      id={`input${id}`}
      className="educationItem"
    >
      <p className="educationItem">{educationItem.institution}</p>
      <div className="buttonsContainer">
        <button type="button" className="editCredential icon"></button>
        <button
          type="button"
          className={
            educationItem.hidden
              ? "hideCredential icon"
              : "showCredential icon"
          }
          onClick={() => {
            toggleCredentialVisibility(educationItem.id);
          }}
        ></button>
        <button
          type="button"
          className="deleteCredential icon"
          onClick={() => {
            deleteCredential(educationItem.id);
          }}
        ></button>
      </div>
    </div>
  )
}

export default EducationItem
