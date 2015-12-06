import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import AddFolder from './AddFolder'
import emailApp from '../emailApp'

class Folders extends Component {
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
  const foldersState = state.emailApp.folders();
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

export default connect(mapStateToProps, mapDispatchToProps)(Folders);
