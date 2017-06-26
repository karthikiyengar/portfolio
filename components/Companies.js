// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { media } from './styled';

type Data = {
  title: string,
  image: string,
  link: string
}

type Props = {
  data: Array<Data>
}

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
  `}
`;

const Image = styled.img`
  margin-right: 40px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 100ms ease-in;
  ${media.tablet`
    margin-bottom: 10px;
  `};
  &:hover {
    opacity: 1;
    cursor: pointer;
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

// {/*<a href={company.link} key={company.title} rel="noopener noreferrer" target="_blank">*/}
export default ({ data }: Props) => (
  <Container>
    { data.map(company => (
      <Link href={company.link} key={company.title} >
        <Image src={company.image} />
      </Link>
    ))}
  </Container>
);
