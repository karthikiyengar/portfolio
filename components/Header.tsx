import React from "react";
import styled from "styled-components";
import { Link } from "./styled";

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  grid-gap: 1fr;
`;

export const HeaderContainer = styled.header`
  min-height: 60px;
  display: block;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #343a40;
  color: white;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  align-items: center;
  z-index: 999999;
`;

export const Content = styled.div`
  max-width: 820px;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Content>
      <Link href="/">
        <p style={{ fontSize: "20px", fontFamily: "serif" }}>Karthik Iyengar</p>
      </Link>
      <LinksContainer>
        <Link href="/about">About</Link>
      </LinksContainer>
    </Content>
  </HeaderContainer>
);

export default Header;
