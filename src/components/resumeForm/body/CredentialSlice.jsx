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

// TDL : credential slice opens up new "edit form". 
// This edit form will know which credential item is being edited, because we will pass the id of the credential item through to it
// We will keep track of which form it is as well (for validation pur)


export default CredentialSlice
