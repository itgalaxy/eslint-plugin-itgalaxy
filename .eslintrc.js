"use strict";

module.exports = {
  parserOptions: {
    sourceType: "script"
  },
  extends: ["./lib/config/esnext.js", "./lib/config/node.js"],
  overrides: [
    // Ava
    {
      extends: ["./lib/config/ava.js"],
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
      extends: ["./lib/config/markdown.js"],
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
