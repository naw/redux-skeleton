import { api } from '../api'

import * as emailActions from './emailActions'

export const FETCHED_FOLDERS = 'FETCHED_FOLDERS'
export const ADDED_FOLDER = 'ADDED_FOLDER'
export const REMOVED_FOLDER = 'REMOVED_FOLDER'

const fetchedFolders = function(folders, fetchedAt) {
  return { type: FETCHED_FOLDERS, folders: folders, fetchedAt: fetchedAt };
}

const removedFolder = function(folderId) {
  return { type: REMOVED_FOLDER, folderId: folderId };
}

const addedFolder = function() {
  return { type: ADDED_FOLDER };
}

// Public application API for consumption by GUI

export const fetchFolders = function() {
  return (dispatch) => {
    const [folders, fetchedAt] = api.fetchFolders();
    dispatch(fetchedFolders(folders, fetchedAt));
  }
}

export const addFolder = function(name) {
  return (dispatch) => {
    api.addFolder(name);
    dispatch(addedFolder());
  }
}

export const removeFolder = function(folderId) {
  return (dispatch) => {
    api.removeFolder(folderId);
    dispatch(removedFolder(folderId));
  }
}
