import React from 'react';
import { shallow, mount } from 'enzyme';

import TodoItem from './TodoItem';

it('renders without crashing', () => {
  const todo = createMockTodoItem();

  const wrapper = shallow(
    <TodoItem { ...todo } />
  );

  expect(wrapper.hasClass('todo-item')).toBe(true);
  expect(wrapper.find('.todo-item-text').length).toBe(1);
  expect(wrapper.find('.todo-item-text').text()).toBe(todo.text);
  expect(wrapper.find('.todo-item-remove').length).toBe(1);
});

it('remove todo', () => {
  const todo = createMockTodoItem();

  const wrapper = mount(
    <TodoItem { ...todo } />
  );

  wrapper.find('.todo-item-remove').simulate('click');
  expect(wrapper.props().removeTodo.mock.calls.length).toBe(1);
});

it('toggle todo', () => {
  const todo = createMockTodoItem();

  const wrapper = mount(
    <TodoItem { ...todo } />
  );

  wrapper.find('.todo-item-checkbox').simulate('click');
  expect(wrapper.props().toggleTodo.mock.calls.length).toBe(1);

  wrapper.setState({ isCompleted: true });
  expect(wrapper.hasClass('todo-item-completed'));
});

it('edit todo', () => {
  const todo = createMockTodoItem();

  const wrapper = mount(
    <TodoItem { ...todo } />
  );

  wrapper.find('.todo-item-text').simulate('click');
  expect(wrapper.props().editTodo.mock.calls.length).toBe(1);

  wrapper.setState({ isEditing: true });
  expect(wrapper.hasClass('todo-item-editing'));
});

it('update todo', () => {
  const todo = createMockTodoItem();

  const wrapper = mount(
    <TodoItem { ...todo } />
  );

  wrapper.find('.todo-item-form').simulate('submit');
  expect(wrapper.props().updateTodo.mock.calls.length).toBe(1);
});

function createMockTodoItem() {
  return {
    id: Math.floor(Math.random() * 10000),
    text: 'test',
    isCompleted: false,
    isEditing: false,
    removeTodo: jest.fn(),
    toggleTodo: jest.fn(),
    editTodo: jest.fn(),
    updateTodo: jest.fn()
  };
}
