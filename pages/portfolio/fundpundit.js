// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 420px;
  margin: 0 50px;
  margin-bottom: 25px;
`;

const ImageLarge = styled(Image)`
  max-width: 600px;
  height: auto;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerCentered = styled(ImageContainer)`
  justify-content: center;
`;


export default () => (
  <Container>
    <Header />
    <Content>
      <P>Acquire helps you find the right products that match your taste</P>
      <Meta role="Frontend" context="Freelance" date="Mar '17" platforms="Responsive" />
      <ImageContainerCentered>
        <Wrapper><Image src="/static/portfolio/fundpundit/mobile-profile.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/fundpundit/tablet-loans.png" /></Wrapper>
        <Wrapper><ImageLarge src="/static/portfolio/fundpundit/desktop-landing.png" /></Wrapper>
      </ImageContainerCentered>
      <Tools data={['react', 'redux', 'nodejs']} />
    </Content>
    <Footer />
  </Container>
);
