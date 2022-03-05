const path = require('path');

const getHost = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
      case 'production':
        return 'https://jovanka-samudra.me';
      default:
        if (process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG === 'develop') {
          return 'https://jovanka-samudra-develop.vercel.app';
        }

        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    }
  } else {
    return 'http://localhost:3000';
  }
};

// eslint-disable-next-line arrow-body-style
module.exports = () => {
  return {
    env: {
      HOST: getHost(),
      API_KEY: process.env.API_KEY,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'assets/styles')],
    },
    images: {
      domains: ['cdn.dribbble.com'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  };
};
