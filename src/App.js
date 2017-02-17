import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React TODOS</h2>
        </div>
        <div className="todo-app">
          <form>
            <input type="text" />
          </form>
          <div className="todo-list">
            <ul>
              <li><input type="checkbox" value={true} />Learn JSX</li>
              <li><input type="checkbox" value={true} />Build it!</li>
              <li><input type="checkbox" value={true} />Ship it!!!</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
