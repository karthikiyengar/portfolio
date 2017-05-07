// @flow

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Row, Textarea, Input, Subtitle, Section, Container, Content, Button, P } from '../components/styled';
import { Portfolio, Services, Companies, Footer, Header } from '../components';

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
  }
`;

const portfolio = [{
  title: 'Threatbar',
  image: '/static/threatbar.png',
  link: '/portfolio/threatbar',
}, {
  title: 'Supertax',
  image: '/static/supertax.png',
}, {
  title: 'Muse',
  image: '/static/muse.png',
}, {
  title: 'Acquire',
  image: '/static/acquire.png',
}, {
  title: 'Fundpundit',
  image: '/static/fundpundit.png',
}, {
  title: 'Brewfer',
  image: '/static/brewfer.png',
}, {
  title: 'Prolite',
  image: '/static/prolite.png',
}, {
  title: 'Yuva Parivartan',
  image: '/static/yuva-parivartan.png',
}, {
  title: 'Qrypt',
  image: '/static/qrypt.png',
}, {
  title: 'Automator',
  image: '/static/automator.png',
}];

const companies = [{
  title: 'Indus Valley Partners',
  image: '/static/ivp.png',
}, {
  title: 'Novanet',
  image: '/static/novanet.png',
}];

export default () => (
  <Container>
    <Header />
    <Subtitle>I’m a full stack developer and consultant and I help convert your ideas into products.</Subtitle>
    <Content>
      <Services />
      <Section>PORTFOLIO</Section>
      <Portfolio data={portfolio} />
      <Section>I’VE WORKED WITH</Section>
      <Companies data={companies} />
      <Section>GET IN TOUCH</Section>
      <Row>
        <P>Hello there! Let’s talk to understand how I can help you. You can leave me a short message and I’ll get back to you as soon as I can.</P>
      </Row>
      <Row>
        <Input type="text" name="name" placeholder="Your Name" />
      </Row>
      <Row>
        <Input type="text" name="email" placeholder="Your Email Address" />
      </Row>
      <Row>
        <Textarea type="text" name="email" placeholder="Message" rows={10} />
      </Row>
      <Button>Send</Button>
    </Content>
    <Footer />
  </Container>
);

