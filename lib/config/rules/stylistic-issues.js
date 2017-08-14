"use strict";

// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  // Enforce linebreaks after opening and before closing array brackets
  "array-bracket-newline": "off",
  // Enforce consistent spacing inside array brackets
  "array-bracket-spacing": "off",
  // Enforce line breaks after each array element
  "array-element-newline": "off",
  // Enforce line breaks after each array element
  "block-spacing": "off",
  // Enforce consistent spacing inside single-line blocks
  "brace-style": "off",
  // Require camel case names
  camelcase: [
    "error",
    {
      properties: "always"
    }
  ],
  // Enforce or disallow capitalization of the first letter of a comment
  "capitalized-comments": "off",
  // Require or disallow trailing commas
  "comma-dangle": "off",
  // Enforce spacing before and after comma
  "comma-spacing": "off",
  // Enforce one true comma style
  "comma-style": "off",
  // Require or disallow padding inside computed properties
  "computed-property-spacing": "off",
  // Enforces consistent naming when capturing the current execution context
  "consistent-this": ["error", "_this"],
  // Enforce newline at the end of file, with no multiple empty lines
  "eol-last": "off",
  // Require or disallow spacing between function identifiers and their invocations
  "func-call-spacing": "off",
  // Requires function names to match the name of the variable or property to which they are
  "func-name-matching": ["error", "never"],
  // Don"t require function expressions to have a name
  "func-names": "off",
  // Enforces use of function declarations or expressions
  "func-style": [
    "error",
    "declaration",
    {
      allowArrowFunctions: true
    }
  ],
  // Blacklist certain identifiers to prevent them being used
  "id-blacklist": "off",
  // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  "id-length": [
    "error",
    {
      min: 2,
      max: Infinity,
      properties: "always",
      exceptions: ["$", "i", "j", "k", "v", "m", "n", "t", "_"]
    }
  ],
  // Require identifiers to match the provided regular expression
  "id-match": [
    "error",
    "^[$a-zA-Z_][a-zA-Z0-9_]*$",
    {
      properties: true
    }
  ],
  // This option sets a specific tab width for your code
  indent: "off",
  // Specify whether double or single quotes should be used in JSX attributes
  "jsx-quotes": "off",
  // Enforces spacing between keys and values in object literal properties
  "key-spacing": "off",
  // Enforce spacing before and after keywords
  "keyword-spacing": "off",
  // Enforce position of line comments
  "line-comment-position": "off",
  // Disallow mixed "LF" and "CRLF" as linebreaks
  "linebreak-style": ["error", "unix"],
  // Enforces empty lines around comments
  "lines-around-comment": "off",
  "max-depth": ["error", 4],
  "max-len": "off",
  "max-lines": "off",
  // Specify the maximum depth callbacks can be nested
  "max-nested-callbacks": ["error", 5],
  "max-params": ["error", 6],
  // Enforce a maximum number of statements allowed per line
  "max-statements-per-line": [
    "error",
    {
      max: 1
    }
  ],
  // Enforce a maximum number of statements allowed in function blocks
  "max-statements": "off",
  // Enforce newlines between operands of ternary expressions
  "multiline-ternary": "off",
  // Require a capital letter for constructors
  "new-cap": [
    "error",
    {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
      properties: true
    }
  ],
  // Disallow the omission of parentheses when invoking a constructor with no arguments
  "new-parens": "off",
  // Enforce newline after each call when chaining the calls
  "newline-per-chained-call": "off",
  // Disallow use of the Array constructor
  "no-array-constructor": "error",
  // Disallow bitwise operators
  "no-bitwise": "error",
  // Disallow use of the continue statement
  "no-continue": "error",
  // Disallow comments inline after code
  "no-inline-comments": "off",
  // Disallow if as the only statement in an else block
  "no-lonely-if": "error",
  // Disallow mixed spaces and tabs for indentation
  "no-mixed-operators": "off",
  // Disallow mixed spaces and tabs for indentation
  "no-mixed-spaces-and-tabs": "off",
  // Disallow use of chained assignment expressions
  "no-multi-assign": "error",
  // Disallow multiple empty lines
  "no-multiple-empty-lines": "off",
  // Disallow negated conditions
  "no-negated-condition": "off",
  // Disallow nested ternary expressions
  "no-nested-ternary": "error",
  // Disallow use of the Object constructor
  "no-new-object": "error",
  // Disallow space between function identifier and application
  "no-plusplus": "off",
  // Disallow specified syntax
  "no-restricted-syntax": [
    "error",
    {
      selector: "ForInStatement",
      message:
        "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array."
    },
    "DebuggerStatement",
    "WithStatement"
  ],
  "no-tabs": "off",
  // Disallow the use of ternary operators
  "no-ternary": "off",
  // Disallow trailing whitespace at the end of lines
  "no-trailing-spaces": "off",
  // Allow dangling underscores in identifiers
  "no-underscore-dangle": [
    "error",
    {
      allowAfterThis: false,
      allowAfterSuper: false,
      allow: [
        "_this",
        "_extend",
        "_read",
        "_write",
        "_writev",
        "_transform",
        "_flush"
      ],
      enforceInMethodNames: true
    }
  ],
  // Disallow the use of Boolean literals in conditional expressions
  // Prefer `a || b` over `a ? a : b`
  "no-unneeded-ternary": ["error", { defaultAssignment: false }],
  // Disallow whitespace before properties
  "no-whitespace-before-property": "off",
  // Disallow whitespace before properties
  "nonblock-statement-body-position": "off",
  // Disallow dangling underscores in identifiers
  "object-curly-newline": "off",
  // Require or disallow padding inside curly braces
  "object-curly-spacing": "off",
  // Enforce placing object properties on separate lines
  "object-property-newline": "off",
  // Require or disallow an newline around variable declarations
  "one-var-declaration-per-line": "off",
  // Allow or disallow one variable declaration per function
  "one-var": ["error", "never"],
  // Require assignment operator shorthand where possible or prohibit it entirely
  "operator-assignment": ["error", "always"],
  // Enforce operators to be placed before or after line breaks
  "operator-linebreak": "off",
  // Enforce padding within blocks
  "padded-blocks": "off",
  // Require or disallow padding lines between statements
  "padding-line-between-statements": [
    "error",
    // Statement `block` does't need to be covered
    // Newline between `block-like` (this matches statements that the last token is the closing brace of blocks)
    {
      blankLine: "always",
      prev: ["block-like"],
      next: "*"
    },
    {
      blankLine: "always",
      prev: "*",
      next: ["block-like"]
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
      next: ["cjs-export"]
    },
    // Require newline between blocks of `cjs-import` and any lines between `cjs-import`
    { blankLine: "always", prev: ["cjs-import"], next: "*" },
    { blankLine: "always", prev: "*", next: ["cjs-import"] },
    {
      blankLine: "any",
      prev: ["cjs-import"],
      next: ["cjs-import"]
    },
    // Statement `class` is covered `block-like`
    // Require newline between blocks of `const`,`let`,`var` and any lines between `const`,`let`,`var`
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"]
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
      next: ["export"]
    },
    // Statement `expression` does't need to be covered
    // Statement `for` is covered `block-like`
    // Statement `function` is covered `block-like`
    // Statement `if` is covered `block-like`
    // Require newline between blocks of `import` and any lines between `import`
    { blankLine: "always", prev: ["import"], next: "*" },
    { blankLine: "always", prev: "*", next: ["import"] },
    {
      blankLine: "any",
      prev: ["import"],
      next: ["import"]
    },
    // Statement `let` is covered `above`
    // Statement `multiline-block-like` is covered `block-like`
    // Require newline before `return`
    { blankLine: "always", prev: "*", next: "return" },
    // Statement `switch` is covered `block-like`
    // Newline before `throw`
    { blankLine: "always", prev: "*", next: "throw" }
    // Statement `try` is covered `block-like`
    // Statement `var` is covered `above`
    // Statement `while` is covered `block-like`
    // Statement `with` is covered `block-like`
  ],
  // Require quotes around object literal property names
  "quote-props": "off",
  // Specify whether backticks, double or single quotes should be used
  quotes: "off",
  // Require JSDoc comments
  "require-jsdoc": "off",
  // Enforce spacing before and after semicolons
  "semi-spacing": "off",
  // Enforce location of semicolons
  "semi-style": "off",
  // Require or disallow use of semicolons instead of ASI
  semi: "off",
  // Requires object keys to be sorted
  "sort-keys": [
    "error",
    "asc",
    {
      caseSensitive: true,
      natural: true
    }
  ],
  // Sort variables within the same declaration block
  "sort-vars": "off",
  // Require or disallow space before blocks
  "space-before-blocks": "off",
  // Require or disallow space before function opening parenthesis
  "space-before-function-paren": "off",
  // Require or disallow spaces inside parentheses
  "space-in-parens": "off",
  // Require spaces around operators
  "space-infix-ops": "off",
  // Require or disallow spaces before/after unary operators (words on by default, nonwords)
  "space-unary-ops": "off",
  // Require or disallow a space immediately following the // or /* in a comment
  "spaced-comment": [
    "error",
    "always",
    {
      line: {
        exceptions: ["-", "+"],
        markers: ["=", "!"] // Space here to support sprockets directives
      },
      block: {
        exceptions: ["-", "+"],
        markers: ["=", "!"], // Space here to support sprockets directives
        balanced: true
      }
    }
  ],
  // Enforce spacing around colons of switch statements
  "switch-colon-spacing": "off",
  // Require or disallow spacing between template tags and their literals
  "template-tag-spacing": "off",
  // Require or disallow Unicode byte order mark (BOM)
  "unicode-bom": "off",
  // Require regex literals to be wrapped in parentheses
  "wrap-regex": "off"
};
