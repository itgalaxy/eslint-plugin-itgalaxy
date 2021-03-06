"use strict";

// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
  // Disallow use of the Buffer() constructor
  // Disable rule in favor `node/no-deprecated-api`.
  "no-buffer-constructor": "off",
  // Disallow process.exit()
  // Disallow certain properties on certain objects
  "no-restricted-properties": "off",
  // Possible Errors
  // Ensures the Node.js error-first callback pattern is followed
  "node/no-callback-literal": "off",
  // Disallow the assignment to `exports`
  "node/no-exports-assign": "error",
  // Disallow import declarations of extraneous packages
  // Use `import/no-extraneous-dependencies` rule
  "node/no-extraneous-import": "off",
  // Disallow require() expressions of extraneous packages
  // Use `import/no-extraneous-dependencies` rule
  "node/no-extraneous-require": "off",
  // Disallow import and export declarations for files that don't exist.
  // Use `import/no-unresolved` rule
  "node/no-missing-import": "off",
  // Disallow require()s for files that don't exist.
  // Use `import/no-unresolved` rule
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
  // "node/no-unsupported-features/es-syntax": "error",
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
      allowBatchAssign: false,
    },
  ],
  // Enforce the style of file extensions in import declarations
  // Disable in favor `import/extensions`
  "node/file-extension-in-import": "off",
  // Enforce either `Buffer` or `require("buffer").Buffer`
  "node/prefer-global/buffer": ["error", "always"],
  // Enforce either `console` or `require("console")`
  "node/prefer-global/console": ["error", "always"],
  // Enforce either `process` or `require("process")`
  "node/prefer-global/process": ["error", "always"],
  // Enforce either `TextDecoder` or `require("util").TextDecoder`
  "node/prefer-global/text-decoder": "off",
  // Enforce either `TextEncoder` or `require("util").TextEncoder`
  "node/prefer-global/text-encoder": "off",
  // Enable after migrate on node@10
  // Enforce either `URLSearchParams` or `require("url").URLSearchParams`
  "node/prefer-global/url-search-params": "off",
  // Enable after migrate on node@10
  // enforce either `URL` or `require("url").URL`
  "node/prefer-global/url": "off",
  // Enable after migrate on node@10
  // Enforce require("dns").promises
  "node/prefer-promises/dns": "off",
  // Enable after migrate on node@10
  // Enforce require("fs").promises
  "node/prefer-promises/fs": "off",
  // Enforce return after a callback
  "node/callback-return": [
    "error",
    ["callback", "cb", "done", "resolve", "reject"],
  ],
  // Disallow require() outside of the top-level module scope
  // Useful for optimizations
  "node/global-require": "off",
  // Enforces error handling in callbacks
  "node/handle-callback-err": ["error", "^.*(e|E)rr(or)?$"],
  // Disallow use of new operator with the require function
  // "node/no-new-require": "off",
  // Disallow require calls to be mixed with regular var declarations
  // "node/no-mixed-requires": "off",
  // Disallow string concatenation with __dirname and __filename
  "node/no-path-concat": "error",
  // Disallow process.env
  "node/no-process-env": "off",
  // Disallow the use of process.exit()
  // Prefer to use `unicorn/no-process-exit`
  "node/no-process-exit": "off",
  // Restrict usage of specified node modules
  "node/no-restricted-require": "off",
  // Disallow use of synchronous methods,
  "node/no-sync": "error",
  // Disallow specified modules when loaded by require,
  "node/no-restricted-import": "off",
};
