import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'learn', isComplete: true},
        {id: 2, name: 'build', isComplete: false},
        {id: 3, name: 'ship', isComplete: false}
      ]
    }
  }

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
            {this.state.todos.map(todo =>
              <li key={todo.id}>
                <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
              </li>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
