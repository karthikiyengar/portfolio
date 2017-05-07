// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 5px;
`;

export default () => (
  <Container>
    <Image src="/static/react.svg" />
    <Image src="/static/nodejs.svg" />
    <Image src="/static/redux.png" />
  </Container>
);
