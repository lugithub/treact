import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <Link to="/?id=123&foo=blu">inline</Link>
    <Link to={{pathname: '/', search: 'id=456&foo=blu'}}>object</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/" render={
          ({match, location}) =>
            <div>
              <h1>
                {location.search}
              </h1>
              <h2>{new URLSearchParams(location.search).get('id')} {' '}
                {new URLSearchParams(location.search).get('foo')}
              </h2>
            </div>
      }
      />
    </div>
  </Router>
);


export default App;
