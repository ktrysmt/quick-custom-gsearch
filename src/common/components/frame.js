import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  float: left;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999999;
  display: block;
  width: 110px;
  height: auto;
  margin-left: 10px;
  top: 169px;
`;

const Link = styled.a`
  background-color: white;
  color: #777;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const Term = styled.div`
  box-shadow: rgb(214, 214, 214) 0 1px 5px 0;
`;

const Language = styled.div`
  box-shadow: rgb(214, 214, 214) 0 1px 5px 0;
  margin-top: 5px;
`;

const Space = styled.span`
  height: 5px;
  display: block;
  width: 100%;
`;

const Padding = styled.span`
  height: 1.7em;
  display: block;
  padding: 8px 0 0 6px;
  color: #aaa;
  font-weight: bold;
  font-size: smaller;
`;

export default (props) => {
  const { data } = props;
  return (
    <Frame>
      <Term>
        <Padding>Term</Padding>
        <Link data="none" className="active">Any time</Link>
        <Link data="m3">Past 3 Month</Link>
        <Link data="m6">Past 6 Month</Link>
        <Link data="y">Past 1 Year</Link>
        <Link data="y2">Past 2 Year</Link>
        <Link data="y3">Past 3 Year</Link>
        <Space />
      </Term>
      <Language className="language">
        <Padding>Language</Padding>
        <Link data="" className="active">Any pages</Link>
        <Link data="lang_en">English pages</Link>
        <Link data="lang_local">Local pages</Link>
        <Space />
      </Language>
    </Frame> 
  )
}

