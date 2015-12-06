import { FETCHED_EMAILS } from '../actions/emailActions.js';

const emailsReducer = function(state = [], action) {
  switch(action.type) {
    case FETCHED_EMAILS:
      return { emails: action.emails, fetchedAt: action.fetchedAt }
    default:
      return state;
  }
}

export default emailsReducer;
