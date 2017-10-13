// @flow

import React from 'react';
import { render } from 'react-dom';
import Frame from './components/frame';
import Header from './components/header';
import Wrapper from './components/wrapper';
import metadata from '../common/metadata';

render(
  <div>
    <Header {...metadata} />
    <Wrapper>
      <Frame />
    </Wrapper>
  </div>,
  document.getElementById('root'),
);

