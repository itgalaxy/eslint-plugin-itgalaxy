"use strict";

// see http://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Enforce `for` loop update clause moving the counter in the right direction.
  "for-direction": "error",
  // Enforce `return` statements in getters
  "getter-return": ["error"],
  // Disallow using an async function as a Promise executor
  "no-async-promise-executor": "error",
  // Disallow `await` inside of loops
  "no-await-in-loop": "error",
  // Disallow comparing against -0
  "no-compare-neg-zero": "error",
  // Disallow assignment in conditional expressions
  "no-cond-assign": "error",
  // Disallow use of console
  "no-console": "error",
  // Disallow use of constant expressions in conditions
  "no-constant-condition": "error",
  // Disallow control characters in regular expressions
  "no-control-regex": "error",
  // Disallow use of debugger
  // Disable in favor `no-restricted-syntax` rule
  "no-debugger": "off",
  // Disallow duplicate arguments in functions
  "no-dupe-args": "error",
  // Disallow duplicate conditions in if-else-if chains
  "no-dupe-else-if": "error",
  // Disallow duplicate keys when creating object literals
  "no-dupe-keys": "error",
  // Disallow a duplicate case label.
  "no-duplicate-case": "error",
  // Disallow the use of empty character classes in regular expressions
  "no-empty-character-class": "error",
  // Disallow empty statements
  "no-empty": "error",
  // Disallow assigning to the exception in a catch block
  "no-ex-assign": "error",
  // Disallow double-negation boolean casts in a boolean context
  "no-extra-boolean-cast": "error",
  // Disallow unnecessary parentheses
  "no-extra-parens": "off",
  // Disallow unnecessary semicolons
  // Use `prettier`
  "no-extra-semi": "off",
  // Disallow overwriting functions written as function declarations
  "no-func-assign": "error",
  // Disallow assigning to imported bindings
  // "no-import-assign": "off",
  // Disallow function or variable declarations in nested blocks
  "no-inner-declarations": "error",
  // Disallow invalid regular expression strings in the RegExp constructor
  "no-invalid-regexp": "error",
  // Disallow irregular whitespace outside of strings and comments
  "no-irregular-whitespace": "error",
  // Disallow literal numbers that lose precision
  "no-loss-of-precision": "error",
  // Disallow characters which are made with multiple code points in character class syntax
  "no-misleading-character-class": "error",
  // Disallow new operators with global non-constructor functions
  "no-new-native-nonconstructor": "error",
  // Disallow the use of object properties of the global object (Math and JSON) as functions
  "no-obj-calls": "error",
  // Disallow returning values from Promise executor functions
  "no-promise-executor-return": "error",
  // Disallow calling some Object.prototype methods directly on objects
  "no-prototype-builtins": "error",
  // Disallow multiple spaces in a regular expression literal
  "no-regex-spaces": "error",
  // Disallow returning values from setters
  "no-setter-return": "error",
  // Disallow sparse arrays
  "no-sparse-arrays": "error",
  // Disallow template literal placeholder syntax in regular strings
  "no-template-curly-in-string": "error",
  // Avoid code that looks like two expressions but is actually one
  // Use `prettier`
  "no-unexpected-multiline": "off",
  // Disallow unreachable statements after a return, throw, continue, or break statement
  "no-unreachable": "error",
  // Disallow loops with a body that allows only one iteration
  "no-unreachable-loop": "error",
  // Disallow control flow statements in finally blocks
  "no-unsafe-finally": "error",
  // Disallow negating the left operand of relational operators
  "no-unsafe-negation": "error",
  // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
  "no-unsafe-optional-chaining": "error",
  // Disallow unused private class members
  "no-unused-private-class-members": "error",
  // Disallow useless backreferences in regular expressions
  "no-useless-backreference": "error",
  // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
  "require-atomic-updates": "error",
  // Disallow comparisons with the value NaN
  "use-isnan": "error",
  // Ensure that the results of typeof are compared against a valid string
  "valid-typeof": [
    "error",
    {
      requireStringLiterals: true,
    },
  ],
};
