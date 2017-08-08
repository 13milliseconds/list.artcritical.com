var express = require('express');
var router = express.Router();
var JSX = require('node-jsx').install();

import React from 'react'
// we'll use this to render our app to an html string
import { renderToString } from 'react-dom/server'
// and these to match the url to routes and then render
import { match, RouterContext } from 'react-router'
import routes from '../routes'
import ErrorPage from '../components/ErrorPage';
const hist = require('history');



router.get('*', (req, res) => {
  const location = hist.createLocation(req.path);
  match({
    routes: routes,
    location: location,
  }, (err, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (err) {
      console.log(err);
      next(err);
      // res.send(500, error.message);
    } else if (renderProps === null) {
      res.status(404)
        .send('Not found');
    } else {
        let markup = renderToString(<RouterContext {...renderProps}/>);
        res.render('index', {markup});
    }
  });
});



module.exports = router;
