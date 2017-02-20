import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.css';

import configureStore from './store/configureStore';
import rootSaga from './sagas';
import App from './containers/App';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
