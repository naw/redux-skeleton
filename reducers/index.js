import { combineReducers } from 'redux'
import emailApp from '../emailApp'
import { OPEN_EMAIL, REMOVED_EMAIL, INCREMENT_COUNTER, INITIALIZE_COUNTER } from '../actions';
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

const counterReducer = function(state = 0, action) {
  switch(action.type) {
    case INITIALIZE_COUNTER:
      return 0;
    case INCREMENT_COUNTER:
      return state + 1;
    default:
      return state;
  }
}

const guiReducer = combineReducers({
  openEmails: openEmailsReducer
});

const rootReducer = combineReducers({
  counter: counterReducer,
  emailApp: emailApp.reducer,
  gui: guiReducer,
});

export default rootReducer;
