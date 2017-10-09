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
`

export default (props) => {
  const { data } = props;

  return (
    <Frame>
      <div className="term">
        <span className="head">Term</span>
        <a data="none" className="active">Any time</a>
        <a data="m3">Past 3 Month</a>
        <a data="m6">Past 6 Month</a>
        <a data="y">Past 1 Year</a>
        <a data="y2">Past 2 Year</a>
        <a data="y3">Past 3 Year</a>
        <span></span>
      </div>
      <div className="language">
        <span className="head">Language</span>
        <a data="" className="active">Any pages</a>
        <a data="lang_en">English pages</a>
        <a data="lang_local">Local pages</a>
        <span></span>
      </div>
    </Frame> 
  )
}

