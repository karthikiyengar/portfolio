/* global SyntheticInputEvent */
// @flow

import React from 'react';
import { injectGlobal } from 'styled-components';
import { Row, Textarea, Input, Subtitle, Section, Container, Content, Button, P, Error, Message, media } from '../components/styled';
import { Portfolio, Services, Companies, Footer, Header } from '../components';
import ReCAPTCHA from 'react-google-recaptcha';
import superagent from 'superagent';
import validator from 'validator';

type State = {
  name: string,
  email: string,
  message: string,
  captcha: string,
  formError: string,
  formMessage: string,
  errors: {
    name: boolean | string,
    email: boolean | string,
    message: boolean | string,
    captcha: boolean | string,
  }
};


injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  strong {
    font-family: 'Montserrat'
  }
  body {
    margin: 0;
    ${media.handheld`
      font-size: small;
    `}
  }
`;

export const portfolio = [{
  title: 'Threatbar',
  image: '/static/threatbar.png',
  link: '/portfolio/threatbar',
}, {
  title: 'Supertax',
  image: '/static/supertax.png',
  link: '/portfolio/supertax',
}, {
  title: 'Muse',
  image: '/static/muse.png',
  link: '/portfolio/muse',
}, {
  title: 'Acquire',
  image: '/static/acquire.png',
  link: '/portfolio/acquire',
}, {
  title: 'Fundpundit',
  image: '/static/fundpundit.png',
  link: '/portfolio/fundpundit',
}, {
  title: 'Brewfer',
  image: '/static/brewfer.png',
  link: '/portfolio/brewfer',
}, {
  title: 'Prolite',
  image: '/static/prolite.png',
  link: '/portfolio/prolite',
}, {
  title: 'Yuva Parivartan',
  image: '/static/yuva-parivartan.png',
  link: '/portfolio/yuva-parivartan',
}, {
  title: 'Qrypt',
  image: '/static/qrypt.png',
  link: '/portfolio/qrypt',
}, {
  title: 'Automator',
  image: '/static/automator.png',
  link: '/portfolio/automator',
}];

const companies = [{
  title: 'Paper Plane',
  image: '/static/paperplane.png',
  link: '/companies/paperplane',
}, {
  title: 'Novanet',
  image: '/static/novanet.png',
  link: '/companies/novanet',
}, {
  title: 'Indus Valley Partners',
  image: '/static/ivp.png',
  link: '/companies/ivp',
}];

const initialState = {
  name: '',
  message: '',
  email: '',
  captcha: '',
  errors: {
    name: true,
    message: true,
    email: true,
    captcha: true,
  },
  formError: '',
  formMessage: '',
};

export default class Home extends React.Component<any, any, State> {
  state = { ...initialState };

  setError = (object: any) => {
    this.setState({
      errors: {
        ...this.state.errors,
        ...object,
      },
    });
  }

  isFormValid = () => Object.keys(this.state.errors).every(item => this.state.errors[item] === false)


  handleNameChange = ({ target }: SyntheticInputEvent) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ name: 'This field is required' });
    } else if (!validator.isLength(value, { min: 3, max: 30 })) {
      this.setError({ name: 'This field should be between 3 to 30 characters' });
    } else {
      this.setError({ name: false });
    }
    this.setState({
      name: value,
    });
  }

  handleMessageChange = ({ target }: SyntheticInputEvent) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ message: 'This field is required' });
    } else if (!validator.isLength(value, { min: 3, max: 300 })) {
      this.setError({ message: 'This field should be between 3 to 300 characters' });
    } else {
      this.setError({ message: false });
    }
    this.setState({
      message: target.value,
    });
  }

  handleEmailChange = ({ target }: SyntheticInputEvent) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ email: 'This field is required' });
    } else if (!validator.isEmail(value)) {
      this.setError({ email: 'Invalid Email Address' });
    } else {
      this.setError({ email: false });
    }
    this.setState({
      email: value,
    });
  }

  handleCaptchaChange = (value: string) => {
    this.setError({ captcha: false });
    this.setState({
      captcha: value,
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    superagent.post('/api/message')
      .send({
        name: this.state.name,
        message: this.state.message,
        email: this.state.email,
        captcha: this.state.captcha,
      })
      .end((err) => {
        this.recaptcha.reset();
        if (err) {
          this.setState({ formError: 'Unfortunately, your message cannot be delivered. Please try again later.' });
        } else {
          this.setState(initialState);
          this.setState({ formMessage: 'Thank you for your message' });
          setTimeout(() => {
            this.setState({ formMessage: '' });
          }, 3000);
        }
      });
  }

  recaptcha : string;

  render() {
    return (
      <Container>
        <Header />
        <Subtitle>I’m a full stack developer and technical consultant and I help you convert your ideas into products</Subtitle>
        <Content>
          {/* <Services /> */}
          <Section>PORTFOLIO</Section>
          <Portfolio data={portfolio} />
          <Section>I’VE WORKED WITH</Section>
          <Companies data={companies} />
          <Section>GET IN TOUCH</Section>
          <Row>
            <P>Hello there! Let’s talk to understand how I can help you. You can leave me a short message and I’ll get back to you as soon as I can.</P>
          </Row>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input type="text" name="name" placeholder="Your Name" onChange={this.handleNameChange} value={this.state.name} error={typeof this.state.errors.name === 'string'} />
              <Error>{ this.state.errors.name }</Error>
            </Row>
            <Row>
              <Input type="text" name="email" placeholder="Your Email Address" onChange={this.handleEmailChange} value={this.state.email} error={typeof this.state.errors.email === 'string'} />
              <Error>{ this.state.errors.email }</Error>
            </Row>
            <Row>
              <Textarea type="text" name="message" placeholder="Message" rows={10} onChange={this.handleMessageChange} value={this.state.message} error={typeof this.state.errors.message === 'string'} />
              <Error>{ this.state.errors.message }</Error>
            </Row>
            <ReCAPTCHA ref={(r) => { this.recaptcha = r; }} sitekey="6LfSgSEUAAAAAEWLKRlaKBg-jC6WIDfFRqaso05L" onChange={this.handleCaptchaChange} />
            { this.state.formError && <Error>{this.state.formError}</Error> }
            { this.state.formMessage && <Message>{this.state.formMessage}</Message> }
            <Button type="submit" disabled={!this.isFormValid()}>Send</Button>
          </form>
        </Content>
        <Footer />
      </Container>
    );
  }
}

