// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P, Description } from '../../components/styled';
import { Header, Nav, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 425px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Acquire helps you find the right products that match your taste</P>
      <Meta role="Frontend" context="Freelance" date="Mar '17" platforms="Web" />
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-advisor.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-catalog.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/desktop-landing.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['react', 'redux', 'nodejs']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
