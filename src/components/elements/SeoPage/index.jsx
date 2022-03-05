import Head from 'next/head';
import PropTypes from 'prop-types';

export default function SeoPage({ title, description, type, image, url, siteName, keyword, author }) {
  return (
    <Head>
      <title>{title ?? 'Jovanka Samudra'}</title>
      <meta property="og:title" content={title ?? 'Jovanka Samudra'} />
      <meta name="description" content={description ?? "Hello, I'm Jovanka Samudra. Welcome..."} />
      <meta property="og:description" content={description ?? "Hello, I'm Jovanka Samudra. Welcome..."} key="ogdesc" />
      <meta property="og:type" content={type ?? 'website'} />
      <meta property="og:image" content={image ?? `${process.env.HOST}/logo.png`} />
      <meta property="og:site_name" content={siteName ?? 'Jovanka Samudra'} />
      <meta property="og:url" content={url ?? process.env.HOST} />
      <meta name="keyword" content={keyword ?? 'jovanka, samudra'} />
      <meta name="author" content={author ?? 'Jovanka Samudra'} />
    </Head>
  );
}

SeoPage.defaultProps = {
  title: null,
  description: null,
  type: null,
  image: null,
  url: null,
  siteName: null,
  keyword: null,
  author: null,
};

SeoPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  siteName: PropTypes.string,
  keyword: PropTypes.string,
  author: PropTypes.string,
};
