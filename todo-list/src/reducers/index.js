import { combineReducers } from 'redux';

function root(state = {}, action) {
  return state;
}

const rootReducer = combineReducers({ root });

export default rootReducer;
