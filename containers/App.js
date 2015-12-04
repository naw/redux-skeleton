import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Folders from '../components/Folders'
import OpenEmails from '../components/OpenEmails.js';
import { Link } from 'react-router'
import { addDirtyHook } from '../utils/dirtyHook';
import { exampleAction } from '../actions/ExampleActions';


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

function mapStateToProps(state) {
  return {
    folders: state.emailApp.folders.folders
  };
}

function dirtyHook(dispatch, state) {
  if (true || state.emails.dirty) {
    dispatch(exampleAction());
  }
}

const hookedMapStateToProps = addDirtyHook(dirtyHook, mapStateToProps);

// Wrap the component to inject dispatch and state into it
export default connect(hookedMapStateToProps)(App);
