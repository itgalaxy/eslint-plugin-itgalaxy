"use strict";

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
  // Enforce a specific parameter name in catch clauses
  "unicorn/catch-error-name": [
    "error",
    {
      caughtErrorsIgnorePattern: "^ignore"
    }
  ],
  // Move function definitions to the highest possible scope
  "unicorn/consistent-function-scoping": "error",
  // Enforce correct `Error` subclassing.
  "unicorn/custom-error-definition": "error",
  // Enforce passing a `message` value when throwing a built-in error.
  "unicorn/error-message": "error",
  // Require escape sequences to use uppercase values
  "unicorn/escape-case": "error",
  // Add expiration conditions to T_O_D_O comments
  "unicorn/expiring-todo-comments": "off",
  // Enforce explicitly comparing the `length` property of a value
  "unicorn/explicit-length-check": "error",
  // Enforce a case style for filenames
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        kebabCase: true,
        pascalCase: true
      },
      ignore: [
        /^CHANGES.md$/,
        /^CHANGELOG.md$/,
        /^HISTORY.md$/,
        /^README.md$/,
        /^LICENSE.md$/,
        /^LICENCE.md$/,
        /^NOTICE.md$/,
        /^CODE_OF_CONDUCT.md$/,
        /^CONTRIBUTING.md$/,
        /^AUTHORS.md$/,
        /^SECURITY.md$/,
        /^ISSUE_TEMPLATE.md$/,
        /^PULL_REQUEST_TEMPLATE.md$/
      ]
    }
  ],
  // Enforce importing index files with `..`
  // Disable in favor `import/no-useless-path-segments` rule
  "unicorn/import-index": "off",
  // Enforce the use of `new` for all builtins, except `String`, `Number` and `Boolean`.
  "unicorn/new-for-builtins": "error",
  // Enforce specifying rules to disable in `eslint-disable` comments
  "unicorn/no-abusive-eslint-disable": "error",
  // Require `Array.isArray()` instead of `instanceof Array`
  "unicorn/no-array-instanceof": "error",
  // Do not use leading/trailing space between `console.log` parameters.
  "unicorn/no-console-spaces": "error",
  // Prevents passing a function reference directly to iterator methods.
  "unicorn/no-fn-reference-in-iterator": "off",
  // Do not use a `for` loop that can be replaced with a `for-of` loop
  "unicorn/no-for-loop": "error",
  // Enforce the use of unicode escapes instead of hexadecimal escapes.
  "unicorn/no-hex-escape": "error",
  // Disallow identifiers starting with new or class
  "unicorn/no-keyword-prefix": "off",
  // Disallow nested ternary expressions. (partly fixable)
  "unicorn/no-nested-ternary": "off",
  // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
  // Use `node/no-deprecated-api` rule.
  "unicorn/no-new-buffer": "off",
  // Disallow `process.exit()`
  // Use `no-process-exit` `eslint` rule
  "unicorn/no-process-exit": "off",
  // Disallow unreadable array destructuring.
  "unicorn/no-unreadable-array-destructuring": "off",
  // Disallow unsafe regular expressions.
  "unicorn/no-unsafe-regex": "off",
  // Disallow unused object properties.
  "unicorn/no-unused-properties": "off",
  // Disallow number literals with zero fractions or dangling dots
  "unicorn/no-zero-fractions": "error",
  // Enforce lowercase identifier and uppercase value for number literals
  // Use `prettier`
  "unicorn/number-literal-case": "off",
  //  Prefer `addEventListener` over `on`-functions.
  // "unicorn/prefer-add-event-listener": "off",
  // Prefer using `.dataset` on DOM elements over `.setAttribute(…)`
  // "unicorn/prefer-dataset": "off",
  // Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`
  // "unicorn/prefer-event-key": "off",
  // Prefer the exponentiation operator over Math.pow()
  "unicorn/prefer-exponentiation-operator": "off",
  // Prefer `.flatMap(…)` over `.map(…).flat()`
  "unicorn/prefer-flat-map": "error",
  // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
  "unicorn/prefer-includes": "error",
  // Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`
  "unicorn/prefer-modern-dom-apis": "error",
  // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice()
  "unicorn/prefer-negative-index": "error",
  // Prefer `append` over `appendChild`.
  // "unicorn/prefer-node-append": "off",
  // Prefer `remove` over `parentNode.removeChild` and `parentElement.removeChild`.
  // "unicorn/prefer-node-remove": "off",
  // Prefer `querySelector` over `getElementById`, `querySelectorAll` over `getElementsByClassName` and `getElementsByTagName`
  // "unicorn/prefer-query-selector": "off",
  // Prefer `Reflect.apply()` over `Function#apply()`
  "unicorn/prefer-reflect-apply": "off",
  // Prefer `String#replaceAll()` over regex searches with the global flag
  "unicorn/prefer-replace-all": "error",
  // Prefer the spread operator over `Array.from()`.
  "unicorn/prefer-spread": "error",
  // Prefer `String#slice()` over `String#substr()` and `String#substring()`
  "unicorn/prefer-string-slice": "error",
  // Prefer `String#startsWith` & `String#endsWith` over more complex alternatives.
  "unicorn/prefer-starts-ends-with": "error",
  // Prefer `textContent` over `innerText`
  // "unicorn/prefer-text-content": "off",
  // Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`
  "unicorn/prefer-trim-start-end": "error",
  // Maybe enable in future
  // Enforce throwing `TypeError` in type checking conditions.
  "unicorn/prefer-type-error": "off",
  // Prevent abbreviations
  "unicorn/prevent-abbreviations": "off",
  // Enforce the use of regex shorthands to improve readability.
  "unicorn/regex-shorthand": "error",
  // Require new when throwing an error (fixable)
  "unicorn/throw-new-error": "error"
};
