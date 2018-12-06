"use strict";

// see http://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Enforce `for` loop update clause moving the counter in the right direction.
  // In recommended
  // "for-direction": "error",
  // Enforce `return` statements in getters
  // In recommended
  // "getter-return": ["error"],
  // Disallow using an async function as a Promise executor
  "no-async-promise-executor": "error",
  // Disallow `await` inside of loops
  "no-await-in-loop": "error",
  // Disallow comparing against -0
  // In recommended
  // "no-compare-neg-zero": "error",
  // Disallow assignment in conditional expressions
  "no-cond-assign": ["error", "except-parens"],
  // Disallow use of console
  "no-console": "error",
  // Disallow use of constant expressions in conditions
  "no-constant-condition": [
    "error",
    {
      checkLoops: true
    }
  ],
  // Disallow control characters in regular expressions
  // In recommended
  // "no-control-regex": "error",
  // Disallow use of debugger
  // Disable in favor `no-restricted-syntax` rule
  "no-debugger": "off",
  // Disallow duplicate arguments in functions
  // In recommended
  // "no-dupe-args": "error",
  // Disallow duplicate keys when creating object literals
  // In recommended
  // "no-dupe-keys": "error",
  // Disallow a duplicate case label.
  // In recommended
  // "no-duplicate-case": "error",
  // Disallow the use of empty character classes in regular expressions
  // In recommended
  // "no-empty-character-class": "error",
  // Disallow empty statements
  // In recommended
  // "no-empty": ["error"],
  // Disallow assigning to the exception in a catch block
  // In recommended
  // "no-ex-assign": "error",
  // Disallow double-negation boolean casts in a boolean context
  // In recommended
  // "no-extra-boolean-cast": "error",
  // Disallow unnecessary parentheses
  "no-extra-parens": "off",
  // Disallow unnecessary semicolons
  // Use `prettier`
  "no-extra-semi": "off",
  // Disallow overwriting functions written as function declarations
  // In recommended
  // "no-func-assign": "error",
  // Disallow function or variable declarations in nested blocks
  // In recommended
  // "no-inner-declarations": "error",
  // Disallow invalid regular expression strings in the RegExp constructor
  // In recommended
  // "no-invalid-regexp": "error",
  // Disallow irregular whitespace outside of strings and comments
  // In recommended
  // "no-irregular-whitespace": "error",
  // Disallow characters which are made with multiple code points in character class syntax
  "no-misleading-character-class": "error",
  // Disallow the use of object properties of the global object (Math and JSON) as functions
  // In recommended
  // "no-obj-calls": "error",
  // Disallow calling some Object.prototype methods directly on objects
  "no-prototype-builtins": "error",
  // Disallow multiple spaces in a regular expression literal
  // In recommended
  // "no-regex-spaces": "error",
  // Disallow sparse arrays
  // In recommended
  // "no-sparse-arrays": "error",
  // Disallow template literal placeholder syntax in regular strings
  "no-template-curly-in-string": "error",
  // Avoid code that looks like two expressions but is actually one
  // Use `prettier`
  "no-unexpected-multiline": "off",
  // Disallow unreachable statements after a return, throw, continue, or break statement
  // In recommended
  // "no-unreachable": "error",
  // Disallow control flow statements in finally blocks
  // In recommended
  // "no-unsafe-finally": "error",
  // Disallow negating the left operand of relational operators
  // In recommended
  // "no-unsafe-negation": "error",
  // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
  "require-atomic-updates": "error",
  // Disallow comparisons with the value NaN
  // In recommended
  // "use-isnan": "error",
  // Ensure JSDoc comments are valid
  "valid-jsdoc": "off",
  // Ensure that the results of typeof are compared against a valid string
  "valid-typeof": [
    "error",
    {
      requireStringLiterals: true
    }
  ]
};
