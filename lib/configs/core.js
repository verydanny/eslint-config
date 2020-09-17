const merge = require('merge')

module.exports = {
  plugins: [
    '@torpedus/eslint-plugin',
    'eslint-plugin-eslint-comments',
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 5,
    },
  },
  rules: merge(
    require('./rules/best-practices'),
    require('./rules/legacy'),
    require('./rules/possible-errors'),
    require('./rules/strict-mode'),
    require('./rules/stylistic-issues'),
    require('./rules/variables'),
    require('./rules/eslint-comments'),
  ),
}
