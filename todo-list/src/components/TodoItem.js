import React, { Component, PropTypes } from 'react';

import './TodoItem.css';

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props;

    return (
      <div className="todo-item">{ text }</div>
    );
  }
}

export default TodoItem;
