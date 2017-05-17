// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, Image, P, media } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';

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
      <P>Threatbar helps organizations build intellectual properties and customer loyalties by enhancing security</P>
      <Meta role="Frontend" context="Freelance" date="May '17" platforms="Web" />
      <ImageContainerCentered>
        <Wrapper><ImageLarge src="/static/portfolio/threatbar/desktop-dashboard.png" /></Wrapper>        
        <Wrapper><Image src="/static/portfolio/threatbar/desktop-central.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/threatbar/desktop-public.png" /></Wrapper>
      </ImageContainerCentered>
      <Tools data={['react', 'redux', 'nodejs', 'trello']} />
    </Content>
    <Footer />
  </Container>
);
