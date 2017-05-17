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
      <P>Marketing and outreach applications for multiple firms, as a part of Prolite Entertainment</P>
      <Meta role="Mobile" context="Freelance" date="Jun '14" platforms="Android, iOS" />
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
      <Tools data={['android', 'ionic', 'mysql', 'nodejs', 'mongodb', 'laravel']} />
    </Content>
    <Footer />
  </Container>
);
