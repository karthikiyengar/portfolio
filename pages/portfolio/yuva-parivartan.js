// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 450px;
`;

const ImageSmall = styled(Image)`
  width: auto;
  max-height: 300px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerSpaced = styled(ImageContainer)`
  justify-content: space-around;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <P>Acquire helps you find the right products that match your taste</P>
      <Meta role="Frontend" context="Freelance" date="Mar '17" platforms="Responsive" />
      <ImageContainerSpaced>
        <Wrapper><Image src="/static/portfolio/yuva-parivartan/mobile-caching_iphone5s_silver_portrait.png" /></Wrapper>
        <Wrapper><ImageSmall src="/static/portfolio/yuva-parivartan/photo-grid-backend_macbookair13_front.png" /></Wrapper>
      </ImageContainerSpaced>
      <Tools data={['react', 'redux', 'nodejs']} />
    </Content>
    <Footer />
  </Container>
);
