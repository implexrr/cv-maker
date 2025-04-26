import CredentialSlice from "./CredentialSlice";

const CredentialSlices = ({
  credentialType,
  credentialItems,
  toggleCredentialVisibility,
  deleteCredential
}) => {
  return (
    <div className={`${credentialType}Slices`}>
      {credentialItems.map((credentialItem) => (
        <CredentialSlice
          key={credentialItem.id}
          credentialItem={credentialItem}
          toggleCredentialVisibility={toggleCredentialVisibility}
          deleteCredential={deleteCredential}
        />
      ))}
    </div>
  );
};

export default CredentialSlices;
