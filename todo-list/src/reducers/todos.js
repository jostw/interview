import { ADD_TODO, REMOVE_TODO } from '../actions';

let todoId = 0;

function todo(text) {
  return {
    id: todoId++,
    text
  };
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(action.text)
      ];
    case REMOVE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, state.length)
      ];
    default:
      return state;
  }
}

export default todos
