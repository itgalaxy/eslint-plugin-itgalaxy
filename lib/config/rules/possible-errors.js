"use strict";

// see http://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Enforces return statements in callbacks of array's methods
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],
  // Verify super() callings in constructors
  "constructor-super": "error",
  // Enforce `for` loop update clause moving the counter in the right direction.
  "for-direction": "error",
  // Enforce `return` statements in getters
  "getter-return": ["error"],
  // Disallow using an async function as a Promise executor
  "no-async-promise-executor": "error",
  // Disallow `await` inside of loops
  "no-await-in-loop": "error",
  // Disallow modifying variables of class declarations
  "no-class-assign": "error",
  // Disallow comparing against -0
  "no-compare-neg-zero": "error",
  // Disallow assignment in conditional expressions
  "no-cond-assign": "error",
  // Disallow modifying variables that are declared using const
  "no-const-assign": "error",
  // Disallow expressions where the operation doesn't affect the value
  "no-constant-binary-expression": "error",
  // Disallow use of constant expressions in conditions
  "no-constant-condition": "error",
  // Disallow returning value in constructor
  "no-constructor-return": "error",
  // Disallow control characters in regular expressions
  "no-control-regex": "error",
  // Disallow use of debugger
  // Disable in favor `no-restricted-syntax` rule
  "no-debugger": "off",
  // Disallow duplicate arguments in functions
  "no-dupe-args": "error",
  // Disallow duplicate name in class members
  "no-dupe-class-members": "error",
  // Disallow duplicate conditions in if-else-if chains
  "no-dupe-else-if": "error",
  // Disallow duplicate keys when creating object literals
  "no-dupe-keys": "error",
  // Disallow a duplicate case label.
  "no-duplicate-case": "error",
  // Disallow duplicate module imports
  // Replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  "no-duplicate-imports": "off",
  // Disallow the use of empty character classes in regular expressions
  "no-empty-character-class": "error",
  // Disallow use of empty destructuring patterns
  "no-empty-pattern": "error",
  // Disallow assigning to the exception in a catch block
  "no-ex-assign": "error",
  // Disallow fallthrough of case statements
  "no-fallthrough": "error",
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
  // Disallow assignments where both sides are exactly the same
  "no-self-assign": "error",
  // Disallow comparisons where both sides are exactly the same
  "no-self-compare": "error",
  // Disallow returning values from setters
  "no-setter-return": "error",
  // Disallow sparse arrays
  "no-sparse-arrays": "error",
  // Disallow template literal placeholder syntax in regular strings
  "no-template-curly-in-string": "error",
  // Disallow to use this/super before super() calling in constructors.
  "no-this-before-super": "error",
  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": [
    "error",
    {
      typeof: true,
    },
  ],
  // Avoid code that looks like two expressions but is actually one
  // Use `prettier`
  "no-unexpected-multiline": "off",
  // Disallow unmodified conditions of loops
  "no-unmodified-loop-condition": "error",
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
  // Disallow declaration of variables that are not used in the code
  "no-unused-vars": [
    "error",
    {
      vars: "all",
      varsIgnorePattern: "^_",
      args: "after-used",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      ignoreRestSiblings: true,
    },
  ],
  // Disallow use of variables before they are defined
  "no-use-before-define": [
    "error",
    { functions: true, classes: true, variables: true },
  ],
  // Disallow variable assignments when the value is not used
  // "no-useless-assignment":"error",
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
