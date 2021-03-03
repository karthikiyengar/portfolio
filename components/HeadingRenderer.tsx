import React from "react";
import styled from "styled-components";
import slugify from "slugify";
import { media } from "./styled";

const AnchorIcon = styled.img`
  display: none;
  ${media.desktop`
    position: absolute;
    left: -55px;
    cursor: pointer;
    top: 50%;
    padding: 30px;
    transform: translateY(-50%);
    display: initial;
  `}
`;

const HeadingContainer = styled.div`
  position: relative;
  display: flex;
`;

const flatten = (text: string, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
const HeadingRenderer = (props) => {
  const [showAnchor, setShowAnchor] = React.useState<boolean>(false);
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = slugify(text, { lower: true });
  const handleAnchorClick = () => {
    window.location.hash = slug;
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <HeadingContainer
      onMouseEnter={() => {
        setShowAnchor(true);
      }}
      onMouseLeave={() => {
        setShowAnchor(false);
      }}
    >
      {showAnchor && (
        <AnchorIcon
          onClick={handleAnchorClick}
          src="/static/icons/anchor.svg"
        />
      )}
      {React.createElement("h" + props.level, { id: slug }, props.children)}
    </HeadingContainer>
  );
};

export { HeadingRenderer };
