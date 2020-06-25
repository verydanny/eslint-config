module.exports = {
  plugins: ['eslint-plugin-graphql'],

  overrides: [
    {
      parser: 'babel-eslint',
      files: ['*.graphql'],
      rules: require('./rules/graphql'),
    },
  ],
}
