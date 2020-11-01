// @flow

import React from "react";
import styled from "styled-components";
import {
  Layout,
  Content,
  Description,
  VisitButton,
  P,
} from "../../components/styled";
import { Header, Footer, Tools, Meta } from "../../components";

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
  <Layout>
    <Header />
    <Content>
      <P>
        Novanet is a design-centric multinational cloud communications company
      </P>
      <Meta
        role="Lead Frontend Engineer"
        context="Fulltime"
        date="Feb '16 - Aug '16"
        platforms="Web"
      />
      <Wrapper>
        <Image src="/static/novanet.png" />
      </Wrapper>
      <Description>
        I served as the Lead Frontend Developer for a for a SaaS VoIP platform,
        in use by 75+ contact centers. I took over a legacy AngularJS codebase
        and was tasked with re-architecting it. I objectively evaluated
        available technology choices by factoring performance, maintainability
        and team learning curve and led the React/Redux rewrite of the platform.
        Apart from the domain specific technical challenges, I was also tasked
        with overseeing the design team to help them determine problematic edge
        cases before development time was invested.
        <br />
        <br />
        As this was a user-facing website, a lot of my time was also spent on
        performance optimisation and reducing site-load times. I was also
        responsible for recruiting and mentoring junior resources to the
        company.
      </Description>
      <VisitButton
        href="https://novanet.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </VisitButton>
      <Tools
        data={["nodejs", "angularjs", "react", "redux", "sketch", "trello"]}
      />
    </Content>
    <Footer />
  </Layout>
);
