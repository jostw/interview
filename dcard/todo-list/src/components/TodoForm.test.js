import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoForm from './TodoForm';
import i18n from '../reducers/i18n';

const context = { i18n: i18n() };

it('renders without crashing', () => {
  const addTodo = jest.fn();

  const wrapper = shallow(
    <TodoForm addTodo={ addTodo } />, { context }
  );

  expect(wrapper.hasClass('todo-form')).toBe(true);
  expect(wrapper.find('.todo-form-input').length).toBe(1);
});

it('add a todo on submit', () => {
  const addTodo = jest.fn();

  const wrapper = mount(
    <TodoForm addTodo={ addTodo } />, { context }
  );

  wrapper.find('.todo-form-input').node.value = 'test';
  wrapper.simulate('submit');
  expect(wrapper.props().addTodo.mock.calls.length).toBe(1);
});
