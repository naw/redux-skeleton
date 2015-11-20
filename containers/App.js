import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Folders from '../components/Folders'
import Emails from '../components/Emails'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Folders/>
        <Emails/>
      </div>
    )
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(App)
