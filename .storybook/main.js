const Path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.jsx',
  ],
  addons: ['@storybook/addon-storysource'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: (modulePath) => {
        return /node_modules/.test(modulePath) &&
          !/node_modules\/qe-react-components-style/.test(modulePath) &&
          !/node_modules\/qe-react-components-web/.test(modulePath) &&
          !/node_modules\/qe-react-components-web/.test(modulePath);
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
