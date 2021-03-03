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

const Spotcap = () => <Layout>
  <Header />
  <Content>
    <P>
      Spotcap is a leading global fintech company operating in the online
      lending space
    </P>
    <Meta
      role="Frontend Engineer"
      context="Fulltime"
      date="Dec '17 - Current"
      platforms="Web"
    />
    <Wrapper>
      <Image src="/static/spotcap.png" />
    </Wrapper>
    <Description>
      At Spotcap, I'm responsible for building the Frontend of our primary
      underwriting platform used to review loan applications. I made crucial
      engineering decisions that simplified and standardised existing code.
      Some of them included moving from a multi-store Redux architecture to a
      consolidated store, introducing TypeScript, heavily refactoring to a
      highly functional style of programming and introducing sagas to handle
      complex caching requirements.
      <br />
      <br />
      Additionally, I introduced a strong testing culture to the team and set
      up a framework to rapidly build, document and validate components. These
      components are now to be used across projects, reducing development time
      and improving consistency. I am also responsible for interviewing
      candidates and bringing them up to speed with our style of programming.
    </Description>
    <VisitButton
      href="https://www.spotcap.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Visit Site
    </VisitButton>
    <Tools
      data={["typescript", "react", "redux", "nodejs", "jenkins", "jira"]}
    />
  </Content>
  <Footer />
</Layout>;

export default Spotcap;
