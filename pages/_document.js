import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';

const GOOGLE_ANALYTICS_UA = 'UA-99297912-1';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  // window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  // /* global ga: true */
  ga('create', GOOGLE_ANALYTICS_UA, 'auto');

  // // autotrack
  // // https://github.com/googleanalytics/autotrack

  ga('require', 'urlChangeTracker');
  ga('require', 'cleanUrlTracker');
  ga('require', 'outboundFormTracker');
  ga('require', 'outboundLinkTracker');

  // // check out more here https://github.com/googleanalytics/autotrack#plugins

  // // now that everything is ready, log initial page
  ga('set', 'page', window.location.pathname);
  ga('send', 'pageview');
  console.log('pageview');
}


export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    );
    return { ...page, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"  />
          <title>Karthik Iyengar</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:200" rel="stylesheet" />
          <script src="https://www.google.com/recaptcha/api.js" />
          <script async src="https://www.google-analytics.com/analytics.js"></script>
          <script async src="/static/js/autotrack.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
