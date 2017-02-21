import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import 'normalize.css';
import './index.css';

import configureStore from './store/configureStore';
import rootSaga from './sagas';
import App from './containers/App';
import HeroProfile from './components/HeroProfile';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRedirect to="/heroes" />
        <Route path="heroes">
          <Route path=":heroId" component={ HeroProfile } />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
