import React, { Component, PropTypes } from 'react';

import './TodoForm.css';

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <form className="todo-form" onSubmit={ this.onSubmit }>
        <input className="todo-form-input" type="text"
               placeholder="What needs to be done?"
               ref={ node => this.input = node } />
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.input.value !== '') {
      this.props.addTodo(this.input.value);
      this.input.value = '';
    }
  }
}

export default TodoForm;
