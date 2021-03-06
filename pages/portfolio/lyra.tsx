// @flow

import React from "react";
import styled from "styled-components";
import {
  Layout,
  VisitButton,
  Content,
  ImageContainer,
  Description,
  P,
} from "../../components/styled";
import { Header, Tools, Meta, Nav } from "../../components";

const Image = styled.img`
  width: auto;
  max-height: 500px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerSpaced = styled(ImageContainer)`
  justify-content: space-around;
`;

const Lyra = (props: any) => (
  <Layout>
    <Header />
    <Content>
      <P>Lyra is a unique social media influencer marketing platform</P>
      <Meta
        role="Backend"
        context="Freelance"
        date="Aug '18"
        platforms="Web / iOS"
      />
      <Description>
        <li>
          Engineered a performant, distributed REST API for a{" "}
          <strong>marketplace</strong> serving iOS and Web clients.
        </li>
        <li>
          Developed payment infrastructure involving multi-party{" "}
          <strong>
            payments, refunds, payouts, subscriptions and referrals.
          </strong>
        </li>
        <li>
          Analyzed <strong>data usage patterns</strong> to design an optimal
          database schema for MongoDB that retains data integrity.
        </li>
        <li>
          Designed and developed a <strong>geolocated activity feed</strong> and
          a <strong>job processing microservice.</strong>
        </li>
        <li>
          Integrated with Twitter, Facebook and Instagram for authorization,
          posting content and gathering periodic analytics.
        </li>
        <li>
          Built deployment pipelines for frontend and backend using the{" "}
          <strong>Google Cloud Platform, orchestrated using GKE.</strong>
        </li>
      </Description>
      <ImageContainerSpaced>
        <Wrapper>
          <Image src="/static/portfolio/lyra/mobile-splash.png" />
        </Wrapper>
        <Wrapper>
          <Image src="/static/portfolio/lyra/mobile-login.png" />
        </Wrapper>
      </ImageContainerSpaced>
      <VisitButton
        href="https://lyra-influence.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </VisitButton>
      <Tools
        data={[
          "mongodb",
          "typescript",
          "nodejs",
          "docker",
          "kubernetes",
          "redis",
          "trello",
        ]}
      />
    </Content>
    <Nav />
  </Layout>
);

export default Lyra;
