import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'normalize.css';
import './index.css';

import routes from './routes';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

let preloadedState = window.__PRELOADED_STATE__;

if (preloadedState) {
  const { hero } = preloadedState;

  preloadedState = {
    hero: {
      list: hero.list,
      profile: {
        ...hero.profile,
        remainder: 0,
        hasChanged: false
      }
    }
  };
}

const store = configureStore(preloadedState);
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('root')
);
