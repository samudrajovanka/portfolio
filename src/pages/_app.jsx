import Layout from '@components/parts/Layout';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import AOS from 'aos';
import { useEffect } from 'react';
import '@styles/globals.scss';
import 'aos/dist/aos.css';
import Script from 'next/script';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import * as ga from '@lib/ga';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 5,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{Component.title ? `${Component.title} | Jovanka Samudra` : 'Jovanka Samudra'}</title>
        <meta
          property="og:title"
          content={Component.title ? `${Component.title} | Jovanka Samudra` : 'Jovanka Samudra'}
        />
        <meta name="description" content={Component.description ?? "Hello, I'm Jovanka Samudra. Welcome..."} />
        <meta
          property="og:description"
          content={Component.description ?? "Hello, I'm Jovanka Samudra. Welcome..."}
          key="ogdesc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${process.env.HOST}/logo.png`} /> {/* fix content image */}
        <meta property="og:site_name" content="Jovanka Samudra" />
        <meta property="og:url" content={process.env.HOST} />
        <meta name="keyword" content="jovanka, samudra" />
      </Head>
      <ThemeProvider enableSystem={false} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
