const FormLabel = ({isAddingCredential, toggleCredentialForm, formType}) => {
  return (
      <div
        className="formLabel"
        style={{
          justifyContent: isAddingCredential ? "center" : "space-between",
        }}
      >
        <div className="formLabel icon"></div>
        <div className="formLabel title">{formType}</div>
        {!isAddingCredential && (
          <button
            type="button"
            className="addCredential icon"
            onClick={toggleCredentialForm}
          ></button>
        )}
      </div>
  )
}

export default FormLabel