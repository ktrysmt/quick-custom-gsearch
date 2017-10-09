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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'flow']
        }
      },
    ],
  },
};

