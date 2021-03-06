import * as React from "react";
import styled from "styled-components";
import { Blog } from "../pages/api/blog";
import Link from "next/link";
import format from "date-fns/format";
import { media } from "./styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${media.handheld`
    grid-template-columns: 1fr;
  `}
  grid-gap: 20px;
  margin: 20px 0;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Meta = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const Middot = styled.span`
  &:after {
    content: "·";
    font-size: 20px;
    margin: 0 5px;
  }
`;

const MetaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
`;

const H2 = styled.h2`
  font-weight: normal;
`;

interface Props {
  data: Blog[];
}
const Component: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.data.map((blog) => {
        return (
          <Link key={blog.slug} href={`blog/${blog.slug}`}>
            <Card>
              <H2>{blog.title}</H2>
              <DescriptionContainer>
                <p>{blog.description}</p>
              </DescriptionContainer>

              <MetaContainer>
                <Meta>{format(new Date(blog.date), "dd MMM yyyy")}</Meta>
                <Middot />
                <Meta>{blog.readingTime.text}</Meta>
              </MetaContainer>
            </Card>
          </Link>
        );
      })}
    </Container>
  );
};

export default Component;