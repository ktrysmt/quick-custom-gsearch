import styled from 'styled-components';

const Link = styled.a`
  background-color: white;
  color: #777;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
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

export default {
  Link,
  Space,
  Padding,
};
