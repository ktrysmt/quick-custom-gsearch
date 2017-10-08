// @flow

import { createStore } from 'redux';
import { select } from '../reducers/';

const store = createStore(select);
