import { portfolio } from "../data/portfolio";
import React from "react";
import styled, { keyframes } from "styled-components";
import { media } from "./styled";
import Link from "next/link";

type Data = {
  title: string;
  image: string;
  link: string;
};

type Props = {
  data: Array<Data>;
};

const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const Container = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  ${media.tablet`
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  `}
  ${media.handheld`
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const Item = styled.div<{ index: number }>`
  height: auto;
  border: 1px solid lightgray;
  border-radius: 5px;
  opacity: 0;
  display: flex;
  align-items: center;
  animation-name: ${appear};
  animation-duration: 250ms;
  animation-delay: ${(props) => props.index * 50}ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  justify-content: center;
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);
    }
  }
`;

const Image = styled.img`
  width: 90%;
  max-height: auto;
  transition: transform 100ms ease-in;
`;

const Portfolio = () => (
  <Container>
    {portfolio.map((item, index) => (
      <Link href={`/portfolio/${item.slug}`} key={item.title}>
        <Item index={index}>
          <Image src={item.image} alt={item.title} />
        </Item>
      </Link>
    ))}
  </Container>
);

export default Portfolio;
