const merge = require('merge')

module.exports = {
  extends: 'plugin:eslint-plugin-verydanny/core',
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-babel',
    'eslint-plugin-promise',
    'eslint-plugin-sort-class-members',
    'eslint-plugin-import',
  ],
  settings: {
    'import/ignore': ['node_modules', '\\.s?css'],
  },
  rules: merge(
    require('./rules/ecma6'),
    require('./rules/promise'),
    require('./rules/babel'),
    require('./rules/sort-class-members'),
    require('./rules/import'),
    {
      // default params
      'no-param-reassign': 'error',
      // Rules override by the Babel plugin
      camelcase: 'off',
      quotes: 'off',
      'no-unused-expressions': 'off',
      'valid-typeof': 'off',
      'new-cap': 'off',
      'no-await-in-loop': 'off',
      'object-curly-spacing': 'off',
      'no-invalid-this': 'off',
    },
  ),
}
