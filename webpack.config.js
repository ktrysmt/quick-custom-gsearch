const path = require('path');

module.exports = {
  entry: {
    script: './src/script/main.js',
    options: './src/options/main.jsx',
  },
  output: {
    path: path.resolve('dist/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'flow'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

