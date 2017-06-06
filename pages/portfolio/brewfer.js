// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, Subtitle, ImageContainer, P } from '../../components/styled';
import { Header, Nav, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 450px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Brewfer shows you the best offers brewing around you and helps you find the right food for your wallet</P>
      <Meta role="Mobile & Backend" context="Freelance" date="Dec '15" platforms="Android, iOS, Web" />
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/brewfer/mobile-filters.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/brewfer/mobile-restaraunts.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/brewfer/desktop-landing.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['laravel', 'angularjs', 'ionic', 'mysql', 'trello']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
