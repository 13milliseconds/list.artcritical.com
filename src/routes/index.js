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

/* GET home page. */
router.get('/', function (req, res, next) {
    var List = req.list;
    
    List.find({}, {}, function (e, docs) {
        res.render('index', {
            "title": "The List",
            "index": docs
        });
    });
});

/*
 * GET currentlist to display.
 */
router.get('/currentlistings', function (req, res) {
    var List = req.list;
    
    //Find today's date
    var today = new Date();
    
    console.log('Searching for current events...');
    
    //Sort by current date
    List.find({start: {$lt: today}, end: {$gt: today}}, {}, function (e, docs) {
        console.log('Results: ' + docs);
        res.json(docs);
    });
});

/*
 * GET ALL listings ===================
 */
router.get('/alllistings', function (req, res) {
    var List = req.list;
    
    
    //Sort by current date
    List.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

router.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
       return res.status(500).send(err.message)
    } 
    
    if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      return res.redirect(redirect.pathname + redirect.search)
    }
      
    let markup;
      
    if (props) {
        // if we got props then we matched a route and can render
        markup = renderToString(<RouterContext {...props}/>);
    } else {
      // no errors, no redirect, we just didn't match anything
        markup = renderToString(<ErrorPage/>);
        res.status(404);
    }
      
    // render the index template with the embedded React markup
    return res.render('index', { markup });
      
  })
});



module.exports = router;
