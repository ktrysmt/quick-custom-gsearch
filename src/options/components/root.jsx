// @flow

import React from 'react';
import Frame from './frame';
import Header from './header';
import Wrapper from './wrapper';

export default (props: any) => (
  <div>
    <Header {...props} />
    <Wrapper>
      <Frame />
    </Wrapper>
  </div>
);
