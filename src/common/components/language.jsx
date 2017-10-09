// @flow

import React from 'react';
import styled from 'styled-components';
import { Link, Padding, Space } from './common';

const Language = styled.div`
  box-shadow: rgb(214, 214, 214) 0 1px 5px 0;
  margin-top: 5px;
`;

export default (props: any) => {
  const { data } = props;

  return (
    <Language data={data}>
      <Padding>Language</Padding>
      <Link data="" className="active">Any pages</Link>
      <Link data="lang_en">English pages</Link>
      <Link data="lang_local">Local pages</Link>
      <Space />
    </Language>
  );
};

