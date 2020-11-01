import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="google-site-verification"
            content="UGhNZ8t59toBwhI1pUgJDeJK82IJqDz5SUAyLEoa_cI"
          />
          <meta
            name="description"
            content="I’m a full stack developer and technical consultant and I help you convert your ideas into products"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link rel="canonical" href="http://karthikiyengar.in" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400|Open+Sans:300"
            rel="stylesheet"
          />
          <script src="https://www.google.com/recaptcha/api.js" />
          <script async src="https://www.google-analytics.com/analytics.js" />
          <script async src="/static/js/autotrack.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}