// @flow

import type { Action } from '../types/action';
import types from '../types/select';

export default {
  setVisible: (): Action => ({
    type: types.SET_VISIBLE,
  }),
  setInvisible: (): Action => ({
    type: types.SET_INVISIBLE,
  }),
  counterIncrement: (): Action => ({
    type: types.COUNTER_INCREMENT,
  }),
};
