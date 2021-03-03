import styled from "styled-components";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import superagent from "superagent";
import validator from "validator";
import {
  Row,
  Textarea,
  Input,
  Subtitle,
  Section,
  Layout,
  Content,
  Button,
  P,
  Error,
  Message,
  media,
} from "../components/styled";
import {
  OtherWork,
  ArticlesList,
  Portfolio,
  Companies,
  Footer,
  Header,
} from "../components";
import { getPosts } from "./api/blog";

type State = {
  name: string;
  email: string;
  message: string;
  captcha: string;
  formError: string;
  formMessage: string;
  errors: {
    name: boolean | string;
    email: boolean | string;
    message: boolean | string;
    captcha: boolean | string;
  };
};

export async function getStaticProps(context) {
  const blogs = getPosts();
  return {
    props: {
      blogs,
    }, // will be passed to the page component as props
  };
}

const H2 = styled.h2`
  font-weight: normal;
  margin: 5px 0 10px 0;
`;

export const portfolio = [
  {
    title: "Threatbar",
    image: "/static/threatbar.png",
    link: "/portfolio/threatbar",
  },
  {
    title: "Supertax",
    image: "/static/supertax.png",
    link: "/portfolio/supertax",
  },
  {
    title: "Lyra",
    image: "/static/lyra.png",
    link: "/portfolio/lyra",
  },
  {
    title: "Acquire",
    image: "/static/acquire.png",
    link: "/portfolio/acquire",
  },
  {
    title: "Fundpundit",
    image: "/static/fundpundit.png",
    link: "/portfolio/fundpundit",
  },
  {
    title: "Brewfer",
    image: "/static/brewfer.png",
    link: "/portfolio/brewfer",
  },
  {
    title: "Prolite",
    image: "/static/prolite.png",
    link: "/portfolio/prolite",
  },
  {
    title: "Yuva Parivartan",
    image: "/static/yuva-parivartan.png",
    link: "/portfolio/yuva-parivartan",
  },
  {
    title: "Qrypt",
    image: "/static/qrypt.png",
    link: "/portfolio/qrypt",
  },
  {
    title: "Automator",
    image: "/static/automator.png",
    link: "/portfolio/automator",
  },
];

const otherWork = [
  {
    title: "Github",
    image: "/static/work/github.png",
    link: "https://github.com/karthikiyengar",
  },
  {
    title: "Medium",
    image: "/static/work/medium.png",
    link: "https://medium.com/@karthikiyengar",
  },
  {
    title: "Codewars",
    image: "/static/work/codewars.png",
    link: "https://www.codewars.com/users/karthikiyengar",
  },
];

const companies = [
  {
    title: "Spotcap",
    image: "/static/spotcap.png",
    link: "/companies/spotcap",
  },
  {
    title: "Paper Plane",
    image: "/static/paperplane.png",
    link: "/companies/paperplane",
  },
  {
    title: "Novanet",
    image: "/static/novanet.png",
    link: "/companies/novanet",
  },
  {
    title: "Indus Valley Partners",
    image: "/static/ivp.png",
    link: "/companies/ivp",
  },
];

const initialState = {
  name: "",
  message: "",
  email: "",
  captcha: "",
  errors: {
    name: true,
    message: true,
    email: true,
    captcha: true,
  },
  formError: "",
  formMessage: "",
};

export default class Home extends React.Component<any, any, State> {
  state = {
    ...initialState,
  };

  setError = (object: any) => {
    this.setState({
      errors: {
        ...this.state.errors,
        ...object,
      },
    });
  };

  isFormValid = () =>
    Object.keys(this.state.errors).every(
      (item) => this.state.errors[item] === false
    );

  handleNameChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ name: "This field is required" });
    } else if (
      !validator.isLength(value, {
        min: 3,
        max: 30,
      })
    ) {
      this.setError({
        name: "This field should be between 3 to 30 characters",
      });
    } else {
      this.setError({ name: false });
    }
    this.setState({ name: value });
  };

  handleMessageChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ message: "This field is required" });
    } else if (
      !validator.isLength(value, {
        min: 3,
        max: 300,
      })
    ) {
      this.setError({
        message: "This field should be between 3 to 300 characters",
      });
    } else {
      this.setError({ message: false });
    }
    this.setState({ message: target.value });
  };

  handleEmailChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (validator.isEmpty(value)) {
      this.setError({ email: "This field is required" });
    } else if (!validator.isEmail(value)) {
      this.setError({ email: "Invalid Email Address" });
    } else {
      this.setError({ email: false });
    }
    this.setState({ email: value });
  };

  handleCaptchaChange = (value: string) => {
    this.setError({ captcha: false });
    this.setState({ captcha: value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    superagent
      .post("/api/message")
      .send({
        name: this.state.name,
        message: this.state.message,
        email: this.state.email,
        captcha: this.state.captcha,
      })
      .end((err) => {
        (this.recaptcha as any).reset();
        if (err) {
          this.setState({
            formError:
              "Unfortunately, your message cannot be delivered. Please try again later.",
          });
        } else {
          this.setState(initialState);
          this.setState({ formMessage: "Thank you for your message" });
          setTimeout(() => {
            this.setState({ formMessage: "" });
          }, 3000);
        }
      });
  };

  recaptcha: string;

  render() {
    return (
      <Layout>
        <Header />
        <Subtitle>
          I’m a full-stack developer who likes open source and functional
          programming
        </Subtitle>
        <Content>
          <Section>ARTICLES</Section>
          <ArticlesList data={this.props.blogs} />
          <Section>PORTFOLIO</Section>
          <Portfolio data={portfolio} />
          <Section>I’VE WORKED WITH</Section>
          <Companies data={companies} />
          <Section>OTHER WORK</Section>
          <OtherWork data={otherWork} />
          <Section>GET IN TOUCH</Section>
          <H2>
            Hello there! Let’s talk to understand how I can help you. You can
            leave me a short message and I’ll get back to you as soon as I can.
          </H2>
          <form onSubmit={this.handleSubmit}>
            <Row>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={this.handleNameChange}
                value={this.state.name}
                error={typeof this.state.errors.name === "string"}
              />
              <Error>{this.state.errors.name}</Error>
            </Row>
            <Row>
              <Input
                type="text"
                name="email"
                placeholder="Your Email Address"
                onChange={this.handleEmailChange}
                value={this.state.email}
                error={typeof this.state.errors.email === "string"}
              />
              <Error>{this.state.errors.email}</Error>
            </Row>
            <Row>
              <Textarea
                type="text"
                name="message"
                placeholder="Message"
                rows={10}
                onChange={this.handleMessageChange}
                value={this.state.message}
                error={typeof this.state.errors.message === "string"}
              />
              <Error>{this.state.errors.message}</Error>
            </Row>
            <ReCAPTCHA
              ref={(r) => {
                this.recaptcha = r;
              }}
              sitekey="6LfSgSEUAAAAAEWLKRlaKBg-jC6WIDfFRqaso05L"
              onChange={this.handleCaptchaChange}
            />
            {this.state.formError && <Error>{this.state.formError}</Error>}
            {this.state.formMessage && (
              <Message>{this.state.formMessage}</Message>
            )}
            <Button type="submit" disabled={!this.isFormValid()}>
              Send
            </Button>
          </form>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
