import React, { Component, PropTypes } from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: TodoItem.propTypes.id,
      text: TodoItem.propTypes.text,
      isCompleted: TodoItem.propTypes.isCompleted
    })).isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, removeTodo, toggleTodo } = this.props;

    if (todos.length === 0) {
      return null;
    }

    return (
      <ul className="todo-list">{
        todos.map(todo => {
          return (
            <li key={ todo.id }>
              <TodoItem { ...todo }
                        removeTodo={ removeTodo }
                        toggleTodo={ toggleTodo } />
            </li>
          );
        })
      }</ul>
    );
  }
}

export default TodoList;
