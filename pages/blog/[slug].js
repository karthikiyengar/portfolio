import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Layout } from "../../components/styled";

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
};

export default function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown renderers={renderers} source={content} />
    </Layout>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../content/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};
