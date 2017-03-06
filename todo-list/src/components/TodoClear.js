import React, { Component, PropTypes } from 'react';

import './TodoClear.css';

class TodoClear extends Component {
  static propTypes = {
    clearCompletedTodo: PropTypes.func.isRequired
  }

  render() {
    const { clearCompletedTodo } = this.props;

    return (
      <div className="todo-clear">
        <a className="todo-clear-link" href="#" title="Clear completed"
           onClick={ clearCompletedTodo }>
          <span className="todo-clear-text">Clear completed</span>
        </a>
      </div>
    );
  }
}

export default TodoClear;
