"use strict";

module.exports = {
  extends: [
    "./lib/config/script.js",
    "./lib/config/esnext.js",
    "./lib/config/node.js"
  ],
  overrides: [
    // Tests
    {
      extends: ["./lib/config/dirty.js", "./lib/config/ava.js"],
      excludedFiles: ["**/*.md"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
      rules: {
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] }
        ],

        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ECMA and CommonJS modules
        "./lib/config/dirty.js",
        "./lib/config/markdown.js"
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
          { ignores: ["modules", "dynamicImport"] }
        ]
      }
    }
  ],
  root: true
};
