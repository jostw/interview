import React, { Component, PropTypes } from 'react';

import './TodoClear.css';

class TodoClear extends Component {
  static propTypes = {
    clearCompletedTodo: PropTypes.func.isRequired
  }

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  }

  render() {
    const { clearCompletedTodo } = this.props;
    const { i18n } = this.context;

    return (
      <div className="todo-clear">
        <a className="todo-clear-link" href="#" title={ i18n.TODO_CLEAR_COMPLETED }
           onClick={ clearCompletedTodo }>
          <span className="todo-clear-text">{ i18n.TODO_CLEAR_COMPLETED }</span>
        </a>
      </div>
    );
  }
}

export default TodoClear;
