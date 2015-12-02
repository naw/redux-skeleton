import uid from 'uid';
import emailApp from '../emailApp';

export const OPEN_EMAIL = 'OPEN_EMAIL';
export const REMOVED_EMAIL = 'REMOVED_EMAIL';

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
