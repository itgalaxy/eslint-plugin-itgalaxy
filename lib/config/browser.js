"use strict";

module.exports = {
  env: { browser: true },
  plugins: ["import", "unicorn"],
  rules: {
    "import/no-nodejs-modules": "error",

    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-event-key": "error",
    "unicorn/prefer-node-append": "error",
    "unicorn/prefer-node-remove": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-text-content": "error",
    "unicorn/prefer-dataset": "error"
  }
};
