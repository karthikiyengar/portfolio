// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, Description, P } from '../../components/styled';
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
        <li>A fully responsive React/Redux Application</li>
        <li>Rapidly brainstormed, prototyped and delivered the platform in 2 calendar weeks</li>
        <li>Insightful charts, graphs and custom components that provide an overview of your finacnes</li>
        <li>Extensible multi-wizard form with an architecture that enables you to add master/detail forms with ease</li>
        <li>Fully featured tables that let you drill-down into data, perform actions for multiple rows, filter and records export to excel</li>
        <li>Developed unit tested modules that mimic Microsoft Excel's formula automcompletion features with extensive validation</li>
        <li>Flexible components to deal with changes mandated by the business</li>
      </Description>
      <ImageContainerCentered>
        <Wrapper><ImageLarge src="/static/portfolio/supertax/desktop-dashboard.png" /></Wrapper>
        <Wrapper><ImageMedium src="/static/portfolio/supertax/super_macbookair13_front.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/supertax/mobile-permissions.png" /></Wrapper>
      </ImageContainerCentered>
      <Tools data={['react', 'redux', 'jira']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
