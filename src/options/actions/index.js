export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_INVISIBLE = 'SET_INVISIBLE';

export function setVisible(data) {
  return {
    type: SET_VISIBLE, data,
  };
}

export function setInvisible(data) {
  return {
    type: SET_VISIBLE, data,
  };
}
