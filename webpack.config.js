const path = require('path');

module.exports = {
  entry: [
    './src/main.js',
  ],
  output: {
    path: path.resolve('dist/'),
    filename: 'script.js',
  },
};

