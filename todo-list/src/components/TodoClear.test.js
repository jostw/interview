import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoClear from './TodoClear';
import i18n from '../reducers/i18n';

const context = { i18n: i18n() };

it('renders without crashing', () => {
  const clearCompletedTodo = jest.fn();

  const wrapper = shallow(
    <TodoClear clearCompletedTodo={ clearCompletedTodo } />, { context }
  );

  expect(wrapper.hasClass('todo-clear')).toBe(true);
  expect(wrapper.find('.todo-clear-link').length).toBe(1);
  expect(wrapper.find('.todo-clear-text').length).toBe(1);
});

it('clear completed todo', () => {
  const clearCompletedTodo = jest.fn();

  const wrapper = mount(
    <TodoClear clearCompletedTodo={ clearCompletedTodo } />, { context }
  );

  wrapper.find('.todo-clear-link').simulate('click');
  expect(wrapper.props().clearCompletedTodo.mock.calls.length).toBe(1);
});
