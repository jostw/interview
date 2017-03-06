import { combineReducers } from 'redux';

import todos from './todos';
import filter from './filter';
import i18n from './i18n';

const rootReducer = combineReducers({ todos, filter, i18n });

export default rootReducer;
