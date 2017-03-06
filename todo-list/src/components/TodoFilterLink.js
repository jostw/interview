import React, { Component, PropTypes } from 'react';

import './TodoFilterLink.css';

class TodoFilterLink extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
  }

  render() {
    const { type, text, setFilter } = this.props;

    const todoFilterLinkClassList = [
      'todo-filter-link',
      `todo-filter-link-${type}`
    ];

    return (
      <a className={ todoFilterLinkClassList.join(' ') } href="#" title={ text }
         onClick={ setFilter }>{ text }</a>
    );
  }
}

export default TodoFilterLink;
