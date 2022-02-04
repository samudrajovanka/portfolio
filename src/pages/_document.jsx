import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="google" content="notranslate" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
