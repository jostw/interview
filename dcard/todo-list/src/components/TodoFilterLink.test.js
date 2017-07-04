import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoFilterLink from './TodoFilterLink';

it('renders without crashing', () => {
  const filterLink = createMockTodoFilterLink('all');

  const wrapper = shallow(
    <TodoFilterLink { ...filterLink } />
  );

  expect(wrapper.hasClass('todo-filter-link')).toBe(true);
  expect(wrapper.hasClass(`todo-filter-link-${filterLink.type}`)).toBe(true);
  expect(wrapper.text()).toBe(filterLink.text);
});

it('set filter type', () => {
  const filterLink = createMockTodoFilterLink('all');

  const wrapper = mount(
    <TodoFilterLink { ...filterLink } />
  );

  wrapper.simulate('click');
  expect(wrapper.props().setFilter.mock.calls.length).toBe(1);
});

function createMockTodoFilterLink(type) {
  return {
    type: type,
    text: 'test',
    setFilter: jest.fn()
  };
}
