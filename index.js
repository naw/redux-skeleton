import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App';
import DevTools from './containers/DevTools';

import configureStore, { USE_DEV_TOOLS } from './store/configureStore'

const store = configureStore();

let rootElement = document.getElementById('root')

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    { USE_DEV_TOOLS ? DevTools : null }
  </div>,
  rootElement
)
