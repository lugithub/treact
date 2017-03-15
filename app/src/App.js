import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
 } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to={{pathname: '/about'}}>about</Link>
    <Link replace to="/contact">contact</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>home</h1>} />
      <Route path="/about" render={() => <h1>about</h1>} />
      <Route path="/contact" render={() => <h1>contact</h1>} />
    </div>
  </Router>
);


export default App;
