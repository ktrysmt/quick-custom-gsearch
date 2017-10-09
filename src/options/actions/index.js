// @flow

import type State from '../types/state';

export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_INVISIBLE = 'SET_INVISIBLE';

export function setVisible(data: State) {
  return {
    type: SET_VISIBLE, data,
  };
}

export function setInvisible(data: State) {
  return {
    type: SET_VISIBLE, data,
  };
}
