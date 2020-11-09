const Path = require('path');

module.exports = {
  stories: [
    '../src/*.stories.jsx',
  ],
  addons: ['@storybook/addon-knobs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: (modulePath) => {
        return /node_modules/.test(modulePath);
      },
      loader: 'babel-loader',
      options: {
        babelrc: true,
        extends: Path.join(__dirname, '../babel.config.js'),
        cacheDirectory: true,
      },
    });
    return config;
  },
};
