"use strict";

// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  // Require braces in arrow function body
  "arrow-body-style": [
    "error",
    "as-needed",
    {
      requireReturnForObjectLiteral: false
    }
  ],
  // Require parens in arrow function arguments
  "arrow-parens": "off",
  // Require space before/after arrow function's arrow
  "arrow-spacing": "off",
  // Verify super() callings in constructors
  "constructor-super": "error",
  // Enforce the spacing around the * in generator functions
  "generator-star-spacing": "off",
  // Disallow modifying variables of class declarations
  "no-class-assign": "error",
  // Disallow arrow functions where they could be confused with comparisons
  "no-confusing-arrow": "off",
  // Disallow modifying variables that are declared using const
  "no-const-assign": "error",
  // Disallow duplicate name in class members
  "no-dupe-class-members": "error",
  // Disallow duplicate module imports
  // Replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  "no-duplicate-imports": "off",
  // Disallow use of the new operator with the Symbol object
  "no-new-symbol": "error",
  // Restrict usage of specified node imports
  "no-restricted-imports": "off",
  // Disallow to use this/super before super() calling in constructors.
  "no-this-before-super": "error",
  // Disallow unnecessary computed property keys in object literals
  "no-useless-computed-key": "error",
  // Disallow unnecessary constructor
  "no-useless-constructor": "error",
  // Disallow renaming import, export, and destructured assignments to the same name
  "no-useless-rename": [
    "error",
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }
  ],
  // Require let or const instead of var
  "no-var": "error",
  // Require method and property shorthand syntax for object literals
  "object-shorthand": [
    "error",
    "always",
    {
      ignoreConstructors: false,
      avoidQuotes: true
    }
  ],
  // Suggest using arrow functions as callbacks
  "prefer-arrow-callback": [
    "error",
    {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }
  ],
  // Suggest using of const declaration for variables that are never modified after declared
  "prefer-const": [
    "error",
    {
      destructuring: "any",
      ignoreReadBeforeAssign: false
    }
  ],
  "prefer-destructuring": [
    "error",
    {
      array: true,
      object: true
    },
    {
      enforceForRenamedProperties: false
    }
  ],
  // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
  "prefer-numeric-literals": "error",
  // Suggest using the rest parameters instead of arguments
  "prefer-rest-params": "error",
  // Suggest using the spread operator instead of .apply()
  "prefer-spread": "error",
  // Suggest using template literals instead of strings concatenation
  "prefer-template": "error",
  // Disallow generator functions that do not have yield
  "require-yield": "error",
  // Enforce spacing between rest and spread operators and their expressions
  "rest-spread-spacing": "off",
  // Enforce sorted import declarations within modules
  "sort-imports": [
    "error",
    {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
    }
  ],
  // Require symbol descriptions
  "symbol-description": "error",
  // Enforce spacing around embedded expressions of template strings
  "template-curly-spacing": "off",
  // Enforce spacing around the * in yield* expressions
  "yield-star-spacing": "off"
};
