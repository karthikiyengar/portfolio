// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 475px;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <P>Automator is a home automation system which helps you control electrical appliances digitally</P>
      <Meta role="All" context="Academic & Hobby" date="Mar '12" platforms="Linux, Windows" />
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/automator/desktop-login.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/automator/desktop-landing.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/automator/circuit-diagram.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['python', 'arduino', 'c']} />
    </Content>
    <Footer />
  </Container>
);
