import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import App from './containers/App'
import configureStore, { USE_DEV_TOOLS } from './store/configureStore'
import { ReduxRouter } from 'redux-router'
import { Route, Router } from 'react-router'

import emailApp from './emailApp'

import Folders from './components/Folders'
import Folder from './components/Folder'
import Emails from './components/Emails'

import generatePageLoaders from './pageLoaders'

window.emailApp = emailApp;
const store = configureStore();

const pageLoaders = generatePageLoaders(store.dispatch);

const debugPanel = USE_DEV_TOOLS ? (
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>) : null;

let rootElement = document.getElementById('root')

render(
  <div>
    <Provider store={store}>
      <ReduxRouter>
        <Route path="/" component={App} onEnter={pageLoaders.appShow}>
          <Route path="folders" component={Folders} onEnter={pageLoaders.foldersIndex}/>
          <Route path="emails" component={Emails} onEnter={pageLoaders.emailsIndex}/>
          <Route path="folder/:folderId" component={Folder} onEnter={pageLoaders.folderShow}/>
        </Route>
      </ReduxRouter>
    </Provider>
    {debugPanel}
  </div>,
  rootElement
)
