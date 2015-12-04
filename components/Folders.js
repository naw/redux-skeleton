import React, { Component, PropTypes } from 'react'
import superConnect from '../utils/superConnect'

import AddFolder from './AddFolder'
import emailApp from '../emailApp'

class Folders extends Component {

  static populateStore(store, props) {
    console.log("populating store for folders");
    // store.dispatch(emailApp.actions.folder.fetchFolders());
  }

  render() {
    const { folders  } = this.props;
    return (
      folders ? (
        <div>
          <h1>Folders</h1>
          <ul>
            { folders.map((folder) => <li key={folder.id}>{folder.name} - <button onClick={() => this.props.removeFolder(folder.id)}>Delete</button></li>) }
          </ul>
          <AddFolder/>
        </div>
      ) : <p>Loading...</p>
    )
  }
}

const mapStateToProps = function(state) {
  const foldersState = state.emailApp.folders;
  return {
    folders: foldersState.folders,
    fetchedAt: foldersState.fetchedAt
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    removeFolder: (folderId) => dispatch(emailApp.actions.folder.removeFolder(folderId))
  }
}

const runSideEffects = function(state, dispatch) {
  dispatch(emailApp.actions.folder.ensureFreshFolders());
}

export default superConnect(runSideEffects, mapStateToProps, mapDispatchToProps)(Folders);
