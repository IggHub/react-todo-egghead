import React from 'react';

export const TodoItem = (props) => {
  return (
    <div>
        <li><input defaultChecked={props.isComplete} type="checkbox" value={true} />{props.name}</li>
    </div>
  )
}
