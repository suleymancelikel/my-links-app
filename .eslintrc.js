module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 2017,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true,
  //     jsx: true,
  //   },
  // },
  // rules: {
  //   strict: 'warn',
  //   'import/extensions': [
  //     'error',
  //     'ignorePackages',
  //     {
  //       js: 'never',
  //       jsx: 'never',
  //       ts: 'never',
  //       tsx: 'never',
  //     },
  //   ],
  //   'no-shadow': [
  //     false,
  //     'ignorePackages',
  //     {
  //       allow: 'false',
  //     },
  //   ],
  // },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
