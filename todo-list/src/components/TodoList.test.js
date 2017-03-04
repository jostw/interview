import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

it('renders without crashing', () => {
  const todos = [];

  const wrapper = shallow(
    <TodoList todos={ todos } />
  );

  expect(wrapper.html()).toBe(null);
});

it('renders list of todos', () => {
  const todos = [
    {
      id: Math.floor(Math.random() * 10000),
      text: 'test'
    }
  ];

  const wrapper = shallow(
    <TodoList todos={ todos } />
  );

  expect(wrapper.hasClass('todo-list')).toBe(true);
  expect(wrapper.find('li').length).toBe(1);
});
