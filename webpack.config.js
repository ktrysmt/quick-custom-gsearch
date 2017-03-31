const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    script: './src/script/main.js',
    options: './src/options/main.js',
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};

