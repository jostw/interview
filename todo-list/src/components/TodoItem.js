import React, { Component, PropTypes } from 'react';

import './TodoItem.css';

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

  render() {
    const { id, text, isCompleted, removeTodo, toggleTodo } = this.props;

    let todoItemClassList = ['todo-item'];

    if (isCompleted) {
      todoItemClassList = [...todoItemClassList, 'todo-item-completed'];
    }

    return (
      <div className={ todoItemClassList.join(' ') }>
        <input className="todo-item-checkbox fa" type="checkbox"
               onChange={ toggleTodo(id) } />
        <label className="todo-item-text">{ text }</label>
        <a className="todo-item-remove fa fa-trash-o" href="#" title="Remove"
           onClick={ removeTodo(id) }></a>
      </div>
    );
  }
}

export default TodoItem;
