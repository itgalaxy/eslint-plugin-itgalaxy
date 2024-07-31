"use strict";

// See https://eslint.org/docs/latest/rules/#suggestions

const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  // Enforces getter/setter pairs in objects
  "accessor-pairs": "error",
  // Require braces in arrow function body
  "arrow-body-style": ["error", "as-needed"],
  // Treat var statements as if they were block scoped
  "block-scoped-var": "error",
  // Require camel case names
  camelcase: "error",
  // Enforce or disallow capitalization of the first letter of a comment
  // wHO CaRes?
  "capitalized-comments": "off",
  // Enforce that class methods utilize this
  "class-methods-use-this": "off",
  // Specify the maximum cyclomatic complexity allowed in a program
  complexity: "off",
  // Require return statements to either always or never specify values
  "consistent-return": "off",
  // Enforces consistent naming when capturing the current execution context
  "consistent-this": "off",
  // Specify curly brace conventions for all control statements
  curly: ["error", "all"],
  // Require default case in switch statements
  "default-case": "off",
  // Enforce default clauses in switch statements to be last
  "default-case-last": "error",
  // Enforce default parameters to be last
  "default-param-last": "error",
  // Encourages use of dot notation whenever possible
  "dot-notation": "error",
  // Require the use of === and !==
  eqeqeq: ["error", "always", { null: "always" }],
  // Requires function names to match the name of the variable or property to which they are
  "func-name-matching": [
    "error",
    "always",
    {
      considerPropertyDescriptor: true,
      includeCommonJSModuleExports: false,
    },
  ],
  // Don"t require function expressions to have a name
  // TODO maybe enable in future
  "func-names": "off",
  // Enforces use of function declarations or expressions
  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true,
    },
  ],
  // Require grouped accessor pairs in object literals and classes
  "grouped-accessor-pairs": "error",
  // Make sure for-in loops have an if statement
  "guard-for-in": "error",
  // Blacklist certain identifiers to prevent them being used
  // No need
  "id-denylist": "off",
  // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  "id-length": [
    "error",
    {
      min: 2,
      max: Number.POSITIVE_INFINITY,
      properties: "always",
      exceptions: [
        // jQuery
        "$",
        // Loops
        "i",
        "j",
        "k",
        "v",
        "m",
        "n",
        "t",
        // Lodash
        "_",
        // Comparison
        "a",
        "b",
      ],
    },
  ],
  // Require identifiers to match the provided regular expression
  "id-match": [
    "error",
    "^[$a-zA-Z_][$a-zA-Z0-9_]*$",
    {
      properties: true,
    },
  ],
  // Enforce or disallow variable initializations at definition
  // Situations are different
  "init-declarations": "off",
  // Require or disallow logical assignment logical operator shorthand
  "logical-assignment-operators": "error",
  // Enforce a maximum number of classes per file
  "max-classes-per-file": "off",
  // Enforce a maximum depth that blocks can be nested
  // No need
  "max-depth": "off",
  // Enforce a maximum number of lines per file
  // No need
  "max-lines": "off",
  // Enforce a maximum number of line of code in a function
  // No need
  "max-lines-per-function": "off",
  // Specify the maximum depth callbacks can be nested
  // No need
  "max-nested-callbacks": "off",
  // Enforce a maximum number of parameters in function definitions
  "max-params": "off",
  // Enforce a maximum number of statements allowed in function blocks
  // No need
  "max-statements": "off",
  // Require a capital letter for constructors
  "new-cap": [
    "error",
    {
      newIsCapExceptions: [],
      capIsNewExceptions: [
        // Immutable
        "Immutable.Map",
        "Immutable.Set",
        "Immutable.List",

        // jQuery
        "jQuery.Animation",
        "$.Animation",
        "jQuery.Callbacks",
        "$.Callbacks",
        "jQuery.Deferred",
        "$.Deferred",
        "jQuery.Event",
        "$.Event",
        "jQuery.Tween",
        "$.Tween",
      ],
    },
  ],
  // Disallow the use of alert, confirm, and prompt
  "no-alert": "error",
  // Disallow use of the Array constructor
  // Disable in favor `unicorn/no-new-array`
  "no-array-constructor": "off",
  // Disallow bitwise operators
  "no-bitwise": "off",
  // Disallow use of arguments.caller or arguments.callee
  "no-caller": "error",
  // disallow lexical declarations in case clauses
  "no-case-declarations": "error",
  // Disallow use of console
  "no-console": "error",
  // Disallow use of the continue statement
  // Continue can be useful in many cases
  "no-continue": "off",
  // Disallow deletion of variables
  "no-delete-var": "error",
  // Disallow division operators explicitly at beginning of regular expression
  "no-div-regex": "error",
  // Disallow else after a return in an if
  "no-else-return": "error",
  // Disallow empty statements
  "no-empty": "error",
  // Disallow use of empty functions
  // We're all grown ups here... Hope so
  "no-empty-function": "off",
  // Disallow empty static blocks
  "no-empty-static-block": "error",
  // Disallow comparisons to null without a type-checking operator
  "no-eq-null": "error",
  // Disallow use of eval()
  "no-eval": "error",
  // Disallow adding to native types
  "no-extend-native": "error",
  // Disallow unnecessary function binding
  "no-extra-bind": "error",
  // Disallow double-negation boolean casts in a boolean context
  "no-extra-boolean-cast": "error",
  // Disallow unnecessary labels
  "no-extra-label": "error",
  // Disallow assignments to native objects or read-only global variables
  "no-global-assign": "error",
  // Disallow the type conversions with shorter notations
  "no-implicit-coercion": [
    "error",
    {
      boolean: true,
      number: true,
      string: true,
      allow: [],
    },
  ],
  // Disallow var and named functions in global scope
  "no-implicit-globals": "error",
  // Disallow use of eval()-like methods
  "no-implied-eval": "error",
  // Disallow comments inline after code
  // It's not a problem
  "no-inline-comments": "off",
  // Disallow this keywords outside of classes or class-like objects
  "no-invalid-this": "off",
  // Disallow usage of __iterator__ property
  "no-iterator": "error",
  // Disallow labels that share a name with a variable
  "no-label-var": "error",
  // Disallow use of labeled statements
  "no-labels": "off",
  // Disallow unnecessary nested blocks
  "no-lone-blocks": "error",
  // Disallow if as the only statement in an else block
  "no-lonely-if": "error",
  // Disallow creation of functions within loops
  "no-loop-func": "error",
  // Disallow the use of magic numbers
  "no-magic-numbers": "off",
  // Disallow use of chained assignment expressions
  "no-multi-assign": "off",
  // Disallow use of multiline strings
  "no-multi-str": "error",
  // Disallow negated conditions
  // No need
  "no-negated-condition": "off",
  // Disallow nested ternary expressions
  // Sometimes useful, but requires good tuning, but `eslint` doesn't provide it
  "no-nested-ternary": "off",
  // Disallow use of new operator when not part of the assignment or comparison
  "no-new": "error",
  // Disallow use of new operator for Function object
  "no-new-func": "error",
  // Disallows creating new instances of String, Number, and Boolean
  // Better `unicorn/no-new-builtins`
  "no-new-wrappers": "off",
  // Disallow `\8` and `\9` escape sequences in string literals
  "no-nonoctal-decimal-escape": "error",
  // Disallow calls to the Object constructor without an argument
  "no-object-constructor": "error",
  // Disallow use of octal literals
  "no-octal": "error",
  // Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
  "no-octal-escape": "error",
  // Allow reassignment of function parameters
  "no-param-reassign": "error",
  // Disallow space between function identifier and application
  "no-plusplus": "off",
  // Disallow usage of __proto__ property
  "no-proto": "error",
  // Disallow declaring the same variable more than once
  "no-redeclare": "error",
  // Disallow multiple spaces in a regular expression literal
  "no-regex-spaces": "error",
  // Disallow specified names in exports
  "no-restricted-exports": "off",
  // Restrict usage of specified global variables
  "no-restricted-globals": ["error", ...restrictedGlobals],
  // Restrict usage of specified node imports
  "no-restricted-imports": "off",
  // Disallow certain properties on certain objects
  "no-restricted-properties": "off",
  // Disallow specified syntax
  "no-restricted-syntax": ["error", "DebuggerStatement", "WithStatement"],
  // Disallow use of assignment in return statement
  "no-return-assign": "error",
  // Disallow use of javascript: urls.,
  "no-script-url": "error",
  // Disallow use of comma operator
  "no-sequences": "error",
  // Disallow declaration of variables already declared in the outer scope
  "no-shadow": [
    "error",
    {
      builtinGlobals: false,
      allow: ["callback", "cb", "done", "next", "resolve", "reject"],
    },
  ],
  // Disallow shadowing of names such as arguments
  "no-shadow-restricted-names": "error",
  // Disallow the use of ternary operators
  // No need
  "no-ternary": "off",
  // Restrict what can be thrown as an exception
  "no-throw-literal": "error",
  // Disallow use of undefined when initializing variables
  "no-undef-init": "error",
  // Disallow use of undefined variable
  // Preferable to use "unicorn/no-useless-undefined"
  "no-undefined": "off",
  // Allow dangling underscores in identifiers
  // Preferable to use `private` properties and methods
  "no-underscore-dangle": "off",
  // Disallow the use of Boolean literals in conditional expressions
  // Prefer `a || b` over `a ? a : b`
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],
  // Disallow usage of expressions in statement position
  "no-unused-expressions": [
    "error",
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: true,
    },
  ],
  // Disallow unused labels
  "no-unused-labels": "error",
  // Disallow unnecessary .call() and .apply()
  "no-useless-call": "error",
  // Disallow unnecessary `catch` clauses
  "no-useless-catch": "error",
  // Disallow unnecessary computed property keys in object literals
  "no-useless-computed-key": "error",
  // Disallow unnecessary concatenation of literals or template literals
  "no-useless-concat": "error",
  // Disallow unnecessary constructor
  "no-useless-constructor": "error",
  // Disallow unnecessary usage of escape character
  "no-useless-escape": "error",
  // Disallow renaming import, export, and destructured assignments to the same name
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  // Disallow redundant return statements
  "no-useless-return": "error",
  // Require let or const instead of var
  "no-var": "error",
  // Disallow use of `void` operator
  "no-void": "error",
  // Disallow specified warning terms in comments
  "no-warning-comments": "off",
  // Disallow use of the `with` statement
  // Disable in favor `no-restricted-syntax` rule
  "no-with": "off",
  // Require method and property shorthand syntax for object literals
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  // Allow or disallow one variable declaration per function
  "one-var": ["error", "never"],
  // Require assignment operator shorthand where possible or prohibit it entirely
  "operator-assignment": ["error", "always"],
  // Suggest using arrow functions as callbacks
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  // Suggest using of const declaration for variables that are never modified after declared
  "prefer-const": [
    "error",
    {
      destructuring: "all",
      ignoreReadBeforeAssign: true,
    },
  ],
  // Require destructuring from arrays and/or objects
  "prefer-destructuring": [
    "error",
    {
      array: true,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  // Disallow the use of Math.pow in favor of the ** operator
  "prefer-exponentiation-operator": "error",
  // Enforce using named capture group in regular expression
  "prefer-named-capture-group": "off",
  // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
  "prefer-numeric-literals": "error",
  // disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
  "prefer-object-has-own": "error",
  // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
  "prefer-object-spread": "error",
  // Require using Error objects as Promise rejection reasons
  "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
  // Disallow use of the RegExp constructor in favor of regular expression literals
  "prefer-regex-literals": "error",
  // Suggest using the rest parameters instead of arguments
  "prefer-rest-params": "error",
  // Suggest using the spread operator instead of .apply()
  "prefer-spread": "error",
  // Suggest using template literals instead of strings concatenation
  "prefer-template": "error",
  // Require use of the second argument for parseInt()
  radix: ["error", "always"],
  // Disallow async functions which have no `await` expression
  "require-await": "error",
  // Enforce the use of `u` flag on RegExp
  "require-unicode-regexp": "off",
  // Disallow generator functions that do not have yield
  "require-yield": "error",
  // Enforce sorted import declarations within modules
  "sort-imports": "off",
  // Requires object keys to be sorted
  // No need
  "sort-keys": "off",
  // Sort variables within the same declaration block
  // No need
  "sort-vars": "off",
  // Controls location of Use Strict Directives
  strict: ["error", "safe"],
  // Require symbol descriptions
  "symbol-description": "error",
  // Requires to declare all vars on top of their containing scope
  // Because code is ugly
  "vars-on-top": "off",
  // Require or disallow Yoda conditions
  yoda: "error",
};
