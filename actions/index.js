import uid from 'uid';
import emailApp from '../emailApp';

export const OPEN_EMAIL = 'OPEN_EMAIL';
export const REMOVED_EMAIL = 'REMOVED_EMAIL';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const INITIALIZE_COUNTER = 'INITIALIZE_COUNTER';

export function openEmail(emailId) {
  return { type: OPEN_EMAIL, id: uid(), emailId: emailId };
}

export function removedEmail(emailId) {
  return { type: REMOVED_EMAIL, emailId: emailId };
}

export function removeEmail(emailId) {
  return (dispatch, getState) => {
    dispatch(emailApp.actions.email.removeEmail(emailId));
    // dispatch(removedEmail(emailId));
  }
}

export function incrementCounter() {
  return { type: INCREMENT_COUNTER };
}

export function initializeCounter() {
  return { type: INITIALIZE_COUNTER };
}
