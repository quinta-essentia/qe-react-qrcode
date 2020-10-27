const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path = require('path');

const Config = {
  HTML_ENTRY_POINT: './index.html',
  JS_ENTRY_POINT: './index.js',
  OUTPUT_PATH: 'dist',
  OUTPUT_JS_FILENAME: 'bundle.[hash].js',
};

module.exports = {
  watch: true,
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  entry: Config.JS_ENTRY_POINT,
  output: {
    filename: Config.OUTPUT_JS_FILENAME,
    path: Path.resolve(__dirname, Config.OUTPUT_PATH),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: (modulePath) => {
          return /node_modules/.test(modulePath) &&
            !/node_modules\/qe-react-components-style/.test(modulePath) &&
            !/node_modules\/qe-react-components-web/.test(modulePath) &&
            !/node_modules\/qe-react-forms-renderer/.test(modulePath);
        },
        options: {
          babelrc: true,
          cacheDirectory: true,
          extends: Path.join(__dirname, './babel.config.js'),
        }
      },
      {
        test: /\.(png)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: Config.HTML_ENTRY_POINT,
    }),
  ],
};
