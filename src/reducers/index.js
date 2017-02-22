import { combineReducers } from 'redux';

import hero from './heroReducer';
import i18n from './i18nReducer';

const rootReducer = combineReducers({ hero, i18n });

export default rootReducer;
