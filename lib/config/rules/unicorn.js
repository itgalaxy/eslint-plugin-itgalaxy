"use strict";

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
  // Enforce a specific parameter name in catch clauses
  "unicorn/catch-error-name": [
    "error",
    {
      name: "error",
      caughtErrorsIgnorePattern: "^ignore"
    }
  ],
  // Enforce explicitly comparing the `length` property of a value
  // In recommended
  // "unicorn/explicit-length-check": "error",
  // Enforce a case style for filenames
  "unicorn/filename-case": "off",
  // Enforce specifying rules to disable in `eslint-disable` comments
  // In recommended
  // "unicorn/no-abusive-eslint-disable": "error",
  // Disallow `process.exit()`
  // Use `no-process-exit` `eslint` rule
  "unicorn/no-process-exit": "off",
  // Require new when throwing an error (fixable)
  // In recommended
  // "unicorn/throw-new-error": "error",
  // Enforce lowercase identifier and uppercase value for number literals
  // Use `prettier`
  "unicorn/number-literal-case": "off",
  // Require escape sequences to use uppercase values
  // In recommended
  // "unicorn/escape-case": "error",
  // Require `Array.isArray()` instead of `instanceof Array`
  // In recommended
  // "unicorn/no-array-instanceof": "error",
  // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
  // Use `node/no-deprecated-api` rule.
  "unicorn/no-new-buffer": "off",
  // Enforce the use of unicode escapes instead of hexadecimal escapes.
  // In recommended
  // "unicorn/no-hex-escape": "error",
  // Enforce correct `Error` subclassing.
  "unicorn/custom-error-definition": "error",
  // Prefer `String#startsWith` & `String#endsWith` over more complex alternatives.
  // In recommended
  // "unicorn/prefer-starts-ends-with": "error",
  // Need investigate
  // Enforce throwing `TypeError` in type checking conditions.
  "unicorn/prefer-type-error": "off",
  // Prevents passing a function reference directly to iterator methods.
  // In recommended
  // "unicorn/no-fn-reference-in-iterator": "off",
  // Enforce importing index files with `..`
  // In recommended
  // "unicorn/import-index": "error",
  // Enforce the use of `new` for all builtins, except `String`, `Number` and `Boolean`.
  // In recommended
  // "unicorn/new-for-builtins": "error",
  // Enforce the use of regex shorthands to improve readability.
  // In recommended
  // "unicorn/regex-shorthand": "error",
  // Prefer the spread operator over `Array.from()`.
  // In recommended
  // "unicorn/prefer-spread": "error",
  // Enforce passing a `message` value when throwing a built-in error.
  // In recommended
  // "unicorn/error-message": "error",
  // Disallow unsafe regular expressions.
  "unicorn/no-unsafe-regex": "error"
  //  Prefer `addEventListener` over `on`-functions.
  // In recommended
  // "unicorn/prefer-add-event-listener": "error",
  // Prefer the exponentiation operator over Math.pow()
  // In recommended
  // "unicorn/prefer-exponentiation-operator": "error"
};
