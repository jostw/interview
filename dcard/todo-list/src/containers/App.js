import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';
import TodoForm from '../components/TodoForm';
import TodoFilter from '../components/TodoFilter';
import TodoList from '../components/TodoList';
import TodoClear from '../components/TodoClear';

class App extends Component {
  static propTypes = {
    todos: TodoList.propTypes.todos,
    filter: TodoFilter.propTypes.filter,
    hasCompleted: PropTypes.bool.isRequired
  }

  static childContextTypes = {
    i18n: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.clearCompletedTodo = this.clearCompletedTodo.bind(this);

    this.setFilterAll = this.setFilterAll.bind(this);
    this.setFilterActive = this.setFilterActive.bind(this);
    this.setFilterCompleted = this.setFilterCompleted.bind(this);
  }

  getChildContext() {
    return {
      i18n: this.props.i18n
    };
  }

  render() {
    const { todos, filter, hasTodos, hasCompleted } = this.props;

    let todoFilter = null;
    let todoClear = null;

    if (hasTodos) {
      todoFilter = (
        <TodoFilter filter={ filter }
                    setFilterAll={ this.setFilterAll }
                    setFilterActive={ this.setFilterActive }
                    setFilterCompleted={ this.setFilterCompleted } />
      );
    }

    if (hasCompleted) {
      todoClear = (
        <TodoClear clearCompletedTodo={ this.clearCompletedTodo } />
      );
    }

    return (
      <div className="container">
        <TodoForm addTodo={ this.addTodo } />
        { todoFilter }
        <TodoList todos={ todos }
                  removeTodo={ this.removeTodo }
                  toggleTodo={ this.toggleTodo }
                  editTodo={ this.editTodo }
                  updateTodo={ this.updateTodo } />
        { todoClear }
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

  editTodo(id) {
    return () => {
      this.props.actions.editTodo(id);
    };
  }

  updateTodo(id, text) {
    this.props.actions.updateTodo(id, text);
  }

  clearCompletedTodo(e) {
    e.preventDefault();

    this.props.actions.clearCompletedTodo();
  }

  setFilterAll(e) {
    e.preventDefault();

    this.props.actions.setFilter(actions.FILTER_TYPE_ALL);
  }

  setFilterActive(e) {
    e.preventDefault();

    this.props.actions.setFilter(actions.FILTER_TYPE_ACTIVE);
  }

  setFilterCompleted(e) {
    e.preventDefault();

    this.props.actions.setFilter(actions.FILTER_TYPE_COMPLETED);
  }
}

function filterTodos(todos, filter) {
  switch (filter.filterType) {
    case actions.FILTER_TYPE_ACTIVE:
      return todos.filter(todo => !todo.isCompleted);
    case actions.FILTER_TYPE_COMPLETED:
      return todos.filter(todo => todo.isCompleted);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: filterTodos(state.todos, state.filter),
    filter: state.filter,
    i18n: state.i18n,
    hasTodos: state.todos.length > 0,
    hasCompleted: state.todos.some(todo => todo.isCompleted)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
