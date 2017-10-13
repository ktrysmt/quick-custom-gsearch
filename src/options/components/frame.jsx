// @flow

import React from 'react';
import styled from 'styled-components';
import Language from '../../common/components/language';
import Term from '../../common/components/term';

const FrameBase = styled.div`
  background: #fff;
  position: absolute;
  z-index: 999999;
  display: block;
  width: 180px;
  height: auto;
  top: 169px;
`;

export default (props: any) => (
  <FrameBase {...props}>
    <Language />
    <Term />
  </FrameBase>
);

