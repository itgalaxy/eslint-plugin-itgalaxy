"use strict";

// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  // Enforce linebreaks after opening and before closing array brackets
  // Prettier does the job
  "array-bracket-newline": "off",
  // Enforce consistent spacing inside array brackets
  // Prettier does the job
  "array-bracket-spacing": "off",
  // Enforce line breaks after each array element
  // Prettier does the job
  "array-element-newline": "off",
  // Enforce line breaks after each array element
  // Prettier does the job
  "block-spacing": "off",
  // Enforce consistent spacing inside single-line blocks
  // Prettier does the job
  "brace-style": "off",
  // Require camel case names
  camelcase: [
    "error",
    {
      properties: "always",
    },
  ],
  // Enforce or disallow capitalization of the first letter of a comment
  // wHO CaRes?
  "capitalized-comments": "off",
  // Require or disallow trailing commas
  // Prettier does the job
  "comma-dangle": "off",
  // Enforce spacing before and after comma
  // Prettier does the job
  "comma-spacing": "off",
  // Enforce one true comma style
  // Prettier does the job
  "comma-style": "off",
  // Require or disallow padding inside computed properties
  // Prettier does the job
  "computed-property-spacing": "off",
  // Enforces consistent naming when capturing the current execution context
  "consistent-this": ["error", "self"],
  // Enforce newline at the end of file, with no multiple empty lines
  // Prettier does the job
  "eol-last": "off",
  // Require or disallow spacing between function identifiers and their invocations
  // Prettier does the job
  "func-call-spacing": "off",
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
  // Enforce line breaks between arguments of a function call
  // Prettier does the job
  "function-call-argument-newline": "off",
  // Enforce consistent line breaks inside function parentheses
  // Prettier does the job
  "function-paren-newline": "off",
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
    "^[$a-zA-Z_][a-zA-Z0-9_]*$",
    {
      properties: true,
    },
  ],
  // Enforce the location of arrow function bodies
  // Prettier does the job
  "implicit-arrow-linebreak": "off",
  // This option sets a specific tab width for your code
  // Prettier does the job
  indent: "off",
  // Specify whether double or single quotes should be used in JSX attributes
  // Prettier does the job
  "jsx-quotes": "off",
  // Enforces spacing between keys and values in object literal properties
  // Prettier does the job
  "key-spacing": "off",
  // Enforce spacing before and after keywords
  // Prettier does the job
  "keyword-spacing": "off",
  // Enforce position of line comments
  // Prettier does the job
  "line-comment-position": "off",
  // Disallow mixed "LF" and "CRLF" as linebreaks
  // Prettier does the job
  "linebreak-style": "off",
  // Enforces empty lines around comments
  // Prettier does the job
  "lines-around-comment": "off",
  // Require or disallow an empty line between class members
  // Prettier does the job
  "lines-between-class-members": "error",
  // Enforce a maximum depth that blocks can be nested
  // No need
  "max-depth": "off",
  // Enforce a maximum line length
  // No need
  "max-len": "off",
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
  "max-params": ["error", 7],
  // Enforce a maximum number of statements allowed per line
  // Prettier does the job
  "max-statements-per-line": "off",
  // Enforce a particular style for multiline comments
  // Comments can be different
  "multiline-comment-style": "off",
  // Enforce a maximum number of statements allowed in function blocks
  // No need
  "max-statements": "off",
  // Enforce newlines between operands of ternary expressions
  // No need
  "multiline-ternary": "off",
  // Require a capital letter for constructors
  "new-cap": [
    "error",
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: true,
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
      properties: true,
    },
  ],
  // Disallow the omission of parentheses when invoking a constructor with no arguments
  // Prettier does the job
  "new-parens": "off",
  // Enforce newline after each call when chaining the calls
  // Prettier does the job
  "newline-per-chained-call": "off",
  // Disallow use of the Array constructor
  // Disable in favor `unicorn/no-new-array`
  "no-array-constructor": "off",
  // Disallow bitwise operators
  "no-bitwise": "error",
  // Disallow use of the continue statement
  // Continue can be useful in many cases
  "no-continue": "off",
  // Disallow comments inline after code
  // It's not a problem
  "no-inline-comments": "off",
  // Disallow if as the only statement in an else block
  "no-lonely-if": "error",
  // Disallow mixed spaces and tabs for indentation
  // No need
  "no-mixed-operators": "off",
  // Disallow mixed spaces and tabs for indentation
  // Prettier does the job
  "no-mixed-spaces-and-tabs": "off",
  // Disallow use of chained assignment expressions
  "no-multi-assign": "error",
  // Disallow multiple empty lines
  // Prettier does the job
  "no-multiple-empty-lines": "off",
  // Disallow negated conditions
  // No need
  "no-negated-condition": "off",
  // Disallow nested ternary expressions
  // Sometimes useful, but requires good tuning, but `eslint` doesn't provide it
  "no-nested-ternary": "off",
  // Disallow use of the Object constructor
  "no-new-object": "error",
  // Disallow space between function identifier and application
  "no-plusplus": [
    "error",
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  // Disallow specified syntax
  "no-restricted-syntax": [
    "error",
    "DebuggerStatement",
    "LabeledStatement",
    "WithStatement",
  ],
  // Disallow all tabs
  // Prettier does the job
  "no-tabs": "off",
  // Disallow the use of ternary operators
  // No need
  "no-ternary": "off",
  // Disallow trailing whitespace at the end of lines
  // Prettier does the job
  "no-trailing-spaces": "off",
  // Allow dangling underscores in identifiers
  // Preferable to use `private` properties and methods
  "no-underscore-dangle": "off",
  // Disallow the use of Boolean literals in conditional expressions
  // Prefer `a || b` over `a ? a : b`
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],
  // Disallow whitespace before properties
  // Prettier does the job
  "no-whitespace-before-property": "off",
  // Disallow whitespace before properties
  // Prettier does the job
  "nonblock-statement-body-position": "off",
  // Disallow dangling underscores in identifiers
  // Prettier does the job
  "object-curly-newline": "off",
  // Require or disallow padding inside curly braces
  // Prettier does the job
  "object-curly-spacing": "off",
  // Enforce placing object properties on separate lines
  // Prettier does the job
  "object-property-newline": "off",
  // Require or disallow an newline around variable declarations
  // Prettier does the job
  "one-var-declaration-per-line": "off",
  // Allow or disallow one variable declaration per function
  "one-var": ["error", "never"],
  // Require assignment operator shorthand where possible or prohibit it entirely
  "operator-assignment": ["error", "always"],
  // Enforce operators to be placed before or after line breaks
  // Prettier does the job
  "operator-linebreak": "off",
  // Enforce padding within blocks
  // Prettier does the job
  "padded-blocks": "off",
  // Require or disallow padding lines between statements
  "padding-line-between-statements": [
    "error",
    // Statement `block` does't need to be covered
    // Newline between `block-like` (this matches statements that the last token is the closing brace of blocks)
    {
      blankLine: "always",
      prev: ["block-like"],
      next: "*",
    },
    {
      blankLine: "always",
      prev: "*",
      next: ["block-like"],
    },
    // Allow any newlines between `expression`
    {
      blankLine: "any",
      prev: ["expression"],
      next: ["expression"],
    },
    // Disable newline between `expression` and `break`
    // Require newline between `block-like` and `break`
    // Statement `break` does't need to be covered
    // Disable newline before and after `case`
    { blankLine: "never", prev: ["case"], next: "*" },
    { blankLine: "never", prev: "*", next: ["case"] },
    // Require newline between blocks of `cjs-export` and any lines between `cjs-export`
    { blankLine: "always", prev: ["cjs-export"], next: "*" },
    { blankLine: "always", prev: "*", next: ["cjs-export"] },
    {
      blankLine: "any",
      prev: ["cjs-export"],
      next: ["cjs-export"],
    },
    // Require newline between blocks of `cjs-import` and any lines between `cjs-import`
    { blankLine: "always", prev: ["cjs-import"], next: "*" },
    { blankLine: "always", prev: "*", next: ["cjs-import"] },
    {
      blankLine: "any",
      prev: ["cjs-import"],
      next: ["cjs-import"],
    },
    // Statement `class` is covered `block-like`
    // Require newline between blocks of `const`,`let`,`var` and any lines between `const`,`let`,`var`
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    },
    // Statement `const` is covered above
    // Statement `continue` does't need to be covered
    // Statement `debugger` does't need to be covered
    // Disable newline before and after `default`
    { blankLine: "never", prev: ["default"], next: "*" },
    { blankLine: "never", prev: "*", next: ["default"] },
    // Require newline between directive and never newlines between directive
    { blankLine: "always", prev: "directive", next: "*" },
    { blankLine: "never", prev: "directive", next: "directive" },
    // Statement `do` is covered `block-like`
    // Statement `empty` does't need to be covered
    // Require newline between blocks of `export` and any lines between `export`
    { blankLine: "always", prev: ["export"], next: "*" },
    { blankLine: "always", prev: "*", next: ["export"] },
    {
      blankLine: "any",
      prev: ["export"],
      next: ["export"],
    },
    // Statement `for` is covered `block-like`
    // Statement `function` is covered `block-like`
    // Statement `if` is covered `block-like`
    // Require newline between blocks of `import` and any lines between `import`
    { blankLine: "always", prev: ["import"], next: "*" },
    { blankLine: "always", prev: "*", next: ["import"] },
    {
      blankLine: "any",
      prev: ["import"],
      next: ["import"],
    },
  ],
  // Disallow the use of Math.pow in favor of the ** operator
  "prefer-exponentiation-operator": "error",
  // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
  "prefer-object-spread": "error",
  // Require quotes around object literal property names
  // Prettier does the job
  "quote-props": "off",
  // Specify whether backticks, double or single quotes should be used
  quotes: [
    "error",
    "double",
    { avoidEscape: true, allowTemplateLiterals: false },
  ],
  // Enforce spacing before and after semicolons
  // Prettier does the job
  "semi-spacing": "off",
  // Enforce location of semicolons
  // Prettier does the job
  "semi-style": "off",
  // Require or disallow use of semicolons instead of ASI
  // Prettier does the job
  semi: "off",
  // Requires object keys to be sorted
  // No need
  "sort-keys": "off",
  // Sort variables within the same declaration block
  // No need
  "sort-vars": "off",
  // Require or disallow space before blocks
  // Prettier does the job
  "space-before-blocks": "off",
  // Require or disallow space before function opening parenthesis
  // Prettier does the job
  "space-before-function-paren": "off",
  // Require or disallow spaces inside parentheses
  // Prettier does the job
  "space-in-parens": "off",
  // Require spaces around operators
  // Prettier does the job
  "space-infix-ops": "off",
  // Require or disallow spaces before/after unary operators (words on by default, nonwords)
  // Prettier does the job
  "space-unary-ops": "off",
  // Require or disallow a space immediately following the // or /* in a comment
  "spaced-comment": [
    "error",
    "always",
    {
      line: {
        markers: ["=", "!"], // Space here to support sprockets directives
        exceptions: ["-", "+"],
      },
      block: {
        markers: ["=", "!"], // Space here to support sprockets directives
        exceptions: ["-", "+"],
        balanced: true,
      },
    },
  ],
  // Enforce spacing around colons of switch statements
  // Prettier does the job
  "switch-colon-spacing": "off",
  // Require or disallow spacing between template tags and their literals
  // Prettier does the job
  "template-tag-spacing": "off",
  // Require or disallow Unicode byte order mark (BOM)
  // Prettier keep Unicode byte order mark
  "unicode-bom": ["error", "never"],
  // Require regex literals to be wrapped in parentheses
  // Prettier does the job
  "wrap-regex": "off",
};
