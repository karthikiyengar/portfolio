// @flow

import React from "react";
import styled from "styled-components";
import {
  Container,
  Content,
  ImageContainer,
  Description,
  P
} from "../../components/styled";
import { Header, Footer, Tools, Meta, Nav } from "../../components";

const Image = styled.img`
  width: auto;
  max-height: 475px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default props => (
  <Container>
    <Header />
    <Content>
      <P>
        Qrypt provides an alternative approach to authentication using QR
        Barcodes
      </P>
      <Meta
        role="All"
        context="Academic"
        date="JUN '13"
        platforms="Android, Web"
      />
      <Description>
        <li>
          An Android application which provides{" "}
          <strong>authorization using QR Barcodes</strong>
        </li>
        <li>
          Propsed a research paper and secured{" "}
          <strong>
            1st position in the Technical Presentation competition
          </strong>{" "}
          organized by the college.
        </li>
        <li>
          Project selected as an entry to the{" "}
          <strong>Eureka Competition at IIT Mumbai</strong> by the college
        </li>
      </Description>
      <ImageContainer>
        <Wrapper>
          <Image src="/static/portfolio/qrypt/mobile-scan.png" />
        </Wrapper>
        <Wrapper>
          <Image src="/static/portfolio/qrypt/mobile-landing.png" />
        </Wrapper>
        <Wrapper>
          <Image src="/static/portfolio/qrypt/mobile-settings.png" />
        </Wrapper>
      </ImageContainer>
      <Tools data={["android", "mysql", "php"]} />
    </Content>
    <Nav />
    <Footer />
  </Container>
);
