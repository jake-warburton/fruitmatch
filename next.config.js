/* eslint-disable import/no-extraneous-dependencies */
// next.config.js

require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins || [];

    // eslint-disable-next-line no-param-reassign
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};

module.exports = nextConfig;
