const path = require('path');

module.exports = {
  entry: './examples/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples'),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  target: 'web',
  mode: 'production',
};
