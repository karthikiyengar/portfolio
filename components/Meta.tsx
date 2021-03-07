import React from "react";
import styled from "styled-components";
import { media } from "./styled";

interface Props {
  role: string;
  context: string;
  date: string;
  platforms: string | string[];
}

const List = styled.ul`
  padding: 0;

  text-align: center;
  ${media.handheld`
    text-align: left; 
  `}
  &:before {
    content: "";
    background: url(/static/utils/separator.png);
    background-size: contain;
    width: 100%;
    margin-bottom: 5px;
    height: 1px;
    display: block;
  }
  &:after {
    content: "";
    background: url(/static/utils/separator.png);
    background-size: contain;
    margin-top: 5px;
    width: 100%;
    height: 1px;
    display: block;
  }
  li {
    padding: 8px;
  }
`;

const Item = styled.li`
  display: inline-block;
  padding: 20px 0;
  margin-right: 15px;
  :last-child {
    margin-right: 0px;
  }
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 5px;
  &:after {
    content: ":";
  }
`;

const Value = styled.span`
  font-size: 15px;
  text-transform: uppercase;
`;

const Meta = (props: Props) => (
  <List>
    <Item>
      <Title>Role</Title>
      <Value>{props.role}</Value>
    </Item>
    <Item>
      <Title>Context</Title>
      <Value>{props.context}</Value>
    </Item>
    <Item>
      <Title>Tenure</Title>
      <Value>{props.date}</Value>
    </Item>
  </List>
);

export default Meta;
