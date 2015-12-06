import { REMOVED_EMAIL, MOVED_EMAIL_TO_FOLDER, FETCHED_EMAILS, fetchEmails } from '../actions/emailActions.js'
import { REMOVED_FOLDER } from '../actions/folderActions.js';

const initialState = {
  emails: [],
  dirty: true
}

const stateWrapper = function(state) {
  return () => {
    if(state.dirty) {
      console.log("Fetching emails from dirty store");
      setTimeout(() => store.dispatch(fetchEmails()), 1000);
    }
    return state;
  }
}

const emailsReducer = function(state = stateWrapper(initialState), action) {
  switch(action.type) {
    case REMOVED_FOLDER:
    case REMOVED_EMAIL:
    case MOVED_EMAIL_TO_FOLDER:
      console.log("Marking emails as dirty");
      return stateWrapper(Object.assign({}, state(), { dirty: true }));
    case FETCHED_EMAILS:
      console.log("Fetched emails in emails reducer");
      return stateWrapper({ emails: action.emails, dirty: false, fetchedAt: action.fetchedAt });
    default:
      return state;
  }
}

export default emailsReducer;
