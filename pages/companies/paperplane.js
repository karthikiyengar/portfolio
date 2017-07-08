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
  display: flex;
  justify-content: center;
  margin: 15px auto;
`;

export default () => (
  <Container>
    <Header />
    <Content>
      <P>Paper Plane is a full-service Digital Agency with more than 10 years of Strategy, Design & User experience</P>
      <Meta role="Consultant" context="Process & Architecture" date="May '17 - Current" platforms="Web" />
      <Wrapper>
        <Image src="/static/paperplane.png" />
      </Wrapper>
      <Description>
        <li>Technical consultant, helping to <strong>architect a proprietary web store</strong> for a reputed client</li>
        <li><strong>Process audit and improvements</strong> to enhance productivity and developer efficiency</li>
        <li>Resturcturing current <strong>Agile processes</strong> and coaching stakeholders to bring it more in line with core principles</li>
        <li>Currently helping the company to setup <strong>coding standards and developement/testing guidelines</strong></li>
        <li>Provides guidance and <strong>mentors junior resources</strong> in their effort to write production ready code</li>
        <li>Provides recommendations for the hiring process and <strong>interviews candidates</strong> to determine technical fit to the company</li>
      </Description>
      <VisitButton href="https://paperplane.net" target="_blank" rel="noopener noreferrer">Visit Site</VisitButton>
      <Tools data={['nodejs', 'angularjs', 'backbone', 'php', 'scrum', 'jira']} />
    </Content>
    <Footer />
  </Container>
);
