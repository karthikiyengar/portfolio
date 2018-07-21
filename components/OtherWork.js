// @flow
import React from "react";
import styled from "styled-components";
import { media, ZoomableImage } from "./styled";

type Data = {
  title: string,
  image: string,
  link: string
};

type Props = {
  data: Array<Data>
};

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
  display: inline;
  margin-right: 15px;
  svg {
    font-size: 1.5em;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 40px 0;
  flex-wrap: wrap;
  ${media.tablet`
    justify-content: center;
  `};
  ${media.handheld`
    justify-content: center;
    flex-wrap: wrap;
  `};
`;

export default ({ data }: Props) => (
  <Container>
    {data.map(item => (
      <Link
        href={item.link}
        key={item.title}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ZoomableImage src={item.image} />
      </Link>
    ))}
  </Container>
);
