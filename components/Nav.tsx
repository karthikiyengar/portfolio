import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { portfolio } from "../data/portfolio";
import { useRouter } from "next/router";

const Container = styled.nav`
  text-align: center;
  padding: 40px 0;
  &:before {
    content: "";
    background: url(/static/utils/separator.png);
    width: 100%;
    height: 1px;
    display: block;
  }
  &:after {
    content: "";
    background: url(/static/utils/separator.png);
    width: 100%;
    height: 1px;
    display: block;
  }
  svg {
    margin: 0 40px;
    font-size: 2em;
  }
`;

const IconContainer = styled.div`
  padding: 10px 0;
`;

const IconBack = styled(MdArrowBack)<{ visible: boolean }>`
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "initial" : "hidden")};
`;

const IconForward = styled(MdArrowForward)<{ visible: boolean }>`
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "initial" : "hidden")};
`;

const IconMenuWithCursor = styled(MdMenu)`
  cursor: pointer;
`;

const Nav: React.FC<{ slug: string | string[] }> = ({ slug }) => {
  const currentIndex = portfolio.findIndex((item) => item.slug === slug);
  if (currentIndex === -1) {
    return <></>;
  }

  const previousSlug = portfolio[currentIndex - 1]?.slug;
  const nextSlug = portfolio[currentIndex + 1]?.slug;

  return (
    <Container>
      <IconContainer>
        <Link href={`/portfolio/[slug]`} as={`/portfolio/${previousSlug}`}>
          <IconBack visible={!!previousSlug} />
        </Link>
        <Link href={`/companies/freelance`}>
          <IconMenuWithCursor />
        </Link>
        <Link href={`/portfolio/[slug]`} as={`/portfolio/${nextSlug}`}>
          <IconForward visible={!!nextSlug} />
        </Link>
      </IconContainer>
    </Container>
  );
};

export default Nav;
