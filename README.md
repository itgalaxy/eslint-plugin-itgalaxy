# eslint-plugin-itgalaxy

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-itgalaxy.svg)](https://www.npmjs.org/package/eslint-plugin-itgalaxy)
[![Build Status](https://github.com/itgalaxy/eslint-plugin-itgalaxy/workflows/CI/badge.svg)](https://github.com/itgalaxy/eslint-plugin-itgalaxy/actions)

Itgalaxy’s ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-itgalaxy`:

```shell
$ npm install eslint-plugin-itgalaxy --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-itgalaxy` globally.

**Note:** Some presets require additional dependencies (plugins).

Example `markdown` require `eslint-plugin-markdown` plugin.

So you need run:

```shell
$ npm install eslint-plugin-markdown --save-dev
```

By default all additional plugins listed in `peerDependencies` (this allows you to track non-compatibility with old versions), just ignore warnings if you don't need a plugin.

## Usage

Itgalaxy’s ESLint configs come bundled in this package. In order to use them, you simply extend the relevant configuration in your project’s `.eslintrc`.

**Configurations do not contain stylistic rules**, we use [prettier](https://github.com/prettier/prettier) for this purpose.

Better use `prettier` directly (using `npm`/`yarn` command), because it is allow to format `css`, `scss`, `markdown`, `json` and etc.

For example, the following will extend the ESNext (ES2020 and later) config:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/esnext",
  ],
};
```

React:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/react",
  ],
};
```

## Provided configurations

This plugin provides the following core configurations:

- [script](lib/config/script.js): preset for environment without `require`/`import` (old browsers or custom env).

Example of configuration:

```json
{
  "extends": ["plugin:itgalaxy/script"]
}
```

- [commonjs](lib/config/commonjs.js): preset for [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html) (`require`/`module.exports`/etc).

Example of configuration:

```json
{
  "extends": ["plugin:itgalaxy/script"]
}
```

- [module](lib/config/module.js): preset for [ECMAScript modules](https://nodejs.org/api/esm.html) (`import`/`export`/etc).

Example of configuration:

```json
{
  "extends": ["plugin:itgalaxy/module"]
}
```

- [dirty](lib/config/dirty.js): preset for mixed code containing [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html) and [ECMAScript modules](https://nodejs.org/api/esm.html) (`require`/`module.exports`/`require`/`export`/etc).

Example of configuration:

```json
{
  "extends": ["plugin:itgalaxy/dirty"]
}
```

Why? Very often you are faced with writing or having code using ECMAScript and CommonJS modules, for example [`babel`](https://github.com/babel/babel) allows you to do it, you should use this preset in this case.
But it is not recommended. Prefer to use `plugin:itgalaxy/module`.

> More information about [`dirty` (`unambiguous`)](https://babeljs.io/docs/en/options#sourcetype).

Example of `dirty` (`unambiguous`) code:

```js
import eslint from "eslint";

/**
 * @param {string} configName Config name
 * @returns {object} Config
 */
function loadConfig(configName) {
  return require(`my-${configName}`);
}

console.log(__dirname);
console.log(__filename);
console.log(import.meta.url);

loadConfig("example");
```

- [node](lib/config/node.js): use this for `Node.js` projects (preset contains only environments rules, i.e. no rules for `require`/`import`, see above presets).

Preset contains environment and rules for `Node.js` code.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/node",
  ],
};
```

- [browser](lib/config/browser.js): use this for browser projects.

Preset contains environment and rules for browser code.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/script" for old browsers or custom enviroment, "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
  ],
};
```

- [esnext](lib/config/esnext.js): use this for anything written with ES2015+ features.

Contains most of the rules for linting code.

**Does not contain rules for CommonJS and ECMA modules syntax, rules for `require`/`import`/`module.export`/`exports`/etc and environments (i.e. `browser`/`node`/etc).**

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/script" for old browsers or custom enviroment, "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
  ],
};
```

- [react](lib/config/react.js): Use this for `react` projects.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/react",
  ],
};
```

- [html](lib/config/html.js): Allow linting `JavaScript` in `HTML` (and `HTML` based) files.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/html",
  ],
};
```

- [markdown](lib/config/markdown.js): Allow linting `JavaScript` in `markdown` files.

By default allows you to use `import` and `require` in documentation.
Also, all rules are related to `no-unresolved`/`no-unused`/`unpublished` are disabled by default and you can use `console.log(something)`.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/markdown",
  ],
};
```

- [AVA](lib/config/ava.js): Use this for projects that use the [AVA](https://github.com/sindresorhus/ava).

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/ava",
  ],
};
```

- [Jest](lib/config/jest.js): Use this for projects that use the [Jest](https://github.com/facebook/jest).

Please read this [`ecmascript-modules`](https://jestjs.io/ru/docs/ecmascript-modules) for using jest with ECMA modules.

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/jest",
  ],
};
```

- [jsdoc-typescript](lib/config/jsdoc-typescript.js): Use this for projects that use JSDoc [typescript](https://www.typescriptlang.org).

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/commonjs" or "plugin:itgalaxy/dirty" (useful for bundlers)
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/jsdoc-typescript",
  ],
};
```

## Examples

### CommonJS

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: [
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/commonjs",
    // Use "plugin:itgalaxy/browser" if you write code for browser or use them both if you write for both environments (you need bundler)
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/jest",
    // Lint documentation
    "plugin:itgalaxy/markdown",
    // Uncomment to use jsdoc typescript
    // "plugin:itgalaxy/jsdoc-typescript",
  ],
  root: true,
};
```

### ECMA modules

**.eslintrc.js**

```js
export default {
  extends: [
    "plugin:itgalaxy/esnext",
    // You can change this on "plugin:itgalaxy/dirty" if you use `node-babel`, bundler and have mixed code with `import` and `require`
    "plugin:itgalaxy/module",
    // Use "plugin:itgalaxy/browser" if you write code for browser or use them both if you write for both environments (you need bundler)
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/jest",
    // Lint documentation
    "plugin:itgalaxy/markdown",
    // Uncomment to use jsdoc typescript
    // "plugin:itgalaxy/jsdoc-typescript",
  ],
  root: true,
};
```

### Application with ECMA modules and react

```js
"use strict";

module.exports = {
  // You can use "plugin:itgalaxy/module" and remove "plugin:itgalaxy/module", "plugin:itgalaxy/dirty" and "plugin:itgalaxy/script"
  // if you use ECMA modules everywhere (preferable)
  // Configuration files and scripts
  extends: [
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/commonjs",
    "plugin:itgalaxy/jest",
    // Lint documentation
    "plugin:itgalaxy/markdown",
    // Uncomment to use jsdoc typescript
    // "plugin:itgalaxy/jsdoc-typescript",
  ],
  overrides: [
    // Source code of application
    {
      files: ["src/**/*.[jt]s?(x)"],
      extends: [
        "plugin:itgalaxy/module",
        "plugin:itgalaxy/browser",
        "plugin:itgalaxy/react",
      ],
      env: {
        // Do you use `jquery`?
        // jquery: true
      },
    },
    // Tests and documentation
    {
      files: [
        "**/{tests,test,__tests__}/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "**/test-*.[jt]s?(x)",
        "**/*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}/**",
      ],
      extends: [
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/node",
        "plugin:itgalaxy/browser",
        "plugin:itgalaxy/react",
      ],
    },
  ],
  root: true,
};
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
