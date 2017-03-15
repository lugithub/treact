import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>home</h1>;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route strict path="/about/" render={() => <h1>about</h1>} />
    </div>
  </Router>
);


export default App;
