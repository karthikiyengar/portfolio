import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Global } from "../components/styled";
import { Normalize } from "styled-normalize";
import { useRouter } from "next/router";
import "prismjs/themes/prism-tomorrow.css";

const MyApp: React.FC<AppProps> = (props) => {
  const router = useRouter();
  const canonicalUrl = (`https://kiyengar.net` + (router.asPath === "/" ? "" : router.asPath)).split("?")[0];

  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Karthik Iyengar</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
      </Head>
      <Normalize />
      <Global />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
