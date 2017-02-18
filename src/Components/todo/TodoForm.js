import React from 'react';

export const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>Some form </p>
      <input type="text" onChange={props.inputHandler} value={props.currentTodo}/>
    </form>
  )
}

TodoForm.propTypes = {
  inputHandler: React.PropTypes.func.isRequired,
  currentTodo: React.PropTypes.string.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
}
