import styled, { css, createGlobalStyle } from "styled-components";
import NextLink from "next/link";

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
};

export const Subtitle = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 25px 0;
`;

export const Section = styled.p`
  font-family: sans-serif;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: bold;
  margin: 12px 0;
  ${media.handheld`
    margin: 10px 0;
  `};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  width: 100%;
  ${media.handheld`
    justify-content: center;
  `}
  img {
    ${media.handheld`
      max-width: 90%;
      max-height: 300px;
      margin: 15px;
    `};
  }
`;

export const Layout = styled.div`
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 10px 15px;
`;

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
`;

export const Input = styled.input`
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  font-size: 1em;
  outline: none;
  border-color: ${(props) => (props.error ? "red" : "lightgray")};
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border-color: ${(props) => (props.error ? "red" : "darkgray")};
  }
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border-style: solid;
  font-size: 1em;
  outline: none;
  border-width: 1px;
  border-color: ${(props) => (props.error ? "red" : "lightgray")};
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border-color: ${(props) => (props.error ? "red" : "darkgray")};
  }
  width: 100%;
`;

export const Row = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px;
  min-width: 250px;
  margin: 15px 0;
  font-size: 1em;
  background: lightgray;
  border: 0;
  transition: all 0.2s linear;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover:enabled {
    background: darkgray;
    color: white;
  }
`;

export const VisitButton = styled.a`
  padding: 12px;
  width: 250px;
  margin: 25px 0;
  color: inherit;
  text-decoration: inherit;
  display: inline;
  text-align: center;
  background: rgb(66, 184, 221);
  border: 0px solid transparent;
  font-size: 1em;
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
`;

export const Error = styled.p`
  margin: 5px 0;
  color: red;
`;

export const Message = styled.p`
  margin: 5px 0;
`;

export const Image = styled.img`
  max-width: 480px;
  height: auto;
  margin-bottom: 25px;
`;

export const Description = styled.div`
  white-space: pre-wrap;
`;

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: inherit;
  display: inline-block;
`;

export const Link: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

export const ZoomableImage = styled.img`
  margin-right: 40px;
  opacity: 0.7;
  filter: grayscale(100%);
  transition: all 100ms ease-in;
  ${media.tablet`
    margin-bottom: 10px;
  `};
  &:hover {
    opacity: 1;
    cursor: pointer;
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  strong {
    font-family: sans-serif;
    font-weight: bold;
  }

  code, code * {
    font-family: monospace;
  }
  code {
    padding: 3px;
    background: #f5f2f0;
    text-shadow: 0 1px white;
  }
  body {
    margin: 0;
    ${media.handheld`
      font-size: small;
    `}
  }
`;
