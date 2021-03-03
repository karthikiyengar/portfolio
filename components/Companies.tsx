
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { media, ZoomableImage } from "./styled";

type Data = {
  title: string;
  image: string;
  link: string;
};

type Props = {
  data: Array<Data>;
};

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

const Companies = (
  {
    data
  }: Props
) => <Container>
    {data.map(company => <Link href={company.link} key={company.title}>
        <ZoomableImage src={company.image} />
      </Link>)}
  </Container>;

export default Companies;