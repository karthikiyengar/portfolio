import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { description } from "../data/home";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
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
      <Html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="google-site-verification"
            content="UGhNZ8t59toBwhI1pUgJDeJK82IJqDz5SUAyLEoa_cI"
          />
          <meta name="description" content={description} />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link href="https://fosstodon.org/@kiyengar" rel="me"></link>

          {process.env.NODE_ENV === "production" ? (
            <>
              <script src="https://getinsights.io/js/insights.js"></script>
              <script
                dangerouslySetInnerHTML={{
                  __html:
                    "insights.init('IC5wGz5i1wl0Gds_'); insights.trackPages();",
                }}
              ></script>
            </>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
