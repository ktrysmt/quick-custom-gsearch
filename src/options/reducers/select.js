import { SET_VISIBLE, SET_INVISIBLE } from '../actions/';
// import type { Action } from '../types/action';

// export default function select(state: Array<string> = [], action: Action) {
export default function select(state, action) {
  switch (action.type) {
    case SET_VISIBLE:
      return [
        ...state,
        {
          visible: true,
        },
      ];
    case SET_INVISIBLE:
      return [
        ...state,
        {
          visible: false,
        },
      ];
    default:
      return state;
  }
}
