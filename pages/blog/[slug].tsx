import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Layout } from "../../components/styled";
import { HeadingRenderer } from "./HeadingRenderer";
import Header from "../../components/Header";

const renderers = {
  heading: HeadingRenderer,
  code: ({ language, value }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
};

export default function PostTemplate({ content, data }) {
  const frontmatter = data;

  return (
    <Layout>
      <Header />
      <h1>{frontmatter.title}</h1>
      <ReactMarkdown
        renderers={renderers}
        source={content}
        allowDangerousHtml
      />
    </Layout>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../_posts/${slug}`);
  const data = matter(content.default);

  return { ...data };
};
