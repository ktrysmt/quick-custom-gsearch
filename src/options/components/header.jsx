// @flow

import React from 'react';
import styled from 'styled-components';

import metadata from '../../common/metadata';

const HeaderBase = styled.header`
  background-color: #4dbddb;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #eee;
  padding-left: 20px;
  font-weight: bold;
`;

const Version = styled.div`
  color: #eee;
  font-size: small;
  padding: 22px 20px;
`;

export default () => (
  <HeaderBase>
    <Title>Options</Title>
    <Version>{metadata.name} - v{metadata.version}</Version>
  </HeaderBase>
);
