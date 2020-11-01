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
        IVP is the largest solutions firm focused on the Alternative Asset
        Management industry
      </P>
      <Meta
        role="Software Engineer"
        context="Fulltime"
        date="Jan '15 - Feb '16"
        platforms="Web"
      />
      <Wrapper>
        <Image src="/static/ivp.png" />
      </Wrapper>
      <Description>
        I served as a consulting developer working on a data warehouse
        implementation for a Swiss investment bank with an inflow of around ​3
        million transactions per day. Roles included requirement analysis,
        development, testing, deployment and production support. As part of an
        incredibly fast-paced environment with mission critical systems, I
        learnt much about designing enterprise systems and developed a keen
        interest in the trade lifecycle.
        <br />
        <br />
        I was also awarded the “Best New Recruit”​ award among 20 new joiners to
        the company. In terms of technology, most of my time was spent writing
        C# code and dealing with data architecture challenges using T-SQL.
      </Description>
      <VisitButton
        href="https://ivp.in"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </VisitButton>
      <Tools data={["c#", "mssql", "angularjs", "jenkins", "scrum", "jira"]} />
    </Content>
    <Footer />
  </Container>
);
