import React, { Component } from 'react'
import superConnect from '../utils/superConnect'

import emailApp from '../emailApp'

class OpenEmail extends Component {

  render() {
    const { openEmail, email } = this.props;
    return (
      <div className="openEmail">
        <h4>{email.subject}</h4>
        <p>{email.body}</p>
      </div>
    )
  }
}

const mapStateToProps = function(state, existingProps) {
  return {
    email: state.emailApp.emails.emails.find((email) => email.id === existingProps.openEmail.emailId)
  }
}

const runSideEffects = function(state, dispatch) {
  dispatch(emailApp.actions.email.ensureFreshEmails());
}

export default superConnect(runSideEffects, mapStateToProps)(OpenEmail);
