"use strict";

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
  // Improve regexes by making them shorter, consistent, and safer
  // TODO maybe enable in future, need options to enable/disable some optimizations
  "unicorn/better-regex": "off",
  // Enforce a specific parameter name in catch clauses
  "unicorn/catch-error-name": [
    "error",
    { name: "err", ignore: [/(^_|[0-9]+$)/i] },
  ],
  // Use destructured variables over properties
  "unicorn/consistent-destructuring": "off",
  // Prefer consistent types when spreading a ternary in an array literal.
  "unicorn/consistent-empty-array-spread": "error",
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
  "unicorn/expiring-todo-comments": "off",
  // Enforce explicitly comparing the `length` property of a value
  "unicorn/explicit-length-check": "off",
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
  // Disallow anonymous functions and classes as the default export.
  "unicorn/no-anonymous-default-export": "off",
  // Prevent passing a function reference directly to iterator methods.
  "unicorn/no-array-callback-reference": "off",
  // Prefer `for…of` over `Array.forEach(…)`
  "unicorn/no-array-for-each": "error",
  // Disallow using the `this` argument in array methods.
  "unicorn/no-array-method-this-argument": "error",
  // Enforce combining multiple Array#push() into one call.
  "unicorn/no-array-push-push": "off",
  // Disallow `Array.reduce()` and `Array.reduceRight()`
  "unicorn/no-array-reduce": "off",
  // Forbid member access from await expression
  "unicorn/no-await-expression-member": "error",
  // Disallow using await in Promise method parameters.
  "unicorn/no-await-in-promise-methods": "error",
  // Do not use leading/trailing space between `console.log` parameters.
  "unicorn/no-console-spaces": "error",
  // Do not use `document.cookie` directly
  // "unicorn/no-document-cookie": "off",
  // Disallow empty files
  "unicorn/no-empty-file": "error",
  // Do not use a `for` loop that can be replaced with a `for-of` loop
  "unicorn/no-for-loop": "off",
  // Enforce the use of unicode escapes instead of hexadecimal escapes.
  "unicorn/no-hex-escape": "error",
  // Require `Array.isArray()` instead of `instanceof Array`
  "unicorn/no-instanceof-array": "error",
  // Disallow invalid options in fetch() and new Request().
  "unicorn/no-invalid-fetch-options": "error",
  // Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
  "unicorn/no-invalid-remove-event-listener": "off",
  // Disallow identifiers starting with new or class
  "unicorn/no-keyword-prefix": "off",
  // Disallow using .length as the end argument of {Array,String,TypedArray}#slice().
  "unicorn/no-length-as-slice-end": "error",
  // Disallow `if` statements as the only statement in `if` blocks without `else`
  "unicorn/no-lonely-if": "error",
  // Disallow a magic number as the depth argument in `Array#flat(…)`
  "unicorn/no-magic-array-flat-depth": "error",
  // Disallow negated conditions.
  // No need
  "unicorn/no-negated-condition": "off",
  // Disallow negated expression in equality check.
  // No need
  "unicorn/no-negation-in-equality-check": "off",
  // Improved version of the no-nested-ternary ESLint rule, which allows cases where the nested ternary is only one level and wrapped in parens
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
  // Disallow passing single-element arrays to Promise methods.
  "unicorn/no-single-promise-in-promise-methods": "error",
  // Forbid classes that only have static members
  "unicorn/no-static-only-class": "off",
  // Disallow then property.
  "unicorn/no-thenable": "error",
  // Disallow assigning `this` to a variable
  "unicorn/no-this-assignment": "off",
  // TODO maybe enable in future
  // Disallow comparing undefined using typeof.
  "unicorn/no-typeof-undefined": "off",
  // Disallow awaiting non-promise values
  "unicorn/no-unnecessary-await": "error",
  // Enforce the use of built-in methods instead of unnecessary polyfills.
  "unicorn/no-unnecessary-polyfills": "error",
  // Disallow unreadable array destructuring.
  "unicorn/no-unreadable-array-destructuring": "off",
  // Disallow unreadable IIFEs.
  "unicorn/no-unreadable-iife": "off",
  // Disallow unused object properties.
  "unicorn/no-unused-properties": "off",
  // Forbid useless fallback when spreading in object literals
  "unicorn/no-useless-fallback-in-spread": "error",
  // Disallow useless array length check
  "unicorn/no-useless-length-check": "error",
  // Disallow returning/yielding Promise.resolve/reject() in async functions or promise callbacks
  "unicorn/no-useless-promise-resolve-reject": "error",
  // Disallow useless spread
  "unicorn/no-useless-spread": "error",
  // Disallow useless case in switch statements.
  "unicorn/no-useless-switch-case": "off",
  // Disallow useless `undefined`
  "unicorn/no-useless-undefined": "off",
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
  // Prefer `Array.flat()` over legacy techniques to flatten arrays
  "unicorn/prefer-array-flat": "error",
  // Prefer `.flatMap(…)` over `.map(…).flat()`
  "unicorn/prefer-array-flat-map": "error",
  // Prefer `Array.indexOf()` over `Array.findIndex()` when looking for the index of an item
  "unicorn/prefer-array-index-of": "error",
  // Prefer `.some(…)` over `.find(…)`
  "unicorn/prefer-array-some": "error",
  // Prefer `.at()` method for index access and `String#charAt()`
  "unicorn/prefer-at": "off",
  // Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
  "unicorn/prefer-blob-reading-methods": "off",
  // Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`
  "unicorn/prefer-code-point": "error",
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
  // Prefer EventTarget over EventEmitter
  "unicorn/prefer-event-target": "error",
  // Prefer `export…from` when re-exporting
  "unicorn/prefer-export-from": "error",
  // Prefer `.includes()` over `.indexOf()` when checking for existence or non-existence
  "unicorn/prefer-includes": "error",
  // Prefer reading a JSON file as a buffer
  "unicorn/prefer-json-parse-buffer": "off",
  // Prefer `KeyboardEvent.key` over `KeyboardEvent.keyCode`
  // "unicorn/prefer-keyboard-event-key": "off",
  // Prefer using a logical operator over a ternary.
  "unicorn/prefer-logical-operator-over-ternary": "error",
  // Enforce the use of `Math.trunc` instead of bitwise operators
  // `| 0` is faster
  "unicorn/prefer-math-trunc": "off",
  // Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`
  // "unicorn/prefer-modern-dom-apis": "off",
  // Prefer modern Math APIs over legacy patterns.
  "unicorn/prefer-modern-math-apis": "error",
  // Prefer JavaScript modules (ESM) over CommonJS
  // We do the same in our `module` and `script` preset
  "unicorn/prefer-module": "off",
  // Prefer using String, Number, BigInt, Boolean, and Symbol directly.
  "unicorn/prefer-native-coercion-functions": "error",
  // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice()
  "unicorn/prefer-negative-index": "error",
  // Prefer using the `node:` protocol when importing Node.js builtin modules
  // Because of `"n/prefer-node-protocol"`
  "unicorn/prefer-node-protocol": "off",
  // Prefer Number static properties over global ones
  "unicorn/prefer-number-properties": "error",
  // Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object
  "unicorn/prefer-object-from-entries": "error",
  // Prefer omitting the `catch` binding parameter.
  "unicorn/prefer-optional-catch-binding": "error",
  // Prefer borrowing methods from the prototype instead of the instance.
  "unicorn/prefer-prototype-methods": "error",
  // Prefer `querySelector` over `getElementById`, `querySelectorAll` over `getElementsByClassName` and `getElementsByTagName`
  // "unicorn/prefer-query-selector": "off",
  // Prefer `Reflect.apply()` over `Function#apply()`
  "unicorn/prefer-reflect-apply": "off",
  // Prefer `RegExp.test()` over `String.match()` and `RegExp.exec()`
  "unicorn/prefer-regexp-test": "error",
  // TODO maybe enable in future
  // Prefer Set#has() over Array#includes() when checking for existence or non-existence
  "unicorn/prefer-set-has": "off",
  // Prefer using Set#size instead of Array#length
  "unicorn/prefer-set-size": "error",
  // Prefer the spread operator over `Array.from()`.
  "unicorn/prefer-spread": "error",
  // Prefer using the String.raw tag to avoid escaping \
  // Not intuitive
  "unicorn/prefer-string-raw": "off",
  // TODO Enable in future
  "unicorn/prefer-string-replace-all": "off",
  // Prefer `String#slice()` over `String#substr()` and `String#substring()`
  "unicorn/prefer-string-slice": "error",
  // Prefer `String.startsWith()` & `String.endsWith()` over `RegExp.test()`
  "unicorn/prefer-string-starts-ends-with": "error",
  // Prefer `String.trimStart()` / `String.trimEnd()` over `String.trimLeft()` / `String.trimRight()`
  "unicorn/prefer-string-trim-start-end": "error",
  // Prefer using `structuredClone` to create a deep clone.
  "unicorn/prefer-structured-clone": "error",
  // Prefer switch over multiple `else-if`
  "unicorn/prefer-switch": "off",
  // Prefer ternary expressions over simple `if-else` statements
  // Good for one line
  "unicorn/prefer-ternary": ["error", "only-single-line"],
  // TODO Maybe enable in future
  // Enforce throwing `TypeError` in type checking conditions.
  "unicorn/prefer-type-error": "off",
  // TODO Enable in future
  // Prefer top-level await over top-level promises and async function calls.
  "unicorn/prefer-top-level-await": "off",
  // Prevent abbreviations
  "unicorn/prevent-abbreviations": "off",
  // Enforce consistent relative URL style
  "unicorn/relative-url-style": "error",
  // Enforce using the separator argument with `Array.join()`
  "unicorn/require-array-join-separator": "off",
  // Enforce using the digits argument with `Number.toFixed()`
  "unicorn/require-number-to-fixed-digits-argument": "error",
  // Enforce using the `targetOrigin` argument with `window.postMessage()`
  // "unicorn/require-post-message-target-origin": "error",
  // Enforce better string content
  "unicorn/string-content": "off",
  // Enforce consistent brace style for case clauses.
  "unicorn/switch-case-braces": "off",
  // Fix whitespace-insensitive template indentation.
  "unicorn/template-indent": "off",
  // Enforce consistent case for text encoding identifiers
  // The idea is good, but don't catch all cases
  "unicorn/text-encoding-identifier-case": "off",
  // Require new when throwing an error (fixable)
  "unicorn/throw-new-error": "error",
};
