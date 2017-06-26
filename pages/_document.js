import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const Script = ({ children }) => (
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} />
);

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (<style
      dangerouslySetInnerHTML={{
        __html: styleSheet
        .rules()
        .map(rule => rule.cssText)
        .join('\n'),
      }}
    />);
    return {
      ...page,
      styles,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="google-site-verification" content="UGhNZ8t59toBwhI1pUgJDeJK82IJqDz5SUAyLEoa_cI" />
          <title>Karthik Iyengar</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300"
            rel="stylesheet"
          />
          <script src="https://www.google.com/recaptcha/api.js" />
          <script async src="https://www.google-analytics.com/analytics.js" />
          <script async src="/static/js/autotrack.js" />
        </Head>
        <body>
          <Main />
          <Script>
            {
              () => {
                window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments); }; ga.l = +new Date();
                ga('create', 'UA-99297912-1', 'auto');
                ga('require', 'urlChangeTracker');
                ga('require', 'cleanUrlTracker');
                ga('require', 'outboundFormTracker');
                ga('require', 'outboundLinkTracker');
                ga('set', 'page', window.location.pathname);
                ga('send', 'pageview');
                // TODO: How do you log indiviudal pages?
              }
            }
          </Script>
          <NextScript />
        </body>
      </html>
    );
  }
}
