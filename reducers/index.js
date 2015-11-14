import { combineReducers } from 'redux'

import { ADD_POST } from '../actions/postActions'

const postsReducer = function(state = [], action) {
  switch(action.type) {
    case ADD_POST:
      return state.concat({ title: action.title, authorName: action.authorName }) ;
    default:
      return state;
  }
}

const authorsReducer = function(state = [], action) {
  switch(action.type) {
    case ADD_POST:
      if(state.find((author) => author.name === action.authorName)) {
        // Author already exists
        return state;
      }
      else {
        // Add author to authors array
        return state.concat({ name: action.authorName });
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers(
  {
    posts: postsReducer,
    authors: authorsReducer
  }
)

export default rootReducer;
