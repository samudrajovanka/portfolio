import Layout from '@components/Layout';
import Head from 'next/head';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Component.title ? `${Component.title} | Jovanka Samudra` : 'Jovanka Samudra'}</title>
        <meta
          property="og:title"
          content={Component.title ? `${Component.title} | Jovanka Samudra` : 'Jovanka Samudra'}
        />
        <meta name="description" content={Component.description ?? "Hello, I'm Jovanka Samudra. Welcome...👋"} />
        <meta
          property="og:description"
          content={Component.description ?? "Hello, I'm Jovanka Samudra. Welcome...👋"}
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:site_name" content="Jovanka Samudra" />
        <meta name="keyword" content="jovanka, samudra" />
        <meta property="og:url" content="https://jovanka-samudra.me" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
