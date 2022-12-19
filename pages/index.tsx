import { NextPage } from "next";
import styled from "styled-components";
import React from "react";
import { FiMedium } from "../components/icons/FiMedium";
import { FiCodewars } from "../components/icons/FiCodewars";
import { Subtitle, Section, Layout, Content } from "../components/styled";
import { ArticlesList, Companies, Header } from "../components";
import { Blog, getPosts } from "./api/blog";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { RiMastodonLine } from "react-icons/ri"
import { description } from "../data/home";

const Link = styled.a`
  all: unset;
`;

const IconsContainer = styled.div`
  margin: 20px 0;
  svg,
  img {
    height: 25px;
    width: 25px;
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
    <>
      <Header />
      <Layout>
        <h1>Hi, I'm Karthik! 👋</h1>
        <Subtitle>{description}</Subtitle>
        <IconsContainer>
          <Link href="https://github.com/karthikiyengar/" target="_blank">
            <FiGithub />
          </Link>
          <Link href="mailto:hello@kiyengar.net">
            <FiMail />
          </Link>
          <Link href="https://fosstodon.org/@kiyengar" target="_blank">
            <RiMastodonLine />
          </Link>
          <Link href="https://twitter.com/karthik_i" target="_blank">
            <FiTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/karthik-iyengar-22446176/"
            target="_blank"
          >
            <FiLinkedin />
          </Link>
          <Link href="https://medium.com/@karthikiyengar" target="_blank">
            <FiMedium />
          </Link>
          <Link
            href="https://www.codewars.com/users/karthikiyengar/"
            target="_blank"
          >
            <FiCodewars />
          </Link>
        </IconsContainer>
        <Content>
          <Section>ARTICLES</Section>
          <ArticlesList data={props.blogs} />
          {/* <Section>I'VE WORKED WITH</Section> */}
          {/* <Companies /> */}
        </Content>
      </Layout>
    </>
  );
};

export default Home;
