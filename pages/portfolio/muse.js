// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, Description, P } from '../../components/styled';
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
      <Meta role="Backend & Frontend" context="Freelance" date="Aug '17" platforms="Web" />
      <Description>
        <li>Node.js API Development and React/Redux frontend development for corporate users</li>
        <li>Modeled complex use cases, and complex state changes in MongoDB</li>
        <li>Integration with multiple third party APIs, for social media and payment integration</li>
        <li>Extensive collaboration to ensure a great user experience</li>
        <li>A corporate frontend to feed the application and control user flows</li>
        <li>Insightful analytics and user metrics derived from application usage and outreach</li>
      </Description>
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
