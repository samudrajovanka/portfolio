const path = require('path');

// eslint-disable-next-line arrow-body-style
module.exports = () => {
  return {
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
