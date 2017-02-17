import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoForm} from './Components/todo/TodoForm';
import {TodoForm, TodoList} from './Components/todo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo: [
        {id: 1, name: 'learn JSX', isComplete: true},
        {id: 2, name: 'Build Apps', isComplete: false},
        {id: 3, name: 'Ship it!', isComplete: false}
      ],
      currentTodo: ''
    }
  }
  handleInputChange(e){
    this.setState({
      currentTodo: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React TODOS</h2>
        </div>
        <div className="todo-app">
          {this.state.currentTodo}
          <TodoForm inputHandler={this.handleInputChange.bind(this)} currentTodo={this.state.currentTodo} />
          <TodoList todo={this.state.todo} />
        </div>
      </div>
    );
  }
}

export default App;
