const merge = require('merge')

module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    'eslint-plugin-react',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-react-hooks',
  ],
  rules: merge(
    require('./rules/react'),
    require('./rules/react-hooks'),
    require('./rules/jsx-a11y'),
    {
      'consistent-return': 'off',
    },
  ),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/ts-react'),
    },
    {
      files: ['*.test.*'],
      rules: {
        'shopify/jsx-no-hardcoded-content': 'off',
      },
    },
  ],
}
