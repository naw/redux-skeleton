import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Posts from '../components/Posts'
import AllAuthors from '../components/AllAuthors'
import AddPost from '../components/AddPost'
import TopAuthor from '../components/TopAuthor'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <AddPost/>
        <Posts/>
        <AllAuthors/>
        <TopAuthor/>
      </div>
    )
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(App)
