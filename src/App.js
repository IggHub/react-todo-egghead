import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList, Footer} from './Components/todo';
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/todoHelpers';
import {pipe, partial} from './lib/utils';
import {loadTodos, createTodo, saveTodo, destroyTodo} from './lib/todoService';

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: React.PropTypes.string
  }

  handleRemove = (id, e) => {
    e.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
    destroyTodo(id)
      .then(() => this.showTempMessage('Todo Removed'))
  }

  handleToggle = (id) => {
    const getToggledTodo = pipe(findById, toggleTodo)
    const updated = getToggledTodo(id, this.state.todos)
    const getUpdatedTodos = partial(updateTodo, this.state.todos)
    const updatedTodos = getUpdatedTodos(updated)
    this.setState({
      todos: updatedTodos
    })
    saveTodo(updated)
      .then(() => this.showTempMessage('Todo Updated'))
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
    const resultTodo = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: resultTodo,
      currentTodo: '',
      errorMessage: ''
    })
    createTodo(newTodo)
      .then(() => this.showTempMessage('Todo Added!'))
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({
      errorMessage: 'Please fill in a non-empty todo item'
    })
  }

  showTempMessage = (msg) => {
    this.setState({message: msg})
    setTimeout(() => this.setState({message: ''}), 2000) //in 2s, it will run the setState callback func
  }

  componentDidMount() {
    loadTodos().then(todos => this.setState({todos}))
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React todos</h2>
        </div>
        <div className="todo-app">
          {this.state.currentTodo}
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          {this.state.message && <span className="todoAddedMessage">{this.state.message}</span>}
          <TodoForm inputHandler={this.handleInputChange} currentTodo={this.state.currentTodo} handleSubmit={submitHandler}/>
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}
          />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
