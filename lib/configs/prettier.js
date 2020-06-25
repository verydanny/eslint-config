const merge = require('merge')

module.exports = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: merge(require('./rules/prettier'), {
    'babel/semi': 'off',
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
      },
    ],
    'no-unexpected-multiline': 'error',
  }),
  overrides: [
    {
      files: ['*.graphql', '*.gql'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/ts-prettier.js'),
    },
  ],
}
