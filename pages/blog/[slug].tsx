import { NextPage } from "next";
import React, { useEffect } from "react";
import matter, { GrayMatterFile } from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Layout } from "../../components/styled";
import { HeadingRenderer } from "../../components/HeadingRenderer";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import styled from "styled-components";
import { vscDarkPlus as codeTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Success extends GrayMatterFile<any> {
  isError: false;
}

interface Error {
  isError: true;
}

type Props = Success | Error;

const BlogContainer = styled.div`
  line-height: 1.7;
`;

const renderers = {
  heading: HeadingRenderer,
  code: ({ language, value }: any) => {
    return (
      <SyntaxHighlighter
        language={language}
        children={value}
        style={codeTheme}
      />
    );
  },
};

const PostTemplate: NextPage<Props> = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (props.isError) {
      router.push("/404");
    }
  }, []);

  if (!props.isError) {
    const { data, content } = props;
    return (
      <>
        <Header />
        <Layout>
          <h1>{data.title}</h1>
          <BlogContainer>
            <ReactMarkdown
              renderers={renderers}
              source={content}
              allowDangerousHtml
            />
          </BlogContainer>
        </Layout>
      </>
    );
  }

  return <></>;
};

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  try {
    const content = await import(`../../_posts/${slug}.md`);
    const data = matter(content.default);
    return { isError: false, ...data };
  } catch {
    return { isError: true };
  }
};

export default PostTemplate;
