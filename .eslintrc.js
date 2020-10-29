module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:lodash/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'lodash',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'jest/no-mocks-import': [0],
    'jsx-quotes': ['error', 'prefer-single'],
    'lodash/prefer-constant': [0],
    'react/display-name': [0],
    'react/jsx-equals-spacing': ['error', 'never'],
    semi: ['error', 'always'],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    }
  },
  ignorePatterns: ['build/**/*.js', 'disc/'],
};
