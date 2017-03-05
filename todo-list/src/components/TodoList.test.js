import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

it('renders without crashing', () => {
  const todos = [];
  const removeTodo = jest.fn();
  const toggleTodo = jest.fn();
  const editTodo = jest.fn();
  const updateTodo = jest.fn();

  const wrapper = shallow(
    <TodoList todos={ todos }
              removeTodo={ removeTodo }
              toggleTodo={ toggleTodo }
              editTodo={ editTodo }
              updateTodo={ updateTodo } />
  );

  expect(wrapper.html()).toBe(null);
});

it('renders list of todos', () => {
  const todos = [
    {
      id: Math.floor(Math.random() * 10000),
      text: 'test',
      isCompleted: false,
      isEditing: false
    }
  ];

  const removeTodo = jest.fn();
  const toggleTodo = jest.fn();
  const editTodo = jest.fn();
  const updateTodo = jest.fn();

  const wrapper = shallow(
    <TodoList todos={ todos }
              removeTodo={ removeTodo }
              toggleTodo={ toggleTodo }
              editTodo={ editTodo }
              updateTodo={ updateTodo } />
  );

  expect(wrapper.hasClass('todo-list')).toBe(true);
  expect(wrapper.find('li').length).toBe(1);
});
