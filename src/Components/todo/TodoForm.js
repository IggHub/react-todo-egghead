import React from 'react';

export const TodoForm = (props) => {
  return (
    <form>
      <p>Some form </p>
      <input type="text" onChange={props.inputHandler} value={props.currentTodo}/>
    </form>
  )
}
