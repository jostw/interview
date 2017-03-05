import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

let todoId = 0;

function todo(text) {
  return {
    id: todoId++,
    text,
    isCompleted: false
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
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      });
    default:
      return state;
  }
}

export default todos
