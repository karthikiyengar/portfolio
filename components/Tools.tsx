

import React from "react";
import styled from "styled-components";

type Technology = "react" | "nodejs" | "redux" | "redis" | "kubernetes" | "trello" | "laravel" | "ionic" | "mysql" | "angularjs" | "backbone" | "jira" | "mongodb" | "android" | "php" | "graphql" | "python" | "arduino" | "c" | "c#" | "mssql" | "jenkins" | "jquery" | "sketch" | "scrum" | "docker" | "typescript";

type Props = {
  data: Array<Technology>;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: block;
`;

const Image = styled.img`
  max-height: 40px;
  max-width: 40px;
  margin: 0 5px;
`;

const Text = styled.span`
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  margin-bottom: 5px;
`;

const Link = styled.a`
  display: inline-block;
`;

const getIcon = (item: Technology) => {
  switch (item) {
    case "react":
      return <Link href="https://facebook.github.io/react/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/react.svg" />
        </Link>;
    case "redux":
      return <Link href="http://redux.js.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/redux.png" />
        </Link>;
    case "nodejs":
      return <Link href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/nodejs.svg" />
        </Link>;
    case "backbone":
      return <Link href="http://backbonejs.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/backbone.svg" />
        </Link>;
    case "trello":
      return <Link href="https://trello.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/trello.svg" />
        </Link>;
    case "laravel":
      return <Link href="https://laravel.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/laravel.svg" />
        </Link>;
    case "ionic":
      return <Link href="https://ionicframework.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/ionic.png" />
        </Link>;
    case "angularjs":
      return <Link href="https://angularjs.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/angularjs.svg" />
        </Link>;
    case "mysql":
      return <Link href="https://www.mysql.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/mysql.svg" />
        </Link>;
    case "jira":
      return <Link href="https://www.atlassian.com/software/jira" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/jira.svg" />
        </Link>;
    case "mongodb":
      return <Link href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/mongodb.png" />
        </Link>;
    case "android":
      return <Link href="https://developer.android.com/index.html" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/android.svg" />
        </Link>;
    case "sketch":
      return <Link href="https://www.sketchapp.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/sketch.svg" />
        </Link>;
    case "php":
      return <Link href="http://php.net/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/php.svg" />
        </Link>;
    case "python":
      return <Link href="https://www.python.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/python.svg" />
        </Link>;
    case "arduino":
      return <Link href="https://www.arduino.cc/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/arduino.svg" />
        </Link>;
    case "c":
      return <Link href="http://www.open-std.org/jtc1/sc22/wg14/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/c.svg" />
        </Link>;
    case "mssql":
      return <Link href="https://www.microsoft.com/en-us/sql-server/sql-server-2016" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/mssql.png" />
        </Link>;
    case "c#":
      return <Link href="https://docs.microsoft.com/en-us/dotnet/articles/csharp/csharp" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/csharp.svg" />
        </Link>;
    case "jenkins":
      return <Link href="https://jenkins.io/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/jenkins.svg" />
        </Link>;
    case "jquery":
      return <Link href="https://jquery.com/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/jquery.svg" />
        </Link>;
    case "graphql":
      return <Link href="http://graphql.org/learn/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/graphql.svg" />
        </Link>;
    case "scrum":
      return <Link href="http://scrum.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/scrum.png" />
        </Link>;
    case "typescript":
      return <Link href="https://www.typescriptlang.org/" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/typescript.svg" />
        </Link>;
    case "docker":
      return <Link href="https://www.docker.com" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/docker.svg" />
        </Link>;
    case "kubernetes":
      return <Link href="https://kubernetes.io" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/kubernetes.svg" />
        </Link>;
    case "redis":
      return <Link href="https://redis.io" rel="noopener noreferrer" target="_blank" key={item}>
          <Image src="/static/tools/redis.svg" />
        </Link>;
    default:
      (item as never);
      throw new Error("Impossible Case");

  }
};

const Tools = (
  {
    data
  }: Props
) => <Container>
    <Text>Powered By</Text>
    <IconContainer>{data.map(getIcon)}</IconContainer>
  </Container>;

export default Tools;