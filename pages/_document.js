import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// https://github.com/zeit/next.js/tree/master/examples


export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
          <meta name="theme-color" content="#4489FF" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{`body { color: #333; margin: 0; padding: 0; font-family: Montserrat; } * { box-sizing: border-box; }`}</style>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
};
