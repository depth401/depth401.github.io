require('dotenv').config();

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '';

module.exports = {
  webpack5: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    });
    return config;
  },
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
};
