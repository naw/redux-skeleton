import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import { devTools } from 'redux-devtools';
import thunk from 'redux-thunk';

export const USE_DEV_TOOLS = true;

export default function configureStore(initialState) {
  const finalCreateStore = USE_DEV_TOOLS ? compose(applyMiddleware(thunk), devTools())(createStore) : compose(applyMiddleware(thunk))(createStore);
  const store = finalCreateStore(rootReducer, initialState)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
