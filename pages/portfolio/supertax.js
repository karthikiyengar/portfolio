// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P } from '../../components/styled';
import { Header, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  max-width: 200px;
  margin: 0 30px;
`;

const ImageLarge = styled.img`
  max-width: 700px;
  margin-bottom: 25px;
`;

const ImageMedium = styled.img`
  max-width: 650px;
  margin-bottom: 25px;
  margin-right: 30px
`;

const Wrapper = styled.div`
  min-width: 0;
`;

const ImageContainerCentered = styled(ImageContainer)`
  justify-content: center;
`;


export default () => (
  <Container>
    <Header />
    <Content>
      <P>A web platform that gives you complete control over your GST returns</P>
      <Meta role="Frontend" context="Freelance" date="Jan '17" platforms="Responsive" />
      <ImageContainerCentered>
        <Wrapper><ImageLarge src="/static/portfolio/supertax/desktop-dashboard.png" /></Wrapper>
        <Wrapper><ImageMedium src="/static/portfolio/supertax/super_macbookair13_front.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/supertax/mobile-permissions.png" /></Wrapper>
      </ImageContainerCentered>
      <Tools data={['react', 'redux', 'jira']} />
    </Content>
    <Footer />
  </Container>
);
