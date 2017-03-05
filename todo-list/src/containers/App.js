import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  render() {
    const { todos } = this.props;

    return (
      <div className="container">
        <TodoForm addTodo={ this.addTodo } />
        <TodoList todos={ todos }
                  removeTodo={ this.removeTodo }
                  toggleTodo={ this.toggleTodo } />
      </div>
    );
  }

  addTodo(text) {
    this.props.actions.addTodo(text);
  }

  removeTodo(id) {
    return e => {
      e.preventDefault();

      this.props.actions.removeTodo(id);
    };
  }

  toggleTodo(id) {
    return () => {
      this.props.actions.toggleTodo(id);
    };
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
