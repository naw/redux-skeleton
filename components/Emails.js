import React, { Component, PropTypes } from 'react'
import superConnect from '../utils/superConnect'

import MoveEmail from './MoveEmail'

class Emails extends Component {
  render() {
    const { emails, fetchedAt } = this.props;
    return (
      <div>
        <h1>Emails (fetched at {fetchedAt}</h1><button onClick={this.props.fetchEmails}>Fetch</button>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Sender</th>
              <th>Folder</th>
              <th>Delete</th>
              <th>Move</th>
            </tr>
          </thead>
          <tbody>
            {
              emails.map((email) => {
                return (
                  <tr key={email.id}>
                    <td>{email.subject}</td>
                    <td>{email.sender}</td>
                    <td>{email.folder ? email.folder.name : 'Missing...'}</td>
                    <td><button onClick={() => this.props.removeEmail(email.id)}>Delete</button></td>
                    <td><MoveEmail email={email}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const emailState = state.emailApp.emails;
  let folders = state.emailApp.folders.folders;
  let emails = emailState.emails;
  if(emails && folders) {
    emails = emails.map((email) => {
      return Object.assign({}, email, { folder: folders.find((folder) => folder.id === email.folderId) });
    });
  }
  return {
    emails: emails,
    fetchedAt: emailState.fetchedAt
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchEmails: () => dispatch(emailApp.actions.email.fetchEmails()),
    removeEmail: (emailId) => dispatch(emailApp.actions.email.removeEmail(emailId))
  }
}

const runSideEffects = function(state, dispatch) {
  dispatch(emailApp.actions.folder.ensureFreshFolders());
  dispatch(emailApp.actions.email.ensureFreshEmails());
}

export default superConnect(runSideEffects, mapStateToProps, mapDispatchToProps)(Emails);
