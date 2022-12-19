import React from "react";
import Head from "next/head";
import App from "next/app";
import { Global } from "../components/styled";
import { Normalize } from "styled-normalize";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Karthik Iyengar</title>
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
}

export default MyApp;
