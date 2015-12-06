import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import emailApp from '../emailApp'
import * as actions from '../actions'
import MoveEmail from './MoveEmail'


class Folder extends Component {
  render() {
    const { emails, folder, fetchedAt } = this.props;
    return (
      folder !== undefined && emails !== undefined ? (
        <div>
          <h1>{folder.name} (fetched at {fetchedAt})</h1><button onClick={this.props.fetchEmails}>Fetch</button>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Sender</th>
                <th>Delete</th>
                <th>Move</th>
                <th>Open</th>
              </tr>
            </thead>
            <tbody>
              {
                emails.map((email) => {
                  return (
                    <tr key={email.id}>
                      <td><Link to={'/folder/' + folder.id + '/email/' + email.id}>{email.subject}</Link></td>
                      <td>{email.sender}</td>
                      <td><button onClick={() => this.props.removeEmail(email.id)}>Delete</button></td>
                      <td><MoveEmail email={email}/></td>
                      <td><button onClick={() => this.props.openEmail(email.id)}>Open</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {this.props.children}
        </div>
      ) : <p>Loading...</p>
    )
  }
}

const mapStateToProps = function(state, existingProps) {
  const foldersState = state.emailApp.folders();
  const emailsState = state.emailApp.emails();
  const folder = foldersState.folders ? foldersState.folders.find((folder) => folder.id === existingProps.params.folderId) : undefined;
  const emails = emailsState.emails ? emailsState.emails.filter((email) => email.folderId === existingProps.params.folderId) : undefined;
  return {
    folder: folder,
    emails: emails,
    fetchedAt: emailsState.fetchedAt
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchEmails: () => dispatch(emailApp.actions.email.fetchEmails()),
    removeEmail: (emailId) => dispatch(actions.removeEmail(emailId)),
    openEmail: (emailId) => dispatch(actions.openEmail(emailId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
