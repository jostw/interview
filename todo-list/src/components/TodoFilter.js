import React, { Component, PropTypes } from 'react';

import './TodoFilter.css';
import TodoFilterLink from './TodoFilterLink';

class TodoFilter extends Component {
  static propTypes = {
    filter: PropTypes.shape({
      filterType: PropTypes.string.isRequired
    }).isRequired,
    setFilterAll: PropTypes.func.isRequired,
    setFilterActive: PropTypes.func.isRequired,
    setFilterCompleted: PropTypes.func.isRequired
  }

  render() {
    const { filter, setFilterAll, setFilterActive, setFilterCompleted } = this.props;

    const todoFilterLlistClassList = [
      'todo-filter-list',
      `todo-${filter.filterType.toLowerCase().split('_').join('-')}`
    ];

    return (
      <div className="todo-filter">
        <ul className={ todoFilterLlistClassList.join(' ') }>
          <li>
            <TodoFilterLink type="all" text="All"
                            setFilter={ setFilterAll } />
          </li>
          <li>
            <TodoFilterLink type="active" text="Active"
                            setFilter={ setFilterActive } />
          </li>
          <li>
            <TodoFilterLink type="completed" text="Completed"
                            setFilter={ setFilterCompleted } />
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoFilter;
