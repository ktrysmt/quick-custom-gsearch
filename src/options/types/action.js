// @flow

export interface Action {
  type: string;
  payload?: Object;
  error?: boolean;
  meta?: any;
}

