const CredentialSlice = ({credentials, credentialType, credentialItem, toggleCredentialVisibility, deleteCredential, id}) => {
  return (
    <div
      id={`input${id}`}
      className={"credentialSlice"}
    >
      <p className="credentialSlice">{credentialType == "education" ? credentialItem.institution : credentialItem.companyName}</p>
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
            toggleCredentialVisibility(credentialItem.id, credentials, credentialType);
          }}
        ></button>
        <button
          type="button"
          className="deleteCredential icon"
          onClick={() => {
            deleteCredential(credentialItem.id, credentials, credentialType);
          }}
        ></button>
      </div>
    </div>
  )
}

export default CredentialSlice
