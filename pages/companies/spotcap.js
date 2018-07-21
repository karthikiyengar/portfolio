// @flow

import React from "react";
import styled from "styled-components";
import {
  Container,
  Content,
  Description,
  VisitButton,
  P
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
  <Container>
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
        <li>Leading frontend development for the underwriting platform</li>
        <li>
          Authored a heavily <strong>functional codebase</strong> with extensive
          reusability and testability
        </li>
        <li>
          Architectured a system with{" "}
          <strong>localized failures, resilient to API downtime</strong>
        </li>
        <li>
          Handled complex <strong>caching requirements</strong> in order to
          minimize server workload
        </li>
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
  </Container>
);
