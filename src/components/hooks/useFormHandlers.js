import slugify from "../../utils/slugify";
import emptyForm from "../../data/emptyForm.json";
import { useState } from "react";

/**
 * Custom hook for managing resume credential form data (e.g. education, experience, whatever else if I feel like adding it in the future).
 *
 * @param {Object} props
 * @param {Object} props.resumeData - Full resume data object.
 * @param {Function} props.setResumeData - Function to update resumeData state.
 * @param {string} props.credentialType - Type of credential (e.g., "education", "experience", etc.).
 */

export function useFormHandlers({ resumeData, setResumeData, credentialType }) {
  // Local form state for currently edited or new credential
  const [formData, setFormData] = useState(emptyForm[credentialType]);

  // Controls whether the credential form is visible
  const [isAddingCredential, setIsAddingCredential] = useState(false);

  // Helper to update resumeData with new credential list for the given type
  const setCredentialData = (newCredentials) =>
    setResumeData((resumeData) => ({
      ...resumeData,
      [credentialType]: newCredentials,
    }));

  // Toggles the form visibility and resets formData
  const toggleForm = () => {
    setIsAddingCredential((isAddingCredential) => !isAddingCredential);
    setFormData(emptyForm[credentialType]);
  };

  // Handles form submission: creates a new credential entry and adds it to resumeData
  const saveSubmission = (e) => {
    e.preventDefault();
    // Generate a unique ID based on content
    const slug = slugify(
      `${formData.institution}${formData.startDate}${formData.endDate}`,
    );

    // Build new credential object
    const newItem = {
      ...formData,
      id: slug,
      type: credentialType,
      hidden: false,
    };

    // Append to existing credentials and update state
    setCredentialData([...resumeData[credentialType], newItem]);
    toggleForm(); // Hide the form after submission
  };

  // Deletes a credential based on its ID
  const deleteCredential = (idToDelete) => {
    const newCredentials = resumeData[credentialType].filter(
      (item) => item.id !== idToDelete,
    );
    setCredentialData(newCredentials);
  };

  // Updates an existing credential entry by ID
  const updateCredential = (idToUpdate, updatedItemData) => {
    const slug = slugify(
      `${updatedItemData.institution}${updatedItemData.startDate}${updatedItemData.endDate}`,
    );
    const newCredential = {
      ...updatedItemData,
      id: slug,
      type: credentialType,
      hidden: false,
    };
    const newCredentials = resumeData[credentialType].map((item) =>
      item.id === idToUpdate ? newCredential : item,
    );
    setCredentialData(newCredentials);
  };

  // Toggles the visibility of a credential (shown/hidden) without deleting it
  const toggleCredentialVisibility = (idToToggle) => {
    const newCredentials = resumeData[credentialType].map((item) =>
      item.id === idToToggle ? { ...item, hidden: !item.hidden } : item,
    );
    setCredentialData(newCredentials);
  };

  // Return handlers and state for use in components
  return {
    formData,
    setFormData,
    isAddingCredential,
    toggleForm,
    saveSubmission,
    toggleCredentialVisibility,
    updateCredential,
    deleteCredential,
  };
}
