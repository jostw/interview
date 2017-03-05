import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoForm from './TodoForm';

it('renders without crashing', () => {
  const addTodo = jest.fn();

  const wrapper = shallow(
    <TodoForm addTodo={ addTodo } />
  );

  expect(wrapper.hasClass('todo-form')).toBe(true);
  expect(wrapper.find('.todo-form-input').length).toBe(1);
});

it('add a todo on submit', () => {
  const addTodo = jest.fn();

  const wrapper = mount(
    <TodoForm addTodo={ addTodo } />
  );

  wrapper.find('.todo-form-input').node.value = 'test';
  wrapper.simulate('submit');
  expect(wrapper.props().addTodo.mock.calls.length).toBe(1);
});
