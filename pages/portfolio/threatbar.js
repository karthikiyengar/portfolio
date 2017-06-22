// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Button, Content, Description, ImageContainer, Image, P, media } from '../../components/styled';
import { Header, Footer, Tools, Meta, Nav } from '../../components';

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


export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Threatbar is a bug-bounty platform that helps organizations build intellectual properties and customer loyalties by enhancing security</P>
      <Meta role="Frontend" context="Freelance" date="May '17" platforms="Web" />
      <Description>
        <li>Universal React/Redux Application</li>
        <li>Multiple roles and permissions with separate interfaces for clients and end-users</li>
        <li>Interactions between end-users,clients and Threatbar by comments, and ticket assignment</li>
        <li>Comprehensive Dashboard for clients with charts that provide metrics to track usage</li>
        <li>Extensive sorting and filtering capabilities with pagination</li>
        <li>Emphasis on security, and safe coding practices to prevent vulnerabilities</li>
      </Description>
      <ImageContainerCentered>
        <Wrapper><ImageLarge src="/static/portfolio/threatbar/desktop-dashboard.png" /></Wrapper>        
        <Wrapper><Image src="/static/portfolio/threatbar/desktop-central.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/threatbar/desktop-public.png" /></Wrapper>
      </ImageContainerCentered>
      <Tools data={['react', 'redux', 'nodejs', 'trello']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
