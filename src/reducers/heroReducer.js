import { combineReducers } from 'redux';
import { RECEIVE_HEROES, RECEIVE_HERO_PROFILE,
         INCREASE_HERO_STATS, DECREASE_HERO_STATS } from '../actions';

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
        ...action.profile,
        // Reset remainder stats after new hero profile is loaded
        remainder: 0
      };
    case INCREASE_HERO_STATS:
      if (state.remainder === 0) {
        // No remainder stats has left.
        return state;
      }

      return {
        ...state,
        [action.label]: state[action.label] + 1,
        remainder: state.remainder - 1
      };
    case DECREASE_HERO_STATS:
      const targetStats = state[action.label];

      if (targetStats === 0) {
        // Hero stats cannot lower than 0.
        return state;
      }

      return {
        ...state,
        [action.label]: targetStats - 1,
        remainder: state.remainder + 1
      };
    default:
      return state;
  }
}

export default combineReducers({ list, profile });
