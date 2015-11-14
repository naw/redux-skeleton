import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import App from './containers/App'
import configureStore, { USE_DEV_TOOLS } from './store/configureStore'

const store = configureStore();

const debugPanel = USE_DEV_TOOLS ? (
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>) : null;

let rootElement = document.getElementById('root')

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {debugPanel}
  </div>,
  rootElement
)
