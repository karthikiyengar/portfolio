import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1fr;
`;

export const Header = styled.header`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  display: none;
`;

export default () => (
  <Header>
    <Link href="/">
      <Title>Karthik Iyengar</Title>
    </Link>
    <LinksContainer>
      <StyledLink href="/blog">Blog</StyledLink>
      <StyledLink href="/">About</StyledLink>
    </LinksContainer>
  </Header>
);
