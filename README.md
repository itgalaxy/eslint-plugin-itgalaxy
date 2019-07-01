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

```json
{
  "extends": "plugin:itgalaxy/esnext"
}
```

If using React, extend the `React` version of the configuration (which adds some
React-specific rules to those in the ESNext config):

```json
{
  "extends": ["plugin:itgalaxy/esnext", "plugin:itgalaxy/react"]
}
```

You can also add some "augmenting" configs on top of the "core" config by
extending an array of linting configs. For example, this package provides a
lodash linting config, which can be added to the ESNext config with the
following configuration file:

```json
{
  "extends": [
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/react",
    "plugin:itgalaxy/lodash",
    "plugin:itgalaxy/jest"
  ]
}
```

Notice: presets **"plugin:itgalaxy/esnext"** should be **first**.

## Provided configurations

This plugin provides the following core configurations:

- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.

```json
{
  "extends": ["plugin:itgalaxy/esnext"]
}
```

- [html](lib/config/html.js): Allow linting `JavaScript` in `HTML` (and `HTML` based) files (don't forget add `.html` to `--ext` CLI argument).

Use this configuration:

```js
module.exports = {
  extends: ["plugin:itgalaxy/esnext"],
  overrides: [
    {
      extends: [
        // Uncomment next line if examples can be for node
        // "plugin:itgalaxy/node",
        "plugin:itgalaxy/html"
      ],
      files: ["**/*.html"]
    }
  ]
};
```

Don't forget to add `--ext ".js,.html` for CLI usage.

- [markdown](lib/config/markdown.js): Allow linting `JavaScript` in `markdown` files (don't forget add `.md` to `--ext` CLI argument).

Use this configuration:

```js
module.exports = {
  extends: ["plugin:itgalaxy/esnext"],
  overrides: [
    {
      extends: [
        // Uncomment next line if examples can be for node
        // "plugin:itgalaxy/node",
        "plugin:itgalaxy/markdown"
      ],
      files: ["**/*.md"],
      parserOptions: {
        // Uncomment the next line if you want use `import/export` in documentation
        // sourceType: "module",
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        strict: "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off"
      }
    }
  ]
};
```

Don't forget to add `--ext ".js,.md` for CLI usage.

- [node](lib/config/node.js): Use this for `nodejs` projects.

Example:

```json
{
  "extends": ["plugin:itgalaxy/esnext", "plugin:itgalaxy/node"]
}
```

- [react](lib/config/react.js): Use this for `React` projects.

Example:

```json
{
  "extends": ["plugin:itgalaxy/esnext", "plugin:itgalaxy/react"]
}
```

- [all](lib/config/all.js): Don't use. It is for internal purposes (testings and tools).

This plugin also provides the following tool-specific configurations, which can be used on top of the core configurations:

- [AVA](lib/config/ava.js): Use this for projects that use the
  [AVA](https://github.com/sindresorhus/ava).

- [lodash](lib/config/lodash.js): Use this for projects that use
  [lodash](https://lodash.com).

- [Jest](lib/config/jest.js): Use this for projects that use the
  [Jest](https://github.com/facebook/jest).

## Examples

### Package for Node.js (without babel)

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: ["plugin:itgalaxy/esnext", "plugin:itgalaxy/node"],
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
      extends: ["plugin:itgalaxy/markdown"],
      files: ["**/*.md"],
      parserOptions: {
        // Uncomment the next line if you want use `import/export` in documentation
        // sourceType: "module"
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        strict: "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off"
      }
    }
  ],
  root: true
};
```

### Package for Node.js (with babel)

**.eslintrc.js**

```js
"use strict";

module.exports = {
  extends: ["plugin:itgalaxy/esnext", "plugin:itgalaxy/node"],
  overrides: [
    // Source
    {
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"],
      parserOptions: {
        sourceType: "module"
      }
    },

    // Jest
    {
      extends: ["plugin:itgalaxy/jest"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        // Allow to use `console` (example - `mocking`)
        "no-console": "off",
        // Allow all `es` features in tests, because we use `babel`
        "node/no-unsupported-features/es-syntax": "off"
      }
    },

    // Markdown
    {
      extends: ["plugin:itgalaxy/markdown"],
      files: ["**/*.md"],
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        strict: "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off"
      }
    }
  ],
  root: true
};
```

### Application (with babel, react and webpack)

```js
"use strict";

module.exports = {
  extends: ["plugin:itgalaxy/esnext"],
  overrides: [
    // Source
    {
      extends: ["plugin:itgalaxy/react"],
      env: {
        node: false,
        browser: true
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
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        // Disable `require()` and `define` in favor `import` on front-end
        "import/no-amd": "error",
        "import/no-commonjs": "error",
        // Avoid using `nodejs` modules on front-end
        "import/no-nodejs-modules": "error",
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
      extends: ["plugin:itgalaxy/node"],
      env: {
        node: true,
        browser: false
      },
      excludedFiles: [
        "src/**/*",
        "**/__tests__/**/*",
        "**/__mocks__/**/*",
        "**/*.md"
      ],
      // All locations exclude sources and tests
      files: [".*.*", "**/*"],
      parserOptions: {
        sourceType: "script"
      },
      rules: {
        "no-console": "off"
      }
    },

    // Jest
    {
      extends: [
        "plugin:itgalaxy/node",
        "plugin:itgalaxy/react",
        "plugin:itgalaxy/jest"
      ],
      env: {
        node: true,
        browser: true
      },
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        // Allow to use `console` (for example - `mocking`)
        "no-console": "off",
        // Allow all `es` features in tests, because we use `babel`
        "node/no-unsupported-features/es-syntax": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Examples can be for node and for browser
        "plugin:itgalaxy/node",
        "plugin:itgalaxy/react",
        "plugin:itgalaxy/markdown"
      ],
      env: {
        browser: true,
        node: true
      },
      files: ["**/*.md"],
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          impliedStrict: true
        }
      },
      rules: {
        strict: "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": "off"
      }
    }
  ],
  root: true
};
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
