import React from "react";
import styled from "styled-components";
import { Link } from "./styled";

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1fr;
`;

export const HeaderContainer = styled.header`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-bottom: 20px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link href="/">
      <Title>Karthik Iyengar</Title>
    </Link>
    {/* <LinksContainer>
      <Link href="/blog">Blog</Link>
      <Link href="/">About</Link>
    </LinksContainer> */}
  </HeaderContainer>
);

export default Header;
