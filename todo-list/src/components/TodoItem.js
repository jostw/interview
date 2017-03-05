import React, { Component, PropTypes } from 'react';

import './TodoItem.css';

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
  }

  render() {
    const { id, text, removeTodo } = this.props;

    return (
      <div className="todo-item">
        <span className="todo-item-text">{ text }</span>
        <a className="todo-item-remove fa fa-trash-o" href="#" title="Remove"
           onClick={ removeTodo(id) }></a>
      </div>
    );
  }
}

export default TodoItem;
