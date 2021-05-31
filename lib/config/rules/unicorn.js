"use strict";

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
  // Improve regexes by making them shorter, consistent, and safer
  //  TODO maybe enable in future, need options to enable/disable some optimizations
  "unicorn/better-regex": "off",
  // Enforce a specific parameter name in catch clauses
  "unicorn/catch-error-name": ["error", { ignore: [/^ignore/i] }],
  // Use destructured variables over properties
  // TODO maybe enable in future
  "unicorn/consistent-destructuring": "off",
  // Move function definitions to the highest possible scope
  "unicorn/consistent-function-scoping": "off",
  // Enforce correct `Error` subclassing.
  "unicorn/custom-error-definition": "error",
  // Enforce no spaces between braces
  "unicorn/empty-brace-spaces": "off",
  // Enforce passing a `message` value when throwing a built-in error.
  "unicorn/error-message": "error",
  // Require escape sequences to use uppercase values
  "unicorn/escape-case": "error",
  // Add expiration conditions to T_O_D_O comments
  // TODO maybe enable in future
  "unicorn/expiring-todo-comments": "off",
  // Enforce explicitly comparing the `length` property of a value
  "unicorn/explicit-length-check": "error",
  // Enforce a case style for filenames
  "unicorn/filename-case": [
    "error",
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
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
        /^PULL_REQUEST_TEMPLATE.md$/,
      ],
    },
  ],
  // Enforce importing index files with `..`
  // Disable in favor `import/no-useless-path-segments` rule
  "unicorn/import-index": "off",
  // Enforce specific import styles per module.
  "unicorn/import-style": "off",
  // Enforce the use of `new` for all builtins, except `String`, `Number` and `Boolean`.
  "unicorn/new-for-builtins": "error",
  // Enforce specifying rules to disable in `eslint-disable` comments
  "unicorn/no-abusive-eslint-disable": "error",
  // Prevent passing a function reference directly to iterator methods.
  "unicorn/no-array-callback-reference": "off",
  // TODO Enable in future
  // Prefer `for…of` over `Array.forEach(…)`
  "unicorn/no-array-for-each": "off",
  // Enforce combining multiple Array#push() into one call.
  "unicorn/no-array-push-push": "off",
  // Disallow `Array.reduce()` and `Array.reduceRight()`
  "unicorn/no-array-reduce": "off",
  // Do not use leading/trailing space between `console.log` parameters.
  "unicorn/no-console-spaces": "error",
  // Do not use `document.cookie` directly
  // "unicorn/no-document-cookie": "off",
  // TODO maybe enable in future
  // Do not use a `for` loop that can be replaced with a `for-of` loop
  "unicorn/no-for-loop": "off",
  // Enforce the use of unicode escapes instead of hexadecimal escapes.
  "unicorn/no-hex-escape": "error",
  // Require `Array.isArray()` instead of `instanceof Array`
  "unicorn/no-instanceof-array": "error",
  // Disallow identifiers starting with new or class
  "unicorn/no-keyword-prefix": "off",
  // Disallow `if` statements as the only statement in `if` blocks without `else`
  "unicorn/no-lonely-if": "error",
  // TODO maybe enable in future, now conflict with prettier
  // Improved version of the no-nested-ternary ESLint rule, which allows cases where the nested ternary is only one level and wrapped in parens.
  "unicorn/no-nested-ternary": "off",
  // Disallow `new Array()`
  "unicorn/no-new-array": "error",
  // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
  // Use `node/no-deprecated-api` rule.
  "unicorn/no-new-buffer": "off",
  // Disallow the use of the `null` literal.
  "unicorn/no-null": "off",
  // Disallow the use of objects as default parameters
  "unicorn/no-object-as-default-parameter": "off",
  // Disallow `process.exit()`
  // Use `no-process-exit` rule from `eslint`
  "unicorn/no-process-exit": "off",
  // Forbid classes that only have static members
  "unicorn/no-static-only-class": "off",
  // TODO maybe enable in future
  // Disallow assigning `this` to a variable
  "unicorn/no-this-assignment": "off",
  // Disallow unreadable array destructuring.
  "unicorn/no-unreadable-array-destructuring": "off",
  // TODO maybe enable in future
  // Disallow unsafe regular expressions.
  "unicorn/no-unsafe-regex": "off",
  // Disallow unused object properties.
  "unicorn/no-unused-properties": "off",
  // Disallow useless `undefined`
  "unicorn/no-useless-undefined": "error",
  // Disallow number literals with zero fractions or dangling dots
  "unicorn/no-zero-fractions": "error",
  // Enforce lowercase identifier and uppercase value for number literals
  // Use `prettier`
  "unicorn/number-literal-case": "off",
  // TODO enable in future
  // Enforce the style of numeric separators by correctly grouping digits
  "unicorn/numeric-separators-style": "off",
  //  Prefer `addEventListener` over `on`-functions.
  // "unicorn/prefer-add-event-listener": "off",
  // Prefer `.find(…)` over the first element from `.filter(…)`
  "unicorn/prefer-array-find": "error",
  // TODO enable in future
  // Prefer `Array.flat()` over legacy techniques to flatten arrays
  "unicorn/prefer-array-flat": "off",
  // Prefer `.flatMap(…)` over `.map(…).flat()`
  "unicorn/prefer-array-flat-map": "error",
  // Prefer `Array.indexOf()` over `Array.findIndex()` when looking for the index of an item
  "unicorn/prefer-array-index-of": "error",
  // Prefer `.some(…)` over `.find(…)`
  "unicorn/prefer-array-some": "error",
  // Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch
  "unicorn/prefer-date-now": "error",
  // Prefer default parameters over reassignment
  "unicorn/prefer-default-parameters": "error",
  // Prefer `Node.append()` over `Node.appendChild()`
  // "unicorn/prefer-dom-node-append": "off",
  // Prefer using `.dataset` on DOM elements over `.setAttribute(…)`
  // "unicorn/prefer-dom-node-dataset": "off",
  // Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`
  // "unicorn/prefer-dom-node-remove": "off",
  // Prefer `.textContent` over `.innerText`
  // "unicorn/prefer-dom-node-text-content": "off",
  // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
  "unicorn/prefer-includes": "error",
  // Prefer `KeyboardEvent.key` over `KeyboardEvent.keyCode`
  // "unicorn/prefer-keyboard-event-key": "off",
  // Enforce the use of `Math.trunc` instead of bitwise operators
  "unicorn/prefer-math-trunc": "error",
  // Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`
  // "unicorn/prefer-modern-dom-apis": "off",
  // Prefer JavaScript modules (ESM) over CommonJS
  // We do the same in our `module` and `script` preset
  "unicorn/prefer-module": "off",
  // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice()
  "unicorn/prefer-negative-index": "error",
  // TODO enable in future
  // Prefer using the `node:` protocol when importing Node.js builtin modules
  "unicorn/prefer-node-protocol": "off",
  // Prefer Number static properties over global ones
  "unicorn/prefer-number-properties": "error",
  // Prefer omitting the `catch` binding parameter.
  "unicorn/prefer-optional-catch-binding": "error",
  // Prefer borrowing methods from the prototype instead of the instance.
  // "unicorn/prefer-prototype-methods": "error",
  // Prefer `querySelector` over `getElementById`, `querySelectorAll` over `getElementsByClassName` and `getElementsByTagName`
  // "unicorn/prefer-query-selector": "off",
  // TODO maybe enable in future
  // Prefer `Reflect.apply()` over `Function#apply()`
  "unicorn/prefer-reflect-apply": "off",
  // Prefer `RegExp.test()` over `String.match()` and `RegExp.exec()`
  "unicorn/prefer-regexp-test": "error",
  // TODO maybe enable in future
  // Prefer Set#has() over Array#includes() when checking for existence or non-existence
  "unicorn/prefer-set-has": "off",
  // Prefer the spread operator over `Array.from()`.
  "unicorn/prefer-spread": "error",
  // TODO Enable in future
  "unicorn/prefer-string-replace-all": "off",
  // Prefer `String#slice()` over `String#substr()` and `String#substring()`
  "unicorn/prefer-string-slice": "error",
  // Prefer `String.startsWith()` & `String.endsWith()` over `RegExp.test()`
  "unicorn/prefer-string-starts-ends-with": "error",
  // Prefer `String.trimStart()` / `String.trimEnd()` over `String.trimLeft()` / `String.trimRight()`
  "unicorn/prefer-string-trim-start-end": "error",
  // TODO Maybe enable in future
  // Prefer switch over multiple `else-if`
  "unicorn/prefer-switch": "off",
  // Prefer ternary expressions over simple `if-else` statements
  "unicorn/prefer-ternary": "error",
  // TODO Maybe enable in future
  // Enforce throwing `TypeError` in type checking conditions.
  "unicorn/prefer-type-error": "off",
  // Prevent abbreviations
  "unicorn/prevent-abbreviations": "off",
  // Enforce using the separator argument with `Array.join()`
  // "unicorn/require-array-join-separator": "error",
  // Enforce using the digits argument with `Number.toFixed()`
  // "unicorn/require-number-to-fixed-digits-argument": "error",
  // Enforce better string content
  "unicorn/string-content": "off",
  // Require new when throwing an error (fixable)
  "unicorn/throw-new-error": "error",
};
