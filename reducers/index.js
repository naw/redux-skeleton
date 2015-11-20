import { combineReducers } from 'redux'
import emailApp from '../emailApp'

const guiReducer = function(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  emailApp: emailApp.reducer,
  gui: guiReducer
});

export default rootReducer;
