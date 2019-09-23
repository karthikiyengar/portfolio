import React from "react";
import Head from "next/head";
import App from "next/app";
import { Global } from "../components/styled";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Karthik Iyengar</title>
          <Global />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
