const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: './public',
    port: 3000,
  },
});
// This configuration file is for development mode. It uses source maps for easier debugging and sets up a development server on port 3000. The common configuration is imported from webpack.common.js, which contains shared settings for both development and production modes.
