"use strict";

module.exports = {
  env: { browser: true },
  plugins: ["unicorn"],
  rules: {
    "unicorn/no-document-cookie": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/require-post-message-target-origin": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/prefer-blob-reading-methods": "error",
  },
};
