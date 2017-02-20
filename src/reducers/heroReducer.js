import { combineReducers } from 'redux';
import { RECEIVE_HEROES } from '../actions';

function list(state = [], action) {
  switch (action.type) {
    case RECEIVE_HEROES:
      return action.heroes;
    default:
      return state;
  }
}

export default combineReducers({ list });
