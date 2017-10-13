// @flow

import React from 'react';
import styled from 'styled-components';
import { Link, MiniHeader, MiniFooter } from './parts';

const Language = styled.div`
  box-shadow: rgb(214, 214, 214) 0 1px 5px 0;
  margin-top: 5px;
`;

export default (props: any) => (
  <Language {...props}>
    <MiniHeader>Language</MiniHeader>
    <Link data="" className="active">Any pages</Link>
    <Link data="lang_en">English pages</Link>
    <Link data="lang_local">Local pages</Link>
    <MiniFooter />
  </Language>
);

