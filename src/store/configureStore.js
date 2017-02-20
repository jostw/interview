import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

let middleware = [];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  const loggerMiddleware = createLogger();

  middleware = [...middleware, loggerMiddleware];
}

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

export default configureStore;
