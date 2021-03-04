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
          <Section>EXPERIENCE</Section>
          <Companies />
        </Content>
      </Layout>
    );
  }
}
