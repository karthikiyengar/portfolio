// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta, Nav } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 475px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Qrypt provides an alternative approach to authentication using QR Barcodes</P>
      <Meta role="Frontend" context="Freelance" date="Mar '14" platforms="Android, Web" />
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/qrypt/mobile-scan.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/qrypt/mobile-landing.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/qrypt/mobile-settings.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['android', 'mysql', 'php']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
