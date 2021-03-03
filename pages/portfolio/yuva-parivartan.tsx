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
import { Header, Nav, Footer, Tools, Meta } from "../../components";

const Image = styled.img`
  width: auto;
  max-height: 450px;
`;

const ImageSmall = styled(Image)`
  width: auto;
  max-height: 300px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerSpaced = styled(ImageContainer)`
  justify-content: space-around;
`;

const YuvaParivartan = props => <Layout>
  <Header />
  <Content>
    <P>
      Yuva Parivartan is one of the Largest NGOs providing livelihoods to
      underprivileged youth
    </P>
    <Meta
      role="All"
      context="Hackathon"
      date="Jul '14"
      platforms="Android, Web"
    />
    <Description>
      <li>
        Participated the <strong>Code for Good Hackathon 2014</strong>{" "}
        organized by <strong>J.P Morgan</strong>
      </li>
      <li>
        Secured <strong>3rd position among 20 teams</strong> across Mumbai, in
        a 24-hour coding event
      </li>
      <li>
        Developed an Android application with{" "}
        <strong>offline caching and sync</strong>, handling poor connectivity
      </li>
      <li>
        <strong>Administrative backend</strong> with data analysis
      </li>
    </Description>
    <ImageContainerSpaced>
      <Wrapper>
        <Image src="/static/portfolio/yuva-parivartan/mobile-caching.png" />
      </Wrapper>
      <Wrapper>
        <ImageSmall src="/static/portfolio/yuva-parivartan/photo-grid-backend.png" />
      </Wrapper>
    </ImageContainerSpaced>
    <Tools data={["php", "android", "trello"]} />
  </Content>
  <Nav />
  <Footer />
</Layout>;

export default YuvaParivartan;
