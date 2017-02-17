import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [
        {id: 1, name: 'learn JSX', isComplete: true},
        {id: 2, name: 'Build Apps', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ]
    }
  }
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
              {this.state.todo.map(function(item){
                return <li key={item.id}><input defaultChecked={item.isComplete} type="checkbox" value={true} />{item.name}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
