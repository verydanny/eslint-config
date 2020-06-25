module.exports = {
  configs: {
    // Base configs must go before secondary, and those
    // must come before Prettier.
    // IMPORTANT!: Prettier is always last
    core: require('./lib/configs/core'),
    es5: require('./lib/configs/es5'),
    esnext: require('./lib/configs/esnext'),
    react: require('./lib/configs/react'),
    typescript: require('./lib/configs/typescript'),
    'typescript-tsconfig-checking': require('./lib/configs/ts-tsc'),

    // Secondary
    node: require('./lib/configs/node'),
    graphql: require('./lib/configs/graphql'),
    jest: require('./lib/configs/jest'),
    webpack: require('./lib/configs/webpack'),

    // Tertiary
    // We extend and modify Prettier plugin and configs, according to their
    // docs, it must always go last
    prettier: require('./lib/configs/prettier'),
  },

  rules: {
    'always-name-dynamic-imports': require('./lib/rules/always-name-dynamic-imports'),
  },
}
