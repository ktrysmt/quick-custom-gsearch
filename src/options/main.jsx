import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Root from './components/root';
import reducers from './reducers';

const store = createStore(reducers);

const initdata = {
  state: store.getState(),
  dispatch: store.dispatch,
};

const drawer = () => render(<Root {...initdata} />, document.getElementById('root'));

store.subscribe(drawer);
drawer();

