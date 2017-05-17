// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 425px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <P>Acquire helps you find the right products that match your taste</P>
      <Meta role="Frontend" context="Freelance" date="Mar '17" platforms="Responsive" />
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-advisor.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-catalog.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/desktop-landing.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['csharp', 'mssql', 'jenkins', 'angularjs', 'jquery', 'jira']} />
    </Content>
    <Footer />
  </Container>
);
