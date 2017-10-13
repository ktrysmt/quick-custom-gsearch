// @flow

import React from 'react';
import { render } from 'react-dom';
import Frame from './components/frame';
import Header from './components/header';
import metadata from '../common/metadata';

const Root = (props: any) => (
  <div>
    <Header {...props} />
    <Frame />
  </div>
);

render(
  <Root {...metadata} />,
  document.getElementById('root'),
);

