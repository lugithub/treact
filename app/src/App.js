import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>home</h1>;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route strict path="/about/" component={Home} />
    </div>
  </Router>
);


export default App;
