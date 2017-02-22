import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import 'normalize.css';
import './index.css';

import configureStore from './store/configureStore';
import rootSaga from './sagas';
import routes from './routes';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router routes={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('root')
);
