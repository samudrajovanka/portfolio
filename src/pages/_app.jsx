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
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '@components/elements/Modal';
import { ModalContextProvider } from '@contexts/ModalContext';

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
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider enableSystem={false} attribute="class">
          <ModalContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Modal />
            <ToastContainer />
          </ModalContextProvider>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
