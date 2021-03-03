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
  max-height: 475px;
  margin-bottom: 25px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const Automator = props => <Layout>
  <Header />
  <Content>
    <P>
      Automator is a home automation system which helps you control electrical
      appliances digitally
    </P>
    <Meta
      role="All"
      context="Academic & Hobby"
      date="Mar '12"
      platforms="Linux, Windows"
    />
    <Description>
      <li>An Arduino, Python and GTK project</li>
      <li>
        Control connected applicances using a <strong>remote control</strong>
      </li>
      <li>
        LDRs allow you to automatically control appliances depending on{" "}
        <strong>room luminosity</strong>
      </li>
      <li>
        Can program the application to turn on or off using a{" "}
        <strong>timer</strong>
      </li>
      <li>
        The project secured <strong>1st position in graduation thesis</strong>
        and presentation
      </li>
    </Description>
    <ImageContainer>
      <Wrapper>
        <Image src="/static/portfolio/automator/desktop-login.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/automator/desktop-landing.png" />
      </Wrapper>
      <Wrapper>
        <Image src="/static/portfolio/automator/circuit-diagram.png" />
      </Wrapper>
    </ImageContainer>
    <Tools data={["python", "arduino", "c"]} />
  </Content>
  <Nav />
  <Footer />
</Layout>;

export default Automator;
