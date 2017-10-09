const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    script: './src/script/main.js',
    options: './src/options/main.js',
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'remove-flow-types-loader',
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};

