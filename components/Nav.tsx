import React from "react";
import Link from "next/link";
import styled from "styled-components";
import IconMenu from "react-icons/lib/md/apps";
import Back from "react-icons/lib/md/arrow-back";
import Forward from "react-icons/lib/md/arrow-forward";
import { withRouter } from "next/router";
import { portfolio } from "./../pages/index";

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

const IconBack = styled(Back)`
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "initial" : "hidden")};
`;

const IconForward = styled(Forward)`
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "initial" : "hidden")};
`;

const IconMenuWithCursor = styled(IconMenu)`
  cursor: pointer;
`;

type Props = {
  router: {
    pathname: string;
  };
};

class Nav extends React.Component {
  previous: string;
  current: string;
  next: string;

  constructor(props: Props) {
    super(props);
    const currentIndex = portfolio.findIndex(
      (item) => item.link === props.router.pathname
    );
    this.previous = portfolio[currentIndex - 1]
      ? portfolio[currentIndex - 1].link
      : null;
    this.current = portfolio[currentIndex]
      ? portfolio[currentIndex].link
      : null;
    this.next = portfolio[currentIndex + 1]
      ? portfolio[currentIndex + 1].link
      : null;
  }

  render() {
    return (
      <Container>
        <IconContainer>
          <Link href={this.previous || "/"}>
            <IconBack visible={this.previous} />
          </Link>
          <Link href="/">
            <IconMenuWithCursor />
          </Link>
          <Link href={this.next || "/"}>
            <IconForward visible={this.next} />
          </Link>
        </IconContainer>
      </Container>
    );
  }
}

export default withRouter(Nav as any);