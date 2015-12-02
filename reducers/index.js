import { combineReducers } from 'redux'
import emailApp from '../emailApp'
import { OPEN_EMAIL, REMOVED_EMAIL } from '../actions';
import { FETCHED_EMAILS } from '../emailApp/actions/emailActions'

const openEmailsReducer = function(state = [], action) {
  switch(action.type) {
    case OPEN_EMAIL:
      return state.concat({ id: action.id, emailId: action.emailId });
    case FETCHED_EMAILS:
      return state.filter((openEmail) => action.emails.find((email) => email.id === openEmail.emailId));
    default:
      return state;
  }
}

const guiReducer = combineReducers({
  openEmails: openEmailsReducer
});

const rootReducer = combineReducers({
  emailApp: emailApp.reducer,
  gui: guiReducer,
});

export default rootReducer;
