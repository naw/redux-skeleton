import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import emailApp from '../emailApp'

class AddFolder extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { folderName: '' };
  }

  updateFolderName(folderName) {
    this.setState({ folderName: folderName });
  }

  submit(e) {
    e.preventDefault();
    this.props.addFolder(this.state.folderName);
    this.setState({ folderName: '' });
  }

  render() {
    return (
      <div>
        <h2>Add Folder</h2>
        <form onSubmit={(e) => this.submit(e)}>
          <input type="text" value={this.state.folderName} onChange={(e) => this.updateFolderName(e.target.value)}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    addFolder: (folderName) => dispatch(emailApp.actions.folder.addFolder(folderName))
  }
}

export default connect(undefined, mapDispatchToProps)(AddFolder);
