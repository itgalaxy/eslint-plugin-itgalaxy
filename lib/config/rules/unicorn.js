"use strict";

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
    // Enforce a specific parameter name in catch clauses
    "unicorn/catch-error-name": [
        "error",
        {
            "name": "error"
        }
    ],
    // Enforce explicitly comparing the `length` property of a value
    "unicorn/explicit-length-check": "error",
    // Enforce a case style for filenames
    "unicorn/filename-case": "off",
    // Enforce specifying rules to disable in `eslint-disable` comments
    "unicorn/no-abusive-eslint-disable": "error",
    // Disallow `process.exit()`
    "unicorn/no-process-exit": "off",
    // Require new when throwing an error (fixable)
    "unicorn/throw-new-error": "error"
};
