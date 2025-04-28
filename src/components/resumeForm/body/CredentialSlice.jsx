const CredentialSlice = ({credentialItem, toggleCredentialVisibility, deleteCredential}) => {
  return (
    <div
      id={`input${credentialItem.id}`}
      className={"credentialSlice"}
    >
      <p className="credentialSlice">{credentialItem.institution}</p>
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
            toggleCredentialVisibility(credentialItem.id);
          }}
        ></button>
        <button
          type="button"
          className="deleteCredential icon"
          onClick={() => {
            deleteCredential(credentialItem.id);
          }}
        ></button>
      </div>
    </div>
  )
}


export default CredentialSlice
