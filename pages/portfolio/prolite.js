// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 500px;
  margin-bottom: 25px;
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
        <Wrapper><Image src="/static/portfolio/prolite/mobile-guard-yourself-2.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-guard-yourself-1.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-guard-yourself-3.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-rcity-2.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-rcity-1.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-rcity-3.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-kotak-2.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-kotak-1.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/prolite/mobile-kotak-3.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['android', 'ionic', 'mysql', 'nodejs']} />
    </Content>
    <Footer />
  </Container>
);
