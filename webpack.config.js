const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    script: './src/main.js',
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].js',
  },
  optimization: {
    minimize: true
  }
};

