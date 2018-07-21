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
      <P>Lyra is a unique social media influencer marketing platform</P>
      <Meta role="Backend & Frontend" context="Freelance" date="Aug '18" platforms="Web" />
      <Description>
        <li>Node.js API Development and React/Redux frontend development for corporate users</li>
        <li>Modeled <strong>complex use cases and state changes</strong> in MongoDB</li>
        <li>Integration with <strong>multiple third party APIs</strong>, for social media and <strong>payment integration</strong></li>
        <li>Extensive collaboration to ensure a great <strong>user experience</strong></li>
        <li>A corporate frontend to feed the application and control user flows</li>
        <li><strong>Insightful analytics</strong> and user metrics derived from application usage and outreach</li>
      </Description>
      <ImageContainerSpaced>
        <Wrapper><Image src="/static/portfolio/lyra/mobile-splash.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/lyra/mobile-login.png" /></Wrapper>
      </ImageContainerSpaced>
      <Tools data={['mongodb', 'typescript', 'react', 'redux', 'nodejs', 'trello']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
