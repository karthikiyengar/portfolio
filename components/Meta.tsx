import React from "react";
import styled from "styled-components";
import { media } from "./styled";

interface Props {
  role: string;
  context: string;
  date: string;
  platforms: string[];
}

const List = styled.ul`
  text-align: center;
  padding: 0;
  &:before {
    content: "";
    background: url(/static/utils/separator.png);
    background-size: contain;
    width: 100%;
    height: 1px;
    display: block;
  }
  &:after {
    content: "";
    background: url(/static/utils/separator.png);
    background-size: contain;
    width: 100%;
    height: 1px;
    display: block;
  }
`;

const Item = styled.li`
  display: inline-block;
  padding: 20px 0;
  margin-right: 15px;
`;

const Title = styled.span`
  text-transform: uppercase;
  margin-right: 5px;
`;

const Value = styled.span`
  font-family: "Montserrat", sans-serif;
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
      <Title>Date</Title>
      <Value>{props.date}</Value>
    </Item>
    <Item>
      <Title>Platforms</Title>
      <Value>{props.platforms.join(", ")}</Value>
    </Item>
  </List>
);

export default Meta;
