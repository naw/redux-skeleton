import { FETCHED_FOLDERS } from '../actions/folderActions.js';

const foldersReducer = function(state = [], action) {
  switch(action.type) {
    case FETCHED_FOLDERS:
      return { folders: action.folders, fetchedAt: action.fetchedAt };
    default:
      return state;
  }
}

export default foldersReducer;
