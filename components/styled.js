import styled from 'styled-components';

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
`;


export const Container = styled.div`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
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
  border-color: lightgray;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
  &:focus {
    border-color: darkgray;
  }
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 15px;
  border-style: solid;
  font-size: 1em;
  outline: none;
  border-width: 1px;
  border-color: lightgray;
  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
  &:focus {
    border-color: darkgray;
  }
  width: 100%;
`;

export const Row = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px;
  max-width: 250px;
  font-size: 1em;
  background: lightgray;
  border: 0;
  transition: all 0.2s linear;
  &:hover {
    background: darkgray;
    color: white;
  }
`;
