import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  min-height: 100px;
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default (() => <Header>
    <Link href="/"><Title>KARTHIK IYENGAR</Title></Link>
  </Header>);