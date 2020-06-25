const merge = require('merge')

module.exports = {
  env: {
    'jest/globals': true,
  },

  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },

  plugins: ['eslint-plugin-jest'],

  rules: merge(require('./rules/jest'), {
    'jest/valid-title': [
      'error',
      {
        disallowedWords: [
          'correct',
          'appropriate',
          'properly',
          'should',
          'every',
          'descriptive',
        ],
      },
    ],
  }),
}
