import { ADD_TODO } from '../actions';

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
    default:
      return state;
  }
}

export default todos
