// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 500px;
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
        <Wrapper><Image src="/static/portfolio/muse/mobile-splash.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/muse/mobile-login.png" /></Wrapper>
      </ImageContainerSpaced>
      <Tools data={['mongodb', 'react', 'redux', 'nodejs', 'trello']} />
    </Content>
    <Footer />
  </Container>
);
