"use strict";

module.exports = {
  extends: [
    "./lib/config/node.js",
    "./lib/config/script.js",
    "./lib/config/esnext.js",
    "./lib/config/jsdoc-typescript.js",
    "./lib/config/markdown.js",
    "./lib/config/ava.js",
  ],
  overrides: [
    // Tests
    {
      extends: ["./lib/config/dirty.js"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/*.md/**"],
      rules: {
        "node/no-unsupported-features/es-syntax": [
          "error",
          { ignores: ["modules", "dynamicImport"] },
        ],
      },
    },
  ],
  root: true,
};
