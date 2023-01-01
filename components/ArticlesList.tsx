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

const H4 = styled.h4`
  margin: 5px 0 10px 0;

  a {
    text-decoration: none;
  }
  a:hover {
    color: hotpink;
  }
`;

interface Props {
  data: Blog[];
}
const Component: React.FC<Props> = (props) => {
  return (
    <Container>
      {props.data.map((blog) => {
        return (
          <Card>
            <H4><Link key={blog.slug} href={`blog/${blog.slug}`} legacyBehavior>{blog.title}</Link></H4>
            <DescriptionContainer>{blog.description}</DescriptionContainer>
            <MetaContainer>
              <Meta>{format(new Date(blog.date), "dd MMM yyyy")}</Meta>
              <Middot />
              <Meta>{blog.readingTime.text}</Meta>
            </MetaContainer>
          </Card>
        );
      })}
    </Container>
  );
};

export default Component;
