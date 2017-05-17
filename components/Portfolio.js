// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from './styled';
import Link from 'next/link';

type Data = {
  title: string,
  image: string,
  link: string
}

type Props = {
  data: Array<Data>
}

const appear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;


const Container = styled.div`
  display: flex;
  margin: 40px 0;
  flex-wrap: wrap;
`;

const Item = styled.div`
  height: auto;
  width: 17.3%;
  border: 1px solid lightgray;
  margin-bottom: 15px;
  margin-right: 25px;
  border-radius: 5px;
  opacity: 0;
  display: flex;
  align-items: center;
  animation-name: ${appear};
  animation-duration: 250ms;
  animation-delay: ${props => props.index * 50}ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  justify-content: center;

  ${ media.handheld`
    width: 40%;
  `}

  &:before {
    content: "";
    display: block;
    padding-top: 100%; 
  }
  &:hover {
    cursor: pointer;
    img {
      transform: scale(1.2);;
    }
  }
`;

const Image = styled.img`
  width: 90%;
  max-height: auto;
  transition: transform 100ms ease-in;
`;

export default ({ data }: Props) => (
  <Container>
    { data.map((item, index) => (
      <Link href={item.link} key={item.title}>
        <Item index={index}>
          <Image src={item.image} alt={item.title} />
        </Item>
      </Link>
      ))}
  </Container>
);
