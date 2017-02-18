import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {TodoForm} from './Components/todo/TodoForm';
import {TodoForm, TodoList} from './Components/todo';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
  state = {
    todo: [
      {id: 1, name: 'learn JSX', isComplete: true},
      {id: 2, name: 'Build Apps', isComplete: false},
      {id: 3, name: 'Ship it!', isComplete: false}
    ],
    currentTodo: ''
  }

  handleInputChange = (e) => {
    this.setState({
      currentTodo: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();//prevents form to submit and prevents it from refreshing page
    const newId = generateId();
    const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false}
    const resultTodo = addTodo(this.state.todo, newTodo);
    this.setState({
      todo: resultTodo,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please fill in a non-empty todo item'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="todo-app">
          {this.state.currentTodo}
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <TodoForm inputHandler={this.handleInputChange} currentTodo={this.state.currentTodo} handleSubmit={submitHandler}/>
          <TodoList todos={this.state.todo} />
        </div>
      </div>
    );
  }
}

export default App;
