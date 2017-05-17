import React from 'react';
import styled, { keyframes } from 'styled-components';
import IconCode from 'react-icons/lib/md/phonelink';
import IconProductConsulting from 'react-icons/lib/md/lightbulb-outline';
import IconTechConsulting from 'react-icons/lib/fa/code';
import IconMobileDev from 'react-icons/lib/md/phonelink-setup';

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.section`
  display: flex;
  margin: 40px 0;
  justify-content: space-between;
  svg {
    font-size: 5em;
    color: darkgray;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${appear};
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

const Title = styled.p`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: darkgray;
  margin: 5px 0;
`;


export default () => (
  <Container>
    <Item>
      <IconCode />
      <Title>Web Development</Title>
    </Item>
    <Item>
      <IconMobileDev />
      <Title>Mobile Development</Title>
    </Item>
    <Item>
      <IconProductConsulting />
      <Title>Product Consulting</Title>
    </Item>
    <Item>
      <IconTechConsulting />
      <Title>Technical Consulting</Title>
    </Item>
  </Container>
);
