import React from 'react';
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  return (
    <div>
        <li><input onChange={handleToggle} checked={props.isComplete} type="checkbox" value={true} />{props.name}</li>
    </div>
  )
}

TodoItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}
