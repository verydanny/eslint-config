# eslint-plugin-rentpath

Styles here are compiled from various ESLints: AirBNB, Google, and ESLint. These have slight modifications
that work for our codebase.

## Usage

Import the plugins you need. Order of the plugins does matter, so try to keep the below order:

### Plugins (order is important)

- `verydanny-plugin-eslint/es5`
  - Older ES5 syntax. Faster checking as long as no new es6 code is used.
- `verydanny-plugin-eslint/esnext`
  - Checking for new esnext code (arrow functions, async, promises, etc)
- `verydanny-plugin-eslint/typescript`
  - Basic typescript checking, extends most common typescript rules
- `verydanny-plugin-eslint/typescript-tsconfig-checking`
  - Extend this if you'd like checking based on your `tsconfig.json` project file as well
- `verydanny-plugin-eslint/react`
  - React linting. Has support for JSX, Hooks, and more
- `verydanny-plugin-eslint/node`
  - Support for node's global variables, and other node caveats
- `verydanny-plugin-eslint/jest`
  - Support for Jest's global variables, some autocompletion. If one wants better autocompletion, it's best to write tests in TypeScript.
- `verydanny-plugin-eslint/graphql`
  - Support for GraphQL files (`.graphql`)
- `verydanny-plugin-eslint/webpack`
  - Support for webpack global variables


*Example for Node, ES6, and React project*

```js
// .eslintrc.js

module.exports = {
  extends: [
    'plugin:@rentpath/rentpath/esnext',
    'plugin:@rentpath/rentpath/react',
    'plugin:@rentpath/rentpath/node',
  ]
}
```
