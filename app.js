import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';

import api from './src/api';
import routes from './src/routes';
import configureStore from './src/store/configureStore';

const app = express();
const port = 3000;

const index = fs.readFileSync(path.join(__dirname, 'build/index.html')).toString();

app.use(express.static(path.join(__dirname, 'build'), { index: false }));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (redirect) {
      res.redirect(302, redirect.pathname);
      return;
    }

    if (!props) {
      res.status(404).send('Not Found');
      return;
    }

    api(req.url).then(preloadedState => {
      const store = configureStore(preloadedState);
      const root = renderToString(
        <Provider store={ store }>
          <RouterContext { ...props } />
        </Provider>
      );

      const preloadedIndex = index.replace(
        '<div id="root"></div>',
        `<div id="root">${root}</div>
         <script>
           window.__PRELOADED_STATE__ = ${
             JSON.stringify(preloadedState).replace(/</g, '\\u003c')
           };
         </script>`
      );

      res.send(preloadedIndex);
    });
  });
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});
