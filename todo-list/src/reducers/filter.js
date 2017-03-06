import { FILTER_TYPE_ALL, SET_FILTER } from '../actions';

function filter(state = {
  filterType: FILTER_TYPE_ALL
}, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filterType: action.filterType
      };
    default:
      return state;
  }
}

export default filter;
