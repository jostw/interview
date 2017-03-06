import React from 'react';
import { shallow } from 'enzyme';

import { FILTER_TYPE_ALL } from '../actions';
import TodoFilter from './TodoFilter';
import i18n from '../reducers/i18n';

const context = { i18n: i18n() };

it('renders without crashing', () => {
  const filter = { filterType: FILTER_TYPE_ALL };
  const setFilterAll = jest.fn();
  const setFilterActive = jest.fn();
  const setFilterCompleted = jest.fn();

  const wrapper = shallow(
    <TodoFilter filter={ filter }
                setFilterAll={ setFilterAll }
                setFilterActive={ setFilterActive }
                setFilterCompleted={ setFilterCompleted } />, { context }
  );

  expect(wrapper.hasClass('todo-filter')).toBe(true);
  expect(wrapper.find('.todo-filter-list').length).toBe(1);
  expect(wrapper.find('.todo-filter-type-all').length).toBe(1);
  expect(wrapper.find('.todo-filter-list li').length).toBe(3);
});
