// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, VisitButton, ImageContainer, Description, P } from '../../components/styled';
import { Header, Footer, Tools, Meta, Nav } from '../../components';


const Image = styled.img`
  max-width: 200px;
  margin: 0 30px;
`;

const ImageLarge = styled.img`
  max-width: 700px;
  margin-bottom: 25px;
`;

const ImageMedium = styled.img`
  max-width: 650px;
  margin-bottom: 25px;
  margin-right: 30px
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
      <P>A web platform that gives you complete control over your GST returns</P>
      <Meta role="Frontend" context="Freelance" date="Jan '17" platforms="Web" />
      <Description>
        <li>A fully <strong>responsive</strong> React/Redux Application</li>
        <li>Rapidly brainstormed, prototyped and delivered the platform in <strong>2 calendar weeks</strong></li>
        <li>Insightful <strong>charts, graphs and custom components</strong> that provide an overview of your finances</li>
        <li>Extensible <strong>multi-wizard form</strong> with an architecture that enables you to add master/detail forms with ease</li>
        <li>Fully featured tables that let you <strong>drill-down</strong> into data, perform actions for multiple rows, filter and records export to excel</li>
        <li>Developed <strong>unit tested modules</strong> that mimic Microsoft Excel's formula autocompletion features with extensive validation</li>
        <li><strong>Flexible components</strong> to deal with changes mandated by the business</li>
      </Description>
      <ImageContainerCentered>
        <Wrapper><ImageLarge src="/static/portfolio/supertax/desktop-dashboard.png" /></Wrapper>
        <Wrapper><ImageMedium src="/static/portfolio/supertax/super_macbookair13_front.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/supertax/mobile-permissions.png" /></Wrapper>
      </ImageContainerCentered>
      <VisitButton href="https://supertax.in" target="_blank" rel="noopener noreferrer">Visit Site</VisitButton>
      <Tools data={['react', 'redux', 'jira']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
