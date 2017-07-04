import { RECEIVE_I18N } from '../actions';

// Bundle default language file.
import defaultI18n from '../../public/locale.zh-tw.json';

export default function i18n(state = defaultI18n, action) {
  switch (action.type) {
    case RECEIVE_I18N:
      return action.i18n;
    default:
      return state;
  }
}
