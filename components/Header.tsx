import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-bottom: 20px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
  }
`;

export default () => (
  <Header>
    <Link href="/">
      <Title>Karthik Iyengar</Title>
    </Link>
  </Header>
);
