// @flow

import { combineReducers } from 'redux';

import select from './select';
import storage from './storage';

export default combineReducers({
  select,
  storage,
});
