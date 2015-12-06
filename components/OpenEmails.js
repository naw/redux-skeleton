import React, { Component } from 'react'
import { connect } from 'react-redux'
import OpenEmail from './OpenEmail.js';

class OpenEmails extends Component {

  render() {
    const { openEmails } = this.props;
    return (
      <div className="openEmails">
        {
          openEmails.map((openEmail) => {
            return <OpenEmail key={openEmail.id} openEmail={openEmail}/>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    openEmails: state.gui.openEmails
  }
}

export default connect(mapStateToProps)(OpenEmails);
