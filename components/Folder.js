import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import emailApp from '../emailApp'
import * as actions from '../actions'
import MoveEmail from './MoveEmail'


class Folder extends Component {

  static populateStore(store, props) {
    console.log("populating store for folder");
    store.dispatch(emailApp.actions.email.fetchEmails());
  }

  render() {
    console.log("Rendering Folder");
    const { emails, folder, fetchedAt } = this.props;
    return (
      folder !== undefined && emails !== undefined ? (
        <div>
          <h1>{folder.name} (fetched at {fetchedAt}</h1><button onClick={this.props.fetchEmails}>Fetch</button>
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
                      <td><MoveEmail emailId={email.id}/></td>
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
  const folder = state.emailApp.folders.folders ? state.emailApp.folders.folders.find((folder) => folder.id === existingProps.params.folderId) : undefined;
  const emails = state.emailApp && state.emailApp.emails && state.emailApp.emails.emails ? state.emailApp.emails.emails.filter((email) => email.folderId === existingProps.params.folderId) : undefined;
  console.log(folder);
  console.log(emails);
  return {
    folder: folder,
    emails: emails,
    fetchedAt: state.emailApp.emails.fetchedAt
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
