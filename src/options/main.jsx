// @flow

import React from 'react';
import { render } from 'react-dom';
import Frame from './components/frame';

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 2));

const dummyData = ['hoge', 'fuga'];

render(
  <Frame data={dummyData} />,
  document.getElementById('root'),
);

