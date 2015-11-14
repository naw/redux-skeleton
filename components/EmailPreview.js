import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmailPreview extends Component {

  render() {
    console.log("Rendering email preview");
    const { email } = this.props;
    console.log(email);
    if(email) {
      return (
        <div>
          <h4>{email.subject}</h4>
          <div>
            {email.body}
          </div>
        </div>
      )
    }
    else {
      return <div/>;
    }
  }
}

const mapStateToProps = function(state, existingProps) {
  return {
    email: state.emailApp.emails.emails.find((email) => email.id == existingProps.params.emailId)
  }
}

export default connect(mapStateToProps)(EmailPreview);
