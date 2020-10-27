module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      targets: {
        node: 'current',
        browsers: ['last 2 versions'],
      },
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    ['babel-plugin-module-resolver', {
      alias: {
        '@mocks': './__mocks__',
        '@routes': './src/routes',
        '@storybook/utilities': './.storybook',
        '@theme': './src/components/theme',
        '@utilities': './src/utilities',
      },
    }],
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'require-context-hook',
      ],
    },
  },
};
