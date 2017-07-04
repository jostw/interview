import React, { Component, PropTypes } from 'react';

import './TodoForm.css';

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { i18n } = this.context;

    return (
      <form className="todo-form" onSubmit={ this.onSubmit }>
        <input className="todo-form-input" type="text"
               placeholder={ i18n.TODO_FORM_INPUT_PLACEHOLDER }
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
