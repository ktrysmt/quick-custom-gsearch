// @flow

import React from 'react';
import styled from 'styled-components';
import { Link, MiniHeader, MiniFooter } from './parts';

const Term = styled.div`
  box-shadow: rgb(214, 214, 214) 0 1px 5px 0;
`;

export default (props: any) => (
  <Term {...props}>
    <MiniHeader>Term</MiniHeader>
    <Link data="none" className="active">Any time</Link>
    <Link data="m3">Past 3 Month</Link>
    <Link data="m6">Past 6 Month</Link>
    <Link data="y">Past 1 Year</Link>
    <Link data="y2">Past 2 Year</Link>
    <Link data="y3">Past 3 Year</Link>
    <MiniFooter />
  </Term>
);
