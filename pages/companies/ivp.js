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
      <P>IVP is the largest solutions firm focused on the Alternative Asset Management industry</P>
      <Meta role="Software Engineer" context="Fulltime" date="Jan '15 - Feb '16" platforms="Web" />
      <Wrapper>
        <Image src="/static/ivp.png" />
      </Wrapper>
      <Description>
        <li>Worked in a <strong>consulting and development</strong> capacity in a Data Warehouse implementation for a reputed Swiss client with an AUM of more than $50 billion, and an inflow of <strong>more than a million transactions per day</strong></li>
        <li><strong>Interacted with both technical and business facing users</strong> to understand functional requirements, estimate, develop and deliver them in an <strong>Agile environment</strong></li>
        <li>Experience in <strong>sound relational design</strong>, having taken up <strong>complete ownership of the normalization</strong> of primary position and transactions feeds</li>
        <li>Designed and developed a generic matching logic for matching same securities arriving from multiple feeds. This allowed for better data representation and <strong>reduced the cost</strong> of setting up a new security source by <strong>80%</strong></li>
        <li>Significantly <strong>improved team productivity</strong> by enhancing the feed monitoring dashboard to provide detailed file arrival and normalization statuses.</li>
        <li>Undertook <strong>complete development of trade blotters</strong> for post-trade compliance and risk reporting (FCA/EMIR), in use by the operations team</li>
        <li>Served as the <strong>single point of contact</strong> for the Intraday Risk Reporting module used by front-office PMs/RMs. Responsibilities included onboarding new funds into the system and resolving <strong>time-sensitive production issues</strong> to avoid business impact</li>
        <li>Took initiative to <strong>refactor existing codebase, eliminate redundant code, improve developer experience</strong>. Lead the <strong>version control restructuring process, introduced CI and automated deployments</strong>. This significantly improved developer productivity and <strong>reduced execution risk</strong> involved in manual deployments</li>
      </Description>
      <VisitButton href="https://ivp.in" target="_blank" rel="noopener noreferrer">Visit Site</VisitButton>
      <Tools data={['csharp', 'mssql', 'angularjs', 'jenkins', 'scrum', 'jira']} />
    </Content>
    <Footer />
  </Container>
);
