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
        Paper Plane is a full-service Digital Agency with more than 10 years of
        Strategy, Design & User experience
      </P>
      <Meta
        role="Consultant"
        context="Process & Architecture"
        date="May '17 - Dec '17"
        platforms="Web"
      />
      <Wrapper>
        <Image src="/static/paperplane.png" />
      </Wrapper>
      <Description>
        I worked with PaperPlane as a technical consulting, helping them
        architect an E-Commerce platform for one of their reputed Swiss clients
        with a worldwide presence, implemented using a well-established ERP
        system. Additionally, my responsibilities included modernizing
        development and project management processes, guiding and mentoring
        developers, establishing processes to build an internal knowledge
        repository, revamping the recruitment process and improving quality
        control mechanisms.
        <br />
        <br />
        With the new processes and culture in place, we were able to achieve a
        measurable increase in efficiency and a marked reduction in quality
        issues. I served as the primary technical point of contact in
        conversations with the clients/ERP vendor. I was quickly able to
        validate assumptions and approaches in a complicated ecosystem in order
        to provide best practices and approaches.
      </Description>
      <VisitButton
        href="https://paperplane.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </VisitButton>
      <Tools
        data={["nodejs", "angularjs", "backbone", "php", "scrum", "jira"]}
      />
    </Content>
    <Footer />
  </Container>
);
