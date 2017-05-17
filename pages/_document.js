import Document, { Head, Main, NextScript } from 'next/document';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import ReactGA from 'react-ga';

export default class MyDocument extends Document {
  componentDidMount() {
    ReactGA.initialize('UA-99297912-1');
  }

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
          <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
          <title>Karthik Iyengar</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway:200" rel="stylesheet" />
          <script src='https://www.google.com/recaptcha/api.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
