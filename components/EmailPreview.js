import React, { Component } from 'react'
import superConnect from '../utils/superConnect'

class EmailPreview extends Component {
  static populateStore(store, props) {
    console.log("populating store for email preview");
    // store.dispatch(emailApp.actions.folder.fetchFolders());
  }

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

const runSideEffects = function() {
  dispatch(emailApp.actions.email.ensureFreshEmails());
}

export default superConnect(runSideEffects, mapStateToProps)(EmailPreview);
