import React, { Component, PropTypes } from 'react'
import superConnect from '../utils/superConnect'
import Folders from '../components/Folders'
import OpenEmails from '../components/OpenEmails.js';
import { Link } from 'react-router'

import emailApp from '../emailApp';


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
                  folders ? (
                    folders.map((folder) => {
                      return (
                        <li key={folder.id}><Link to={'/folder/' + folder.id}>{folder.name}</Link></li>
                      )
                    })
                  ) : <li>Loading Folders...</li>
                }
              </ul>
            </li>
            <li>
              <Link to="/emails">Emails</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </div>
        <div className="main">
          {this.props.children}
        </div>
        <OpenEmails/>

      </div>
    )
  }
}

const runSideEffects = function(state, dispatch) {
  dispatch(emailApp.actions.folder.ensureFreshFolders());
}

// Wrap the component to inject dispatch and state into it
export default superConnect(runSideEffects, (state) => { return { folders: state.emailApp.folders.folders } })(App)
