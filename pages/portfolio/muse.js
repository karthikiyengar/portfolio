// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta, Nav } from '../../components';


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

export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Muse is a unique social media influencer marketing platform</P>
      <Meta role="Backend & Frontend" context="Freelance" date="Mar '17" platforms="Web" />
      <ImageContainerSpaced>
        <Wrapper><Image src="/static/portfolio/muse/mobile-splash.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/muse/mobile-login.png" /></Wrapper>
      </ImageContainerSpaced>
      <Tools data={['mongodb', 'react', 'redux', 'nodejs', 'trello']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
