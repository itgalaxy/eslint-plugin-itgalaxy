"use strict";

module.exports = {
  extends: [
    "./lib/config/jsdoc-typescript.js",
    "./lib/config/script.js",
    "./lib/config/esnext.js",
    "./lib/config/node.js",
  ],
  overrides: [
    // Source
    {
      extends: ["./lib/config/dirty.js"],
      // Exclude nested tests
      excludedFiles: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md"],
      files: ["src/**/*"],
      rules: {
        // Allow to use ES module syntax
        // You should use babel if your node version is not supported ES syntax module, dynamic loading ES modules or other features
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] },
        ],
      },
    },

    // Tests
    {
      extends: ["./lib/config/dirty.js", "./lib/config/ava.js"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] },
        ],

        // Allow to use `console` (example - `mocking`)
        "no-console": "off",
      },
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "./lib/config/dirty.js",
        "./lib/config/markdown.js",
      ],
      files: ["**/*.md"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "import/no-unresolved": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] },
        ],
      },
    },
  ],
  root: true,
};
