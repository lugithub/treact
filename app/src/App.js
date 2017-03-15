import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
 } from 'react-router-dom';
import './App.css';

const Links = () => (
  <nav>
    <NavLink activeClassName="active" to="/">home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>about</NavLink>
    <NavLink activeClassName="active" isActive={(match, location) => {
      console.log(match, location);
      return match;
    }} to="/contact">contact</NavLink>
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
