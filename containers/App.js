import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        Your App Goes Here
      </div>
    )
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(App)
