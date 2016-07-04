import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';

/*
Nest About and Repos components inside of App so that we can share navigation with all screens in the app
*/
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* Make About and Repos children of App */}
      <Route path="/about" component={About} />
      {/* add new route with URL parameters specified */}
      <Route path="/repos/:userName/:repoName" component={Repos} />
      <Route path="/repos" component={Repos} />
    </Route>
  </Router>
), document.getElementById('app'));
