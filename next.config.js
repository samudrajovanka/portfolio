const path = require('path');

// eslint-disable-next-line arrow-body-style
module.exports = () => {
  return {
    env: {
      HOST: process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'http://localhost:3000',
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
