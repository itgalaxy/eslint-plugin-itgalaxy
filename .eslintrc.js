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
        // Allow to use `console` (example - `mocking`)
        "no-console": "off"
      }
    },

    // Markdown
    {
      extends: [
        // Documentation files can contain ES and CommonJS modules
        "./lib/config/dirty.js",
        "./lib/config/markdown.js"
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
