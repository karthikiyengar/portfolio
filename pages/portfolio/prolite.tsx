// @flow

import React from "react";
import styled from "styled-components";
import {
  Layout,
  Content,
  ImageContainer,
  Description,
  P,
} from "../../components/styled";
import { Header, Footer, Tools, Meta, Nav } from "../../components";

const Image = styled.img`
  width: auto;
  max-height: 500px;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const Prolite = props => <Layout>
  <Header />
  <Content>
    <P>
      Marketing and outreach applications for multiple firms, as a part of
      Prolite Entertainment
    </P>
    <Meta
      role="Mobile"
      context="Freelance"
      date="Jun '14"
      platforms="Android, iOS"
    />
    <Description>
      <li>Designed and developed hybrid and Android native applications</li>
      <li>
        Created <strong>marketing and consumer outreach</strong> applications
        for improving brand visibility
      </li>
      <li>
        <strong>Rapid development and iteration</strong> based on client
        feedback
      </li>
      <li>
        Worked closely with clients to develop an{" "}
        <strong>intuitive user experience</strong>
      </li>
    </Description>
    <ImageContainer>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-guard-yourself-2.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-guard-yourself-1.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-guard-yourself-3.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-rcity-2.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-rcity-1.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-rcity-3.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-kotak-2.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-kotak-1.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/prolite/mobile-kotak-3.png" />
      </Wrapper>
    </ImageContainer>
    <Tools
      data={["android", "ionic", "mysql", "nodejs", "mongodb", "laravel"]}
    />
  </Content>
  <Nav />
  <Footer />
</Layout>;

export default Prolite;
