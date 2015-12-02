import { FETCHED_FOLDERS } from '../actions/folderActions.js';

const foldersReducer = function(state = [], action) {
  switch(action.type) {
    case FETCHED_FOLDERS:
      console.log("In reducer for fetched folders");
      console.log(action);
      return { folders: action.folders, fetchedAt: action.fetchedAt };
    default:
      return state;
  }
}

export default foldersReducer;
