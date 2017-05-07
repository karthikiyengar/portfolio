// @flow

import React from 'react';
import { Container, Content, Subtitle } from '../../components/styled';
import { Header, Footer, Tools } from '../../components';

export default () => (
  <Container>
    <Header />
    <Content>
      <Subtitle>
        Threatbar helps organizations build intellectual properties and customer loyalties by enhancing security
      </Subtitle>
      <Tools />
    </Content>
    <Footer />
  </Container>
);
