import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import {
  Layout,
  Content,
  Description,
  VisitButton,
} from "../components/styled";
import { Header } from "../components";

const Spacer = styled.div`
  margin: 15px 0;
`;

const Image = styled.img`
  width: 200px;
  margin: 20px auto;
  height: 200px;
`;

interface Props {
  slug: string | string[];
}

const About: NextPage<Props> = () => {
  return (
    <>
      <Header />
      <Layout>
        <Content>
          <Image src="/static/me.jpg" />
          <Description>
            Hi! I'm Karthik Iyengar. I'm a Software Engineer from Mumbai,
            currently residing in Berlin. I love building things and I enjoy
            converting ideas into products. I particularly like reasoning about
            the user's journey and figuring out ways to make the Software
            Development life cycle more efficient.
            <Spacer />
            Topics that I'm passionate about:
            <ul>
              <li>Linux</li>
              <li>Data Privacy</li>
              <li>Developer Experience</li>
              <li>Engineering Culture</li>
              <li>Financial Technology</li>
              <li>Open Source</li>
              <li>Functional Programming</li>
            </ul>
            <Spacer />
            In my free time, I like listening to and playing music, reading and
            doing yoga. I also like bad puns, feel free to hit me with your
            worst.
          </Description>
          <VisitButton
            href={"mailto:hello@kiyengar.net"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email
          </VisitButton>
        </Content>
      </Layout>
    </>
  );
};

export default About;
