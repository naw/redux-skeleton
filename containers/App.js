import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Folders from '../components/Folders'
import { Link } from 'react-router'

class App extends Component {
  render() {
    const { dispatch, folders } = this.props
    return (
      <div>
        <h2>Welcome To the Email App</h2>
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/folders">Folders</Link>
              <ul>
                {
                  folders.map((folder) => {
                    return (
                      <li key={folder.id}><Link to={'/folder/' + folder.id}>{folder.name}</Link></li>
                    )
                  })
                }
              </ul>
            </li>
            <li>
              <Link to="/emails">Emails</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          {this.props.children}
        </div>
      </div>
    )
  }
}

// Wrap the component to inject dispatch and state into it
export default connect((state) => { return { folders: state.emailApp.folders.folders } })(App)
