import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Layout,
  Content,
  Description,
  VisitButton,
  P,
} from "../../components/styled";
import { Header, Footer, Tools, Meta } from "../../components";
import { useRouter } from "next/router";
import { companies, Company } from "../../data/companies";

const Image = styled.img`
  width: auto;
  max-height: 425px;
`;

const Wrapper = styled.div`
  min-width: 0;
  display: flex;
  justify-content: center;
  margin: 15px auto;
`;

const CompanyTemplate: React.FC = (props) => {
  const router = useRouter();
  const [company, setCompany] = useState<Company | undefined>();
  const { slug } = router.query;

  useEffect(() => {
    const current = companies.find((item) => item.slug === slug);
    if (current) {
      setCompany(current);
    } else {
      router.replace("/404");
    }
  }, []);

  return (
    <Layout>
      <Header />
      {company && (
        <Content>
          <P>{company.companyDescription}</P>
          <Meta
            role={company.role}
            context={company.context}
            date={company.tenure}
            platforms={company.platforms}
          />
          <Wrapper>
            <Image src={company.image} />
          </Wrapper>
          <Description>{company.roleDescription}</Description>
          <VisitButton
            href={company.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </VisitButton>
          <Tools data={company.tools} />
        </Content>
      )}
    </Layout>
  );
};

export default CompanyTemplate;
