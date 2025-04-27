const FormLabel = ({isAddingCredential, toggleForm, labelText}) => {
  return (
      <div
        className="formLabel"
        style={{
          justifyContent: isAddingCredential ? "center" : "space-between",
        }}
      >
        <div className="formLabel icon"></div>
        <div className="formLabel title">{labelText}</div>
        {!isAddingCredential && (
          <button
            type="button"
            className="addCredential icon"
            onClick={() => {toggleForm()}}
          ></button>
        )}
      </div>
  )
}

export default FormLabel