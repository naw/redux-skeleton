import React, { Component } from 'react'
import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(OpenEmail);