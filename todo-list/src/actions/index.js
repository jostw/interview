export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = text => ({ type: ADD_TODO, text });
export const removeTodo = id => ({ type: REMOVE_TODO, id });
export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
export const editTodo = id => ({ type: EDIT_TODO, id });
export const updateTodo = (id, text) => ({ type: UPDATE_TODO, id, text });
