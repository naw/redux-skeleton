import { combineReducers } from 'redux'

import emailsReducer from '../reducers/emailsReducer.js';
import foldersReducer from '../reducers/foldersReducer.js';

const rootReducer = combineReducers({
  emails: emailsReducer,
  folders: foldersReducer
});

export default rootReducer;
