import React, { Component, PropTypes } from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes)).isRequired,
  }

  render() {
    const { todos } = this.props;

    if (todos.length === 0) {
      return null;
    }

    return (
      <ul className="todo-list">{
        todos.map(todo => {
          return (
            <li key={ todo.id }>
              <TodoItem { ...todo } />
            </li>
          );
        })
      }</ul>
    );
  }
}

export default TodoList;
