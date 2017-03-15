import React from 'react';
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom';
import './App.css';



const App = () => (
  <Router>
    <div>
      <Route path="/:page(\d{2}-\d{2}-\d{4})?-:subpage?" render={({match}) =>
        <h1>
          PAGE: {match.params.page || 'home'}<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      }
      />
    </div>
  </Router>
);


export default App;
