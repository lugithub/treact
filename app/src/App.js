import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="todo-app">
          <form>
            <input type="text"/>
          </form>
          <ul className="todo-list">
            <li><input type="checkbox"/> learn jsx</li>
            <li><input type="checkbox"/> build</li>
            <li><input type="checkbox"/> ship</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
