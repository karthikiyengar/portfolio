import React from "react";
import { NextPage } from "next";
import Portfolio from "../../../components/Portfolio";
import styled from "styled-components";
import { Layout, Content, Description, Section } from "../../../components/styled";
import { Header, Meta } from "../../../components";
import { companies } from "../../../data/companies";

const Spacer = styled.div`
  margin: 15px 0;
`;
interface Props {
  slug: string | string[];
}

const Freelance: NextPage<Props> = (_props) => {
  const company = companies.find((item) => item.slug === "freelance");

  return (
    <>
      <Header />
      <Layout>
        {company && (
          <Content>
            <Meta
              role={company.role}
              context={company.context || "Unknown"}
              date={company.tenure}
              platforms={[]}
            />
            <Description>
              In my tenure as a freelance developer and consultant, I worked
              with multiple companies ranging from startups to well-established
              software companies to help them achieve their goals. Some of my
              responsibilities included end-to-end development ranging from
              prototypes to enterprise systems, process and workflow consulting,
              and technology consulting to help companies modernise and scale
              their products.
            </Description>
            <Spacer>
              <Section>Project Showcase</Section>
            </Spacer>
            <Portfolio />
          </Content>
        )}
      </Layout>
    </>
  );
};

export default Freelance;
