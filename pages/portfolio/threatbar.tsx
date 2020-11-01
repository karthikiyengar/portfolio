// @flow

import React from "react";
import styled from "styled-components";
import {
  Layout,
  VisitButton,
  Content,
  Description,
  ImageContainer,
  Image,
  Link,
  P,
  media,
} from "../../components/styled";
import { Header, Footer, Tools, Meta, Nav } from "../../components";

const ImageLarge = styled(Image)`
  max-width: 600px;
  height: auto;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerCentered = styled(ImageContainer)`
  justify-content: center;
`;

export default (props) => (
  <Layout>
    <Header />
    <Content>
      <P>
        Threatbar is a bug-bounty platform that helps organizations build
        intellectual properties and customer loyalties by enhancing security
      </P>
      <Meta
        role="Frontend"
        context="Freelance"
        date="May '17"
        platforms="Web"
      />
      <Description>
        <li>
          <strong>Universal</strong> React/Redux Application
        </li>
        <li>
          Multiple <strong>roles and permissions</strong> with separate
          interfaces for clients and end-users
        </li>
        <li>
          Interactions between end-users, clients and Threatbar by comments, and
          ticket assignment
        </li>
        <li>
          <strong>Comprehensive Dashboard</strong> for clients with charts that
          provide metrics to track usage
        </li>
        <li>Extensive sorting and filtering capabilities with pagination</li>
        <li>
          Emphasis on <strong>security, and safe coding practices</strong> to
          prevent vulnerabilities
        </li>
      </Description>
      <ImageContainerCentered>
        <Wrapper>
          <ImageLarge src="/static/portfolio/threatbar/desktop-dashboard.png" />
        </Wrapper>
        <Wrapper>
          <Image src="/static/portfolio/threatbar/desktop-central.png" />
        </Wrapper>
        <Wrapper>
          <Image src="/static/portfolio/threatbar/desktop-public.png" />
        </Wrapper>
      </ImageContainerCentered>
      <VisitButton
        href="https://threatbar.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </VisitButton>
      <Tools data={["react", "redux", "nodejs", "trello"]} />
    </Content>
    <Nav />
    <Footer />
  </Layout>
);
