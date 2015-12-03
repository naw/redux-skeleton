import { ADDED_FOLDER, REMOVED_FOLDER, FETCHED_FOLDERS, fetchFolders }  from '../actions/folderActions.js';

const initialState = {
  folders: null,
  dirty: true
}

const stateWrapper = function(state) {
  return () => {
    if(state.dirty) {
      console.log("Fetching folders from dirty store");
      store.dispatch(fetchFolders());
    }
    return state;
  }
}

const foldersReducer = function(state = stateWrapper(initialState), action) {
  switch(action.type) {
    case ADDED_FOLDER:
    case REMOVED_FOLDER:
      console.log("Added or Removed folder in folders reducer");
      return stateWrapper(Object.assign({}, state(), { dirty: true }));
    case FETCHED_FOLDERS:
      console.log("Fetched folders in folders reducer");
      return stateWrapper({ folders: action.folders, dirty: false });
    default:
      return state;
  }
}

export default foldersReducer;
