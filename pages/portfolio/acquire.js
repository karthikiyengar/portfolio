// @flow

import React from 'react';
import styled from 'styled-components';
import { Container, Content, ImageContainer, P, Description } from '../../components/styled';
import { Header, Nav, Footer, Tools, Meta } from '../../components';


const Image = styled.img`
  width: auto;
  max-height: 425px;
`;

const Wrapper = styled.div`
  min-width: 0;
`;

export default (props) => (
  <Container>
    <Header />
    <Content>
      <P>Acquire helps you find the right products that match your taste</P>
      <Meta role="Frontend" context="Freelance" date="Mar '17" platforms="Web" />
      <Description>
        <li>Completely <strong>responsive</strong> Universal React/Redux Application</li>
        <li>Developed and delivered within <strong>1 calendar week</strong></li>
        <li>Optimized for enhanced <strong>SEO</strong> performance</li>
        <li>Offers product <strong>recommendations on the fly</strong> based on customer preferences</li>
      </Description>
      <ImageContainer>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-advisor.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/mobile-catalog.png" /></Wrapper>
        <Wrapper><Image src="/static/portfolio/acquire/desktop-landing.png" /></Wrapper>
      </ImageContainer>
      <Tools data={['react', 'redux', 'nodejs']} />
    </Content>
    <Nav url={props.url} />
    <Footer />
  </Container>
);
