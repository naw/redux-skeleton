import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import { devTools } from 'redux-devtools';

export const USE_DEV_TOOLS = true;

export default function configureStore(initialState) {
  let composed = compose(applyMiddleware(thunk));
  if(USE_DEV_TOOLS) {
    composed = compose(composed, devTools());
  }
  const store = composed(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
