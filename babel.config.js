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
  plugins: [],
};
