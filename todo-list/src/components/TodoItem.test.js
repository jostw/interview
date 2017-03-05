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

function createMockTodoItem() {
  return {
    id: Math.floor(Math.random() * 10000),
    text: 'test',
    removeTodo: jest.fn()
  };
}
