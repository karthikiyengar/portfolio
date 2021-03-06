import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Portfolio from "../../components/Portfolio";
import styled from "styled-components";
import {
  Layout,
  Content,
  Description,
  VisitButton,
  P,
} from "../../components/styled";
import { Header, Tools, Meta } from "../../components";
import { companies, Company } from "../../data/companies";

const Image = styled.img`
  width: auto;
  max-height: 150px;
`;

const Wrapper = styled.div`
  min-width: 0;
  display: flex;
  justify-content: center;
  margin: 15px auto;
`;

interface Props {
  slug: string | string[];
}

const Freelance: NextPage<Props> = (props) => {
  const company = companies.find((item) => item.slug === "freelance");

  return (
    <Layout>
      <Header />
      {company && (
        <Content>
          <Meta
            role={company.role}
            context={company.context || "Unknown"}
            date={company.tenure}
            platforms={company.platforms ?? []}
          />
          <Description>
            In my tenure as a freelance developer and consultant, I worked with
            multiple companies ranging from startups to well-established
            software companies to help them achieve their goals. Some of my
            responsibilities included end-to-end development ranging from
            prototypes to enterprise systems, process and workflow consulting,
            and technology consulting to help companies modernise and scale
            their products.
          </Description>
          <Portfolio />
          <Tools data={company.tools ?? []} />
        </Content>
      )}
    </Layout>
  );
};

export default Freelance;
