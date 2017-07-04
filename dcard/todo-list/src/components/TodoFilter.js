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

  static contextTypes = {
    i18n: PropTypes.object.isRequired
  }

  render() {
    const { filter, setFilterAll, setFilterActive, setFilterCompleted } = this.props;
    const { i18n } = this.context;

    const todoFilterLlistClassList = [
      'todo-filter-list',
      `todo-${filter.filterType.toLowerCase().split('_').join('-')}`
    ];

    return (
      <div className="todo-filter">
        <ul className={ todoFilterLlistClassList.join(' ') }>
          <li>
            <TodoFilterLink type="all" text={ i18n.TODO_FILTER_TYPE_ALL }
                            setFilter={ setFilterAll } />
          </li>
          <li>
            <TodoFilterLink type="active" text={ i18n.TODO_FILTER_TYPE_ACTIVE }
                            setFilter={ setFilterActive } />
          </li>
          <li>
            <TodoFilterLink type="completed" text={ i18n.TODO_FILTER_TYPE_COMPLETED }
                            setFilter={ setFilterCompleted } />
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoFilter;
