// @flow
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
`;

const Image = styled.img`
  margin-right: 40px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 100ms ease-in;
  &:hover {
    opacity: 1;
    cursor: pointer;
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

export default ({ data }: Props) => (
  <Container>
    { data.map(company => (
      <Link href={company.link} key={company.title} >
        <Image src={company.image} />
      </Link>
    ))}
  </Container>
);
