import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import emailApp from '../emailApp'
import MoveEmail from './MoveEmail'

class Folder extends Component {

  render() {
    const { emails, folder, fetchedAt } = this.props;
    return (
      <div>
        <h1>{folder.name} (fetched at {fetchedAt}</h1><button onClick={this.props.fetchEmails}>Fetch</button>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Sender</th>
              <th>Delete</th>
              <th>Move</th>
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
                    <td><MoveEmail emailId={email.id}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = function(state, existingProps) {
  return {
    folder: state.emailApp.folders.folders.find((folder) => folder.id === existingProps.params.folderId),
    emails: state.emailApp.emails.emails.filter((email) => email.folderId === existingProps.params.folderId),
    fetchedAt: state.emailApp.emails.fetchedAt
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchEmails: () => dispatch(emailApp.actions.email.fetchEmails()),
    removeEmail: (emailId) => dispatch(emailApp.actions.email.removeEmail(emailId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
