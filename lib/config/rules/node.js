"use strict";

// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
  // Enforce return after a callback
  "callback-return": [
    "error",
    ["callback", "cb", "done", "next", "resolve", "reject"]
  ],
  // Disallow require() outside of the top-level module scope
  "global-require": "error",
  // Enforces error handling in callbacks
  "handle-callback-err": ["error", "^.*(e|E)rr(or)?$"],
  // Disallow use of the Buffer() constructor
  // Disable rule in favor `node/no-deprecated-api`.
  "no-buffer-constructor": "off",
  // Disallow require calls to be mixed with regular var declarations
  "no-mixed-requires": [
    "error",
    {
      grouping: true,
      allowCall: true
    }
  ],
  // Disallow use of new operator with the require function
  "no-new-require": "error",
  // Disallow string concatenation with __dirname and __filename
  "no-path-concat": "error",
  // Disallow process.env
  "no-process-env": "error",
  // Disallow process.exit()
  "no-process-exit": "error",
  // Restrict usage of specified node modules
  "no-restricted-modules": "off",
  // Disallow certain properties on certain objects
  "no-restricted-properties": "off",
  // Disallow use of synchronous methods,
  "no-sync": "error",

  // Possible Errors
  // Disallow import declarations of extraneous packages
  "node/no-extraneous-import": "off",
  // Disallow require() expressions of extraneous packages
  "node/no-extraneous-require": "off",
  // Disallow import and export declarations for files that don't exist.
  "node/no-missing-import": "off",
  // Disallow require()s for files that don't exist.
  "node/no-missing-require": "off",
  // Disallow bin files that npm ignores.
  "node/no-unpublished-bin": "error",
  // Disallow import and export declarations for files that are not published.
  "node/no-unpublished-import": "error",
  // Disallow require()s for files that are not published.
  "node/no-unpublished-require": "error",
  // Disallow unsupported ECMAScript built-ins on the specified version
  "node/no-unsupported-features/es-builtins": "error",
  // Disallow unsupported ECMAScript syntax on the specified version
  "node/no-unsupported-features/es-syntax": "error",
  // Disallow unsupported Node.js built-in APIs on the specified version
  "node/no-unsupported-features/node-builtins": "error",
  // Disallow exit as throw
  "node/process-exit-as-throw": "error",
  // Suggest correct usage of shebang.
  "node/shebang": "error",

  // Best Practices
  // Disallow usage deprecated api
  "node/no-deprecated-api": "error",

  // Stylistic Issues
  // Enforce either module.exports or exports.
  "node/exports-style": [
    "error",
    "module.exports",
    {
      allowBatchAssign: false
    }
  ],
  "node/prefer-global/buffer": ["error", "always"],
  "node/prefer-global/console": ["error", "always"],
  "node/prefer-global/process": ["error", "always"],
  // Enable after migrate on node@10
  "node/prefer-global/url-search-params": "off",
  "node/prefer-global/url": "off"
};
