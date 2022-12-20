import { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";
import {
  Layout,
  VisitButton,
  Content,
  Description,
  ImageContainer,
} from "../../components/styled";
import ReactMarkdown from "react-markdown";
import { Header, Tools, Meta, Nav } from "../../components";
import { portfolio } from "../../data/portfolio";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GlobalImageGalleryStyle = createGlobalStyle`
    .image-gallery-image {
      height: 500px !important;
    }
`;

const P = styled.p`
  font-size: 17px;
  text-align: center;
`;

const Spacer = styled.div`
  margin: 20px auto;
`;

interface Props {
  slug: string | string[];
}

const ProjectTemplate: NextPage<Props> = (props) => {
  const router = useRouter();
  const [project, setProject] = useState<typeof portfolio[0]>();
  const { slug } = props;

  useEffect(() => {
    if (slug) {
      const current = portfolio.find((item) => item.slug === slug);
      if (current) {
        setProject(current);
      } else {
        router.replace("/404");
      }
    }
  }, [slug]);

  return (
    <>
      <Header />
      <Layout>
        <GlobalImageGalleryStyle />
        {project && (
          <Content>
            <P>{project.companyDescription}</P>
            <Meta
              role={project.role}
              context="Freelance"
              date={project.date}
              platforms="Web"
            />
            <ReactMarkdown>{project.projectDescription}</ReactMarkdown>
            <Spacer />
            <ImageGallery
              showThumbnails={false}
              showFullscreenButton={false}
              items={project.images.map((image) => ({
                original: image,
                height: "50",
              }))}
            />
            {project.companyUrl && (
              <VisitButton
                href={project.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </VisitButton>
            )}
            <Tools data={project.tools} />
          </Content>
        )}
        <Nav slug={slug} />
      </Layout>
    </>
  );
};


// Refactor this into getStaticProps and getStaticPaths if you want to expose it
ProjectTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  return { slug } as Props;
};

export default ProjectTemplate;
