import React, { Component, PropTypes } from 'react';

import './TodoItem.css';

class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isEditing) {
      this.input.focus();
    }
  }

  render() {
    const { id, text, isCompleted, isEditing, removeTodo, toggleTodo, editTodo } = this.props;

    let todoItemClassList = ['todo-item'];

    if (isCompleted) {
      todoItemClassList = [...todoItemClassList, 'todo-item-completed'];
    }

    if (isEditing) {
      todoItemClassList = [...todoItemClassList, 'todo-item-editing'];
    }

    return (
      <div className={ todoItemClassList.join(' ') }>
        <input className="todo-item-checkbox fa" type="checkbox"
               onChange={ toggleTodo(id) } />
        <label className="todo-item-text"
               onClick={ editTodo(id) }>{ text }</label>
        <a className="todo-item-remove fa fa-trash-o" href="#" title="Remove"
           onClick={ removeTodo(id) }></a>
        <form className="todo-item-form" onSubmit={ this.onSubmit }>
          <input className="todo-item-input" type="text" defaultValue={ text }
                 ref={ node => this.input = node }
                 onBlur={ this.onSubmit } />
        </form>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.updateTodo(this.props.id, this.input.value);
  }
}

export default TodoItem;
