import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import emailApp from '../emailApp'

class MoveEmail extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { selectedFolderId: props.email.folderId };
  }

  submit(e) {
    e.preventDefault();
    this.props.moveToFolder(this.state.selectedFolderId);
  }

  updateSelectedFolder(folderId) {
    this.setState({ selectedFolderId: folderId });
  }

  render() {
    const { folders, email } = this.props;

    return (
      <form onSubmit={(e) => this.submit(e)}>
        <select onChange={(e) => this.updateSelectedFolder(e.target.value)} value={this.state.selectedFolderId}>
          { folders.map((folder) => <option key={folder.id} value={folder.id}>{folder.name}</option> )}
        </select>
        <button type="submit">Move</button>
      </form>
    )
  }
}

const mapStateToProps = function(state, existingProps) {
  const email = state.emailApp.emails.emails.find((email) => email.id === existingProps.emailId);
  return {
    email: email,
    folders: state.emailApp.folders.folders
  }
}

const mapDispatchToProps = function(dispatch, existingProps) {
  return {
    moveToFolder: (folderId) => dispatch(emailApp.actions.email.moveEmailToFolder(existingProps.emailId, folderId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveEmail);
