import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, UPDATE_TODO } from '../actions';

let todoId = 0;

function todo(text) {
  return {
    id: todoId++,
    text,
    isCompleted: false,
    isEditing: false
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
      return removeTodo(state, action);
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
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isEditing: true
        };
      });
    case UPDATE_TODO:
      if (action.text === '') {
        return removeTodo(state, action);
      }

      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          text: action.text,
          isEditing: false
        };
      });
    default:
      return state;
  }
}

function removeTodo(state, action) {
  const index = state.findIndex(todo => todo.id === action.id);

  return [
    ...state.slice(0, index),
    ...state.slice(index + 1, state.length)
  ];
}

export default todos
