"use strict";

const avaRules = require("./rules/ava");

module.exports = {
  plugins: ["ava"],
  overrides: [
    {
      files: [
        "**/(tests|test|__tests__)/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "**/test-*.[jt]s?(x)",
      ],
      excludedFiles: [
        "**/(tests|test|__tests__)/**/(helper|helpers|__helper__|__helpers__|fixture|fixtures|__fixture__|__fixtures__)/**/*",
      ],
      rules: { ...avaRules },
    },
  ],
};
