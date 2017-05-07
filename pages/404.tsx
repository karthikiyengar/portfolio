import { Header } from "../components";
import { Layout, VisitButton } from "../components/styled";
import styled from "styled-components";
import { Title } from "../components/Header";

const Image = styled.img`
  margin: auto;
  height: 25vh;
  width: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function FourOhFour() {
  return (
    <>
      <Header />
      <Layout>
        <Container>
          <Image src="/static/doge-04.png" />
          <Title>Such missing link, so 404, wow!</Title>
          <VisitButton href={"/"}>Go Home</VisitButton>
        </Container>
      </Layout>
    </>
  );
}
