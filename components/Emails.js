import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

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
                    <td>{email.folderName}</td>
                    <td><button onClick={() => this.props.removeEmail(email.id)}>Delete</button></td>
                    <td><MoveEmail emailId={email.id}/></td>
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
  return {
    emails: state.emailApp.emails.emails.map((email) => {
      return Object.assign({}, email, { folderName: state.emailApp.folders.folders.find((folder) => folder.id === email.folderId).name });
    }),
    fetchedAt: state.emailApp.emails.fetchedAt
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchEmails: () => dispatch(emailApp.actions.email.fetchEmails()),
    removeEmail: (emailId) => dispatch(emailApp.actions.email.removeEmail(emailId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Emails);
