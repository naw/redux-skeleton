import { api } from '../api'

window.api = api;

export const FETCHED_EMAILS = 'FETCHED_EMAILS'

// State action
const fetchedEmails = function(emails, fetchedAt) {
  return { type: FETCHED_EMAILS, emails: emails, fetchedAt: fetchedAt  };
}

// Public application API for consumption by GUI
export function fetchEmails() {
  return (dispatch) => {
    const [emails, fetchedAt] = api.fetchEmails();
    dispatch(fetchedEmails(emails, fetchedAt));
  }
}

export function removeEmail(emailId) {
  return (dispatch) => {
    api.removeEmail(emailId);
    dispatch(fetchEmails());
  }
}

export function moveEmailToFolder(emailId, folderId) {
  return (dispatch) => {
    api.moveEmailToFolder(emailId, folderId);
    dispatch(fetchEmails());
  }
}
