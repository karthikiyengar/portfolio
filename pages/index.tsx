import { NextPage } from "next";
import styled from "styled-components";
import React from "react";
import { Subtitle, Section, Layout, Content } from "../components/styled";
import { ArticlesList, Companies, Header } from "../components";
import { Blog, getPosts } from "./api/blog";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const Link = styled.a`
  all: unset;
`;

const IconsContainer = styled.div`
  margin: 20px 0;
  svg,
  img {
    margin-right: 20px;
    cursor: pointer;
  }
`;

export async function getStaticProps() {
  const blogs = getPosts();
  return {
    props: {
      blogs,
    }, // will be passed to the page component as props
  };
}

interface Props {
  blogs: Blog[];
}

const Home: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Header />
      <h1>Hi, I'm Karthik! 👋</h1>
      <Subtitle>
        I’m a full-stack developer who likes open source and functional
        programming
      </Subtitle>
      <IconsContainer>
        <Link href="https://github.com/karthikiyengar/" target="_blank">
          <FiGithub size={25} />
        </Link>
        <Link href="mailto:hello@kiyengar.net">
          <FiMail size={25} />
        </Link>
        <Link href="https://twitter.com/karthik_i" target="_blank">
          <FiTwitter size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/karthik-iyengar-22446176/"
          target="_blank"
        >
          <FiLinkedin size={25} />
        </Link>
        <Link href="https://medium.com/@karthikiyengar" target="_blank">
          <img src="/static/icons/medium.svg" height="25" />
        </Link>
      </IconsContainer>
      <Content>
        <Section>ARTICLES</Section>
        <ArticlesList data={props.blogs} />
        <Section>I'VE WORKED WITH</Section>
        <Companies />
      </Content>
    </Layout>
  );
};

export default Home;
