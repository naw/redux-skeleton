import { api } from '../api'

window.api = api;

export const FETCHED_EMAILS = 'FETCHED_EMAILS'
export const REMOVED_EMAIL = 'REMOVED_EMAIL'
export const MOVED_EMAIL_TO_FOLDER = 'MOVED_EMAIL_TO_FOLDER'

// State actions
const removedEmail = function(emailId) {
  return { type: REMOVED_EMAIL, emailId: emailId };
}

const movedEmailToFolder = function(emailId, folderId) {
  return { type: MOVED_EMAIL_TO_FOLDER, emailId: emailId, folderId: folderId };
}

const fetchedEmails = function(emails, fetchedAt) {
  return { type: FETCHED_EMAILS, emails: emails, fetchedAt: fetchedAt  };
}

// Public application API for consumption by GUI
export function fetchEmails() {
  return (dispatch) => {
    const [emails, fetchedAt] = api.fetchEmails();
    setTimeout(() => dispatch(fetchedEmails(emails, fetchedAt)), 1000);
  }
}

export function ensureFreshEmails() {
  return (dispatch, getState) => {
    if(getState().emailApp.emails.dirty) {
      dispatch(fetchEmails());
    }
  }
}

export function removeEmail(emailId) {
  return (dispatch) => {
    api.removeEmail(emailId);
    dispatch(removedEmail(emailId));
  }
}

export function moveEmailToFolder(emailId, folderId) {
  return (dispatch) => {
    api.moveEmailToFolder(emailId, folderId);
    dispatch(movedEmailToFolder(emailId, folderId));
  }
}
