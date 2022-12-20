import { GetStaticProps, NextPage } from "next";
import React, { useEffect, useRef } from "react";
import matter, { GrayMatterFile } from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Layout } from "../../components/styled";
import { HeadingRenderer } from "../../components/HeadingRenderer";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import styled from "styled-components";
import { vscDarkPlus as codeTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getPosts } from "../api/blog";
import markdownToHtml from "../../lib/markdownToHtml";

interface Success extends GrayMatterFile<any> {
  isError: false;
  slug: string | string[] | undefined;
}

interface Error {
  isError: true;
  slug: string | string[] | undefined;
}

type Props = Success | Error;

const EditContainer = styled.div`
  margin: 18px 0;
`;

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

export async function getStaticPaths() {
  const blogs = getPosts();
  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug ?? null;
  try {
    const raw = await import(`../../_posts/${slug}.md`);
    const { data, content } = matter(raw.default)
    return {
      props: {
        isError: false,
        content: await markdownToHtml(content || ''),
        data,
        slug
      }
    };
  } catch {
    return {
      props: {
        isError: true,
        slug
      }
    };
  }
};

const PostTemplate: NextPage<Props> = (props) => {
  const router = useRouter();

  const commentBoxRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (props.isError) {
      router.push("/404");
    }
  }, []);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.async = true;
    scriptEl.setAttribute("repo", "karthikiyengar/portfolio");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("label", "utterances");

    if (commentBoxRef.current) {
      commentBoxRef.current.appendChild(scriptEl);
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

          {props.slug && (
            <EditContainer>
              <a
                href={`https://github.com/karthikiyengar/portfolio/tree/main/_posts/${props.slug}.md`}
                target="_blank"
              >
                Edit on Github
              </a>
            </EditContainer>
          )}

          <div ref={commentBoxRef} />
        </Layout>
      </>
    );
  }

  return <></>;
};


export default PostTemplate;
