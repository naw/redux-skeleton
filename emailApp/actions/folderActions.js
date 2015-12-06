import { api } from '../api'

import * as emailActions from './emailActions'

export const FETCHED_FOLDERS = 'FETCHED_FOLDERS'

const fetchedFolders = function(folders, fetchedAt) {
  return { type: FETCHED_FOLDERS, folders: folders, fetchedAt: fetchedAt };
}

// Public application API for consumption by GUI

export const fetchFolders = function() {
  return (dispatch) => {
    const [folders, fetchedAt] = api.fetchFolders();
    console.log("dispatching fetched folders");
    setTimeout(() => dispatch(fetchedFolders(folders, fetchedAt)), 1000);
  }
}

export const addFolder = function(name) {
  return (dispatch) => {
    api.addFolder(name)
    dispatch(fetchFolders());
  }
}

export const removeFolder = function(folderId) {
  return (dispatch) => {
    api.removeFolder(folderId);
    dispatch(emailActions.fetchEmails());
    dispatch(fetchFolders());
  }
}
