import express from 'express';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';  // render our app to an html string
import { match, RouterContext } from 'react-router';  // match the url to routes and then render
import routes from './modules/routes';

var app = express();

app.use(compression());

// serve our static stuff like style.css
app.use(express.static(path.join(__dirname, 'public'), {index: false}));

/*
Now pay attention. If we try to render a <Router/> on the server like we do in the client, we will get an empty screen
because server rendering is synchronous and route matching is asynchronous.
Also, most apps will want to use the router to help them load data, so asynchronous routes or not, you will want to
know what screens are going to render before you actually render them. That way, you can use that information to load
asynchronous data before rendering. Now go read that again until it makes sense.
*/

// send all requests to index.html so that browserHistory can do its thing
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      // if there was an error during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      // before a route is entered, it can redirect
      // here we handle that on the server
      // google 'onEnter hooks react'
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // if we get props then we have matched a route and can render
      // this is the bit that gives the user what they were looking for
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml));
    } else {
      // no errors or redirect, but no match either
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Not My First React Router App</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div id=app>${appHtml}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Production Express server is running at localhost:' + PORT);
});
