import React from 'react';
import { shallow } from 'enzyme';

import TodoItem from './TodoItem';

it('renders without crashing', () => {
  const todo = {
    id: Math.floor(Math.random() * 10000),
    text: 'test'
  };

  const wrapper = shallow(
    <TodoItem { ...todo } />
  );

  expect(wrapper.hasClass('todo-item')).toBe(true);
  expect(wrapper.text()).toBe(todo.text);
});
