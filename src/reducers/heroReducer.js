import { combineReducers } from 'redux';
import { RECEIVE_HEROES, RECEIVE_HERO_PROFILE } from '../actions';

function list(state = [], action) {
  switch (action.type) {
    case RECEIVE_HEROES:
      return action.heroes;
    default:
      return state;
  }
}

function profile(state = {
  str: null,
  int: null,
  agi: null,
  luk: null,
  remainder: 0
}, action) {
  switch (action.type) {
    case RECEIVE_HERO_PROFILE:
      return {
        ...state,
        ...action.profile
      };
    default:
      return state;
  }
}

export default combineReducers({ list, profile });
