import styled, { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)}
    }
  `,
};


export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: thin;
  margin: 0 0 25px 0;
`;

export const Section = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  font-weight: thin;
  margin: 20px 0;
  ${media.handheld`
    margin: 10px 0;
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  ${ media.handheld`
    padding: 10px 15px;
  `}
`;

export const Content = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 1.5em;
  margin: 0;
`;

export const Input = styled.input`
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  font-size: 1em;
  outline: none;
  border-color: ${props => props.error ? 'red' : 'lightgray'};
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
  &:focus {
    border-color: ${props => props.error ? 'red' : 'darkgray'};;
  }
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border-style: solid;
  font-size: 1em;
  outline: none;
  border-width: 1px;
  border-color: ${props => props.error ? 'red' : 'lightgray'};
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
  &:focus {
    border-color: ${props => props.error ? 'red' : 'darkgray'};;
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
    cursor: not-allowed
  }
  &:hover:enabled {
    background: darkgray;
    color: white;
  }
`;

export const Error = styled.p`
  margin: 5px 0;
`;

export const Message = styled(Error)`
  margin: 5px 0;
`;

export const Image = styled.img`
  max-width: 480px;
  height: auto;
  margin-bottom: 25px;
  ${media.handheld`
    max-width: 100%;
  `}
`;
