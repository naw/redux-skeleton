import { ADDED_FOLDER, REMOVED_FOLDER, FETCHED_FOLDERS, fetchFolders }  from '../actions/folderActions.js';

const initialState = {
  folders: null,
  dirty: true
}

const foldersReducer = function(state = initialState, action) {
  switch(action.type) {
    case ADDED_FOLDER:
    case REMOVED_FOLDER:
      console.log("Added or Removed folder in folders reducer");
      return Object.assign({}, state, { dirty: true });
    case FETCHED_FOLDERS:
      console.log("Fetched folders in folders reducer");
      return { folders: action.folders, dirty: false };
    default:
      return state;
  }
}

export default foldersReducer;
