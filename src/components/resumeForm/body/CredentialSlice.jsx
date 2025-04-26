const CredentialSlice = ({credentialType, credentialItem, toggleCredentialVisibility, deleteCredential, id}) => {
  return (
    <div
      id={`input${id}`}
      className={"credentialSlice"}
    >
      <p className="credentialSlice">{credentialType == "education" ? credentialItem.institution : credentialItem.institution}</p>
      <div className="buttonsContainer">
        <button type="button" className="editCredential icon"></button>
        <button
          type="button"
          className={
            credentialItem.hidden
              ? "hideCredential icon"
              : "showCredential icon"
          }
          onClick={() => {
            toggleCredentialVisibility(credentialItem.id, credentialType);
          }}
        ></button>
        <button
          type="button"
          className="deleteCredential icon"
          onClick={() => {
            deleteCredential(credentialItem.id, credentialType);
          }}
        ></button>
      </div>
    </div>
  )
}

export default CredentialSlice
