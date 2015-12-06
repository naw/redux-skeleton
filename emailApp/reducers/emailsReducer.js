import { REMOVED_EMAIL, MOVED_EMAIL_TO_FOLDER, FETCHED_EMAILS, fetchEmails } from '../actions/emailActions.js'
import { REMOVED_FOLDER } from '../actions/folderActions.js';

const initialState = {
  emails: [],
  dirty: true
}

const emailsReducer = function(state = initialState, action) {
  switch(action.type) {
    case REMOVED_FOLDER:
    case REMOVED_EMAIL:
    case MOVED_EMAIL_TO_FOLDER:
      console.log("Marking emails as dirty");
      return Object.assign({}, state, { dirty: true });
    case FETCHED_EMAILS:
      console.log("Fetched emails in emails reducer");
      return { emails: action.emails, dirty: false, fetchedAt: action.fetchedAt };
    default:
      return state;
  }
}

export default emailsReducer;
