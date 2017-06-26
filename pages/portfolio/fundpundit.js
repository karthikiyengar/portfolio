// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, VisitButton, Description, P } from '../../components/styled';
import { Header, Footer, Tools, Meta, Nav } from '../../components';


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


export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Fundpundit serves as your first step to get funds and connects investors and banks to users.</P>
      <Meta role="Frontend & Backend" context="Freelance" date="Feb '17" platforms="Web" />
      <Description>
        <li>A MongoDB/GraphQL backed responsive React/Redux application</li>
        <li>Over <strong>5 different roles and permissions</strong> with complex <strong>interlinked user flows</strong></li>
        <li>Unique <strong>configurable algorithm</strong> to calculate credit rating of users</li>
        <li>Generates a unique <strong>one-page pdf</strong> proposal for all applicants</li>
        <li><strong>Geolocation</strong> to identify nearest branches</li>
        <li>A fully feature <strong>administrative panel</strong> which allows you configure every facet of the website</li>
        <li>Track a user's application through multiple steps, until it gets approved by the investors/banks</li>
      </Description>
      <ImageContainerCentered>
        <Wrapper><Image src="/static/portfolio/fundpundit/mobile-profile.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/fundpundit/tablet-loans.png" /></Wrapper>
        <Wrapper><ImageLarge src="/static/portfolio/fundpundit/desktop-landing.png" /></Wrapper>
      </ImageContainerCentered>
      <VisitButton href="https://fundpundit.com" target="_blank" rel="noopener noreferrer">Visit Site</VisitButton>
      <Tools data={['react', 'redux', 'nodejs', 'mongodb', 'graphql', 'trello']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
