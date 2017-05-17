import React from 'react';
import styled from 'styled-components';
import { media } from './styled';
import IconLinkedin from 'react-icons/lib/fa/linkedin';
import IconGithub from 'react-icons/lib/fa/github';
import IconTwitter from 'react-icons/lib/fa/twitter';
import IconPhone from 'react-icons/lib/fa/phone';
import IconEmail from 'react-icons/lib/md/email';



const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  ${media.handheld`
    flex-direction: column;
  `}
`;

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
  display: inline;
  margin-right: 15px;
  svg {
    font-size: 1.5em;
  }
`;

const LinkWithoutMargin = styled(Link)`
  margin-right: 0;
`;

const Image = styled.img`
  vertical-align: middle;
`;


const LinksContainer = styled.div``;
const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.handheld`
    margin-bottom: 10px;
  `}
  svg {
    margin-right: 5px;
    font-size: 1.1em;
    color: darkgray;
  }
  a {
    margin-right: 15px;
  }
`;

const Footer = () => (
  <Container>
    <ContactContainer>
      <IconEmail /><a href="mailto:karthikeyan.iyengar@gmail.com">karthikeyan.iyengar@gmail.com</a>
      <IconPhone /><span>(91) 9987314728</span>
    </ContactContainer>
    <LinksContainer>
      <Link href="https://github.com/karthikiyengar/" target="_blank" rel="noopener noreferrer"><IconGithub /></Link>
      <Link href="https://twitter.com/karthik_i" target="_blank" rel="noopener noreferrer"><IconTwitter /></Link>
      <Link href="https://www.linkedin.com/in/karthik-iyengar-22446176/" target="_blank" rel="noopener noreferrer"><IconLinkedin /></Link>
      <LinkWithoutMargin href="https://www.codewars.com/users/karthikiyengar/" target="_blank" rel="noopener noreferrer">
        <Image src="https://www.codewars.com/users/karthikiyengar/badges/micro" alt="Codewars" />
      </LinkWithoutMargin>
    </LinksContainer>
  </Container>
);

export default Footer;
