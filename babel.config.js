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
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-transform-runtime',
  ],
};
