import React from 'react';

export const TodoItem = (props) => {
  return (
    <div>
        <li><input defaultChecked={props.isComplete} type="checkbox" value={true} />{props.name}</li>
    </div>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
