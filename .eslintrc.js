module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jquery: false,
    jest: true,
    jasmine: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    indent: ['warn', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'no-var': ['warn'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'no-mixed-spaces-and-tabs': ['warn'],
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    fetch: true,
    URL: true,
    MessengerExtensions: true,
  },
};
