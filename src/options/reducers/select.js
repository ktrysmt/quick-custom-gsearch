// @flow

import type { Action } from '../types/action';
import type { State } from '../types/state';
import types from '../types/select';

const initialState: State = {
  select: [],
  count: 0,
};

const selectReducers = {
  [types.SET_VISIBLE]: state => (
     [...state]
  ),
  [types.SET_VISIBLE]: state => (
     [...state]
  ),
  [types.COUNTER_INCREMENT]: (state, action) => (
     { ...state, count: action.counterIncrement }
  ),
};

export default (state: State = initialState, action: Action) => {
  if (selectReducers[action.type]) {
    return selectReducers[action.type](state, action);
  }
  return state;
};
