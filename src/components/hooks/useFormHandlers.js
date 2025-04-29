import slugify from "../../utils/slugify"
import emptyForm from "../../data/emptyForm.json"

import { useState } from "react";

export function useFormHandlers({ resumeData, setResumeData, credentialType }) {
  const [formData, setFormData] = useState(emptyForm[credentialType]);
  const [isAddingCredential, setIsAddingCredential] = useState(false);

  const setCredentialData = (newCredentials) =>
    setResumeData((resumeData) => ({ ...resumeData, [credentialType]: newCredentials}));

  const toggleForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
    setFormData(emptyForm[credentialType]);
  };

  const saveSubmission = (e) => {
    e.preventDefault();
    const slug = slugify(
      `${formData.institution}${formData.startDate}${formData.endDate}`,
    );
    const newItem = { ...formData, id: slug, type: credentialType, hidden: false };
    setCredentialData([...resumeData[credentialType], newItem]);
    toggleForm();
  };
  

  const deleteCredential = (idToDelete) => {
    const newCredentials = resumeData[credentialType].filter((item) => item.id !== idToDelete);
    setCredentialData(newCredentials);
  };

  const updateCredential = (idToUpdate, updatedItemData) => {
    const slug = slugify(`${updatedItemData.institution}${updatedItemData.startDate}${updatedItemData.endDate}`);
    const newCredential = {
      ...updatedItemData,
      id : slug, type: credentialType, hidden: false
    }
    const newCredentials = resumeData[credentialType].map((item) => item.id === idToUpdate ? newCredential : item);
    setCredentialData(newCredentials);
  }


  const toggleCredentialVisibility = (idToToggle) => {
    const newCredentials = resumeData[credentialType].map((item) =>
      item.id === idToToggle
        ? { ...item, hidden: !item.hidden }
        : item,
    );
    console.log(newCredentials);
    setCredentialData(newCredentials);
  };

  return {
    formData,
    setFormData,
    isAddingCredential,
    toggleForm,
    saveSubmission,
    toggleCredentialVisibility,
    updateCredential,
    deleteCredential
  };
}
