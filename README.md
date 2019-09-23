# eslint-plugin-itgalaxy

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-itgalaxy.svg)](https://www.npmjs.org/package/eslint-plugin-itgalaxy)
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/eslint-plugin-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/eslint-plugin-itgalaxy)
[![dependencies Status](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy)
[![devDependencies Status](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy?type=dev)
[![peerDependencies Status](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy/peer-status.svg)](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy?type=peer)

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

For example, the following will extend the ESNext (ES2015 and later) config:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ]
};
```

If using React, extend the `React` version of the configuration (which adds some
React-specific rules to those in the ESNext config):

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/react"
  ]
};
```

## Provided configurations

This plugin provides the following core configurations:

- [script](lib/config/script.js): preset for [CommonJS modules](https://nodejs.org/docs/latest/api/modules.html) (`require`/`module.exports`/etc).

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

Why? Very often you are faced with writing or having code using ECMAScript and CommonJS modules, you should use this preset in this case.

Example of configuration:

```js
import eslint from "eslint";

function loadConfig(configName) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(`my-${configName}`);
}

console.log(__dirname);
console.log(__filename);
console.log(import.meta.url);

loadConfig("example");
```

- [esnext](lib/config/esnext.js): use this for anything written with ES2015+ features.

Contains most of the rules for linting code.
**Does not contain environments for CommonJS and ECMA modules and rules for `require`/`import`/`export`/etc.**

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext"
  ]
};
```

- [node](lib/config/node.js): use this for `Node.js` projects.

Preset contains environment and rules for `Node.js` code.

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ]
};
```

- [browser](lib/config/browser.js): use this for browser projects.

Preset contains environment and rules for browser code.

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/browser"
  ]
};
```

- [react](lib/config/react.js): Use this for `React` projects.

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/react"
  ]
};
```

- [html](lib/config/html.js): Allow linting `JavaScript` in `HTML` (and `HTML` based) files (don't forget add `.html` to `--ext` CLI argument).

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/module",
    // You can use "plugin:itgalaxy/node"
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/html"
  ]
};
```

Don't forget to add `--ext ".js,.html` for CLI usage.

- [markdown](lib/config/markdown.js): Allow linting `JavaScript` in `markdown` files (don't forget add `.md` to `--ext` CLI argument).

Example of configuration:

```js
module.exports = {
  extends: [
    // You can use "plugin:itgalaxy/script" or "plugin:itgalaxy/dirty"
    "plugin:itgalaxy/dirty",
    "plugin:itgalaxy/esnext",
    // You can use "plugin:itgalaxy/node" or use them both
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/markdown"
  ]
};
```

Don't forget to add `--ext ".js,.md` for CLI usage.

- [all](lib/config/all.js): Don't use. It is for internal purposes (testings and tools).

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [AVA](lib/config/ava.js): Use this for projects that use the
  [AVA](https://github.com/sindresorhus/ava).

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/ava"
  ]
};
```

- [Jest](lib/config/jest.js): Use this for projects that use the
  [Jest](https://github.com/facebook/jest).

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/browser",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/jest"
  ]
};
```

- [lodash](lib/config/lodash.js): Use this for projects that use
  [lodash](https://lodash.com).

Example of configuration:

```js
module.exports = {
  extends: [
    "plugin:itgalaxy/module",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node",
    "plugin:itgalaxy/lodash"
  ]
};
```

## Examples

### CommonJS modules package

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: [
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ],
  overrides: [
    // Tests
    {
      extends: ["plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
```

### ECMA modules package

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: [
    // You can change this on `"plugin:itgalaxy/dirty" or `"plugin:itgalaxy/module"` if you use `node-babel` or use ECMA modules for config files (like `.eslint.js`/`prettier.config.js`/etc)
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ],
  overrides: [
    // Source
    {
      extends: ["plugin:itgalaxy/module"],
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"]
    },

    // Jest
    {
      extends: ["plugin:itgalaxy/module", "plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
```

### ECMA and CommonJS modules in one package

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: [
    // You can change this on `"plugin:itgalaxy/dirty" or `"plugin:itgalaxy/module"` if you use `node-babel` or use ECMA modules for config files (like `.eslint.js`/`prettier.config.js`/etc)
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ],
  overrides: [
    // Source
    {
      extends: ["plugin:itgalaxy/dirty"],
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"]
    },

    // Jest
    {
      extends: ["plugin:itgalaxy/dirty", "plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
```

### Browser package with ECMA modules

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: [
    // You can change this on `"plugin:itgalaxy/script" or `"plugin:itgalaxy/script"` if you use `node-babel` or use ECMA modules for config file (like `.eslint.js`/`prettier.config.js`/etc)
    "plugin:itgalaxy/script",
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/node"
  ],
  overrides: [
    // Source
    {
      extends: ["plugin:itgalaxy/module", "plugin:itgalaxy/browser"],
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"]
    },

    // Jest
    {
      extends: ["plugin:itgalaxy/module", "plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
```

### Application with ECMA modules and react

```js
"use strict";

module.exports = {
  extends: ["plugin:itgalaxy/esnext"],
  overrides: [
    // Source
    {
      extends: [
        // Allow to use `import` and `require`
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/browser",
        "plugin:itgalaxy/react"
      ],
      env: {
        // Do you use `jquery`?
        // jquery: true
      },
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"],
      globals: {
        // If you use `process.env.NODE_ENV` in your source code using webpack
        process: true
      },
      rules: {
        // Disable `require()` in favor `import` on front-end
        "import/no-commonjs": "error",
        // No `process.exit()` on front-end
        "no-process-exit": "error"
      },
      settings: {
        "import/resolver": {
          webpack: {
            config: require.resolve("./webpack.config.js")
          }
        }
      }
    },

    // Configurations and Node.js code
    {
      extends: ["plugin:itgalaxy/script", "plugin:itgalaxy/node"],
      excludedFiles: [
        "src/**/*",
        "**/__tests__/**/*",
        "**/__mocks__/**/*",
        "**/*.md"
      ],
      // All locations exclude sources and tests
      files: [".*.*", "**/*"],
      rules: {
        "no-console": "off"
      }
    },

    // Jest
    {
      extends: [
        "plugin:itgalaxy/module",
        "plugin:itgalaxy/node",
        "plugin:itgalaxy/browser",
        "plugin:itgalaxy/react",
        "plugin:itgalaxy/jest"
      ],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        // Allow to use `console` (for example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "plugin:itgalaxy/dirty",
        "plugin:itgalaxy/node",
        "plugin:itgalaxy/browser",
        "plugin:itgalaxy/react",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off"
      }
    }
  ],
  root: true
};
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
