import React from 'react'
import Head from 'next/head'
import App from 'next/app'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return ( <> <Head>
      <title>Karthik Iyengar</title>
    </Head> < Component {
      ...pageProps
    } /> </>)
  }
}

export default MyApp;