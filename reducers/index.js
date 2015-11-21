import { combineReducers } from 'redux'
import emailApp from '../emailApp'
import { routerStateReducer } from 'redux-router';

const guiReducer = function(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({
  emailApp: emailApp.reducer,
  gui: guiReducer,
  router: routerStateReducer
});

export default rootReducer;
