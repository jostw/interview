import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import HeroProfile from './components/HeroProfile';

module.exports = (
  <Route path="/" component={ App }>
    <IndexRedirect to="/heroes" />
    <Route path="heroes">
      <Route path=":heroId" component={ HeroProfile } />
    </Route>
  </Route>
);
