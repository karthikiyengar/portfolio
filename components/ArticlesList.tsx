import * as React from "react";
import styled from "styled-components";
import { Blog } from "../pages/api/blog";
import Link from "next/link";
import format from "date-fns/format";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 15px 0px;
  border-bottom: 1px solid lightgray;
  :last-child {
    border-bottom: 0;
  }
`;

const Meta = styled.span`
  font-size: 12px;
  font-style: italic;
`;

const Middot = styled.span`
  &:after {
    content: "·";
    font-size: 20px;
    margin: 0 5px;
  }
`;

const MetaContainer = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
`;

const H3 = styled.h3`
  margin: 5px 0 10px 0;
`;

interface Props {
  data: Blog[];
}
const Component: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.data.map((blog) => {
        return (
          <Link key={blog.slug} href={`blog/${blog.slug}`} legacyBehavior>
            <Card>
              <H3>{blog.title}</H3>
              <DescriptionContainer>{blog.description}</DescriptionContainer>
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
