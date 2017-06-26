// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, Description, VisitButton,  P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 425px;
`;

const Wrapper = styled.div`
  min-width: 0;
  margin: 15px auto;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <P>Novanet is a design-centric multinational cloud communications company</P>
      <Meta role="Lead Frontend Engineer" context="Fulltime" date="Feb '16 - Aug '16" platforms="Web" />
      <Wrapper>
        <Image src="/static/novanet.png" />
      </Wrapper>
      <Description>
        <li>Lead Frontend Development at Novanet, responsible for design and development of a <strong>management console, historical reporting dashboard and real-time monitor</strong></li>
        <li>Offered an immediate boost to team productivity, by making relevant commits and <strong>closing 100+ issues on the AngularJS codebase</strong> starting from day one</li>
        <li>Completely rewrote the management console and historical reporting dashboard. Performed a <strong>isomorphic integration of two large scale React SPAs</strong> with complex real-time data flows</li>
        <li>Developed <strong>custom charting and reporting components</strong> using <strong>vector graphics and d3.js</strong></li>
        <li>Worked closely with designers and technical lead to determine <strong>interaction flows, wireframes, edge cases and user-relevant data points to ensure a smooth user-experience</strong></li>
        <li><strong>Mentored junior resources</strong> to bring them up to speed with the technology and platform. <strong>Interviewed candidates</strong> to determine technical/cultural fit to the company</li>
        <li>Offered valuable <strong>insights on architectural and technology stack decisions</strong> on both client and server side</li>
        <li><strong>Contributed</strong> to and customized <strong>open-source</strong> libraries to suit development requirements</li>
        <li>Introduced <strong>Kanban</strong> for enhanced project tracking and visibility to meet aggressive deadlines</li>
      </Description>
      <VisitButton href="https://novanet.net" target="_blank" rel="noopener noreferrer">Visit Site</VisitButton>
      <Tools data={['nodejs', 'angularjs', 'react', 'redux', 'sketch', 'trello']} />
    </Content>
    <Footer />
  </Container>
);
