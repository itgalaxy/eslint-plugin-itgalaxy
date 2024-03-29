"use strict";

// see http://eslint.org/docs/rules/#variables

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
  // Enforce or disallow variable initializations at definition
  // Situations are different
  "init-declarations": "off",
  // Require or disallow logical assignment logical operator shorthand
  // TODO enable after drop Node.js 14
  "logical-assignment-operators": "off",
  // Disallow deletion of variables
  "no-delete-var": "error",
  // Disallow labels that share a name with a variable
  "no-label-var": "error",
  // Restrict usage of specified global variables
  "no-restricted-globals": ["error", ...restrictedGlobals],
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
  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": [
    "error",
    {
      typeof: true,
    },
  ],
  // Disallow use of undefined when initializing variables
  "no-undef-init": "error",
  // Disallow use of undefined variable
  // Preferable to use "unicorn/no-useless-undefined"
  "no-undefined": "off",
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
};
