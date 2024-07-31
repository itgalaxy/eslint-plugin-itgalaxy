"use strict";

// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
  // Possible Errors
  // Enforces error handling in callbacks
  "n/handle-callback-err": ["error", "^.*(e|E)rr(or)?$"],
  // Require correct usage of hashbang
  "n/hashbang": "error",
  // Ensures the Node.js error-first callback pattern is followed
  "n/no-callback-literal": "off",
  // Disallow the assignment to `exports`
  // "n/no-exports-assign": "off",
  // Disallow import declarations of extraneous packages
  // Use `import/no-extraneous-dependencies` rule
  // "n/no-extraneous-import": "off",
  // Disallow require() expressions of extraneous packages
  // Use `import/no-extraneous-dependencies` rule
  // "n/no-extraneous-require": "off",
  // Disallow import and export declarations for files that don't exist.
  // Use `import/no-unresolved` rule
  // "n/no-missing-import": "off",
  // Disallow require()s for files that don't exist.
  // Use `import/no-unresolved` rule
  // "n/no-missing-require": "off",
  // Disallow use of new operator with the require function
  // "n/no-new-require": "off",
  // Disallow string concatenation with __dirname and __filename
  "n/no-path-concat": "error",
  // Disallow the use of process.exit()
  // Prefer to use `unicorn/no-process-exit`
  "n/no-process-exit": "off",
  // Disallow bin files that npm ignores.
  "n/no-unpublished-bin": "error",
  // Disallow import and export declarations for files that are not published.
  // "n/no-unpublished-import": "off",
  // Disallow require()s for files that are not published.
  // "n/no-unpublished-require": "off",
  // Disallow unsupported ECMAScript built-ins on the specified version
  "n/no-unsupported-features/es-builtins": "error",
  // Disallow unsupported ECMAScript syntax on the specified version
  // "n/no-unsupported-features/es-syntax": "error",
  // Disallow unsupported Node.js built-in APIs on the specified version
  "n/no-unsupported-features/node-builtins": "error",
  // Disallow exit as throw
  "n/process-exit-as-throw": "error",
  // Suggest correct usage of shebang.
  // Deprecated
  "n/shebang": "off",

  // Best Practices
  // Disallow usage deprecated api
  "n/no-deprecated-api": "error",

  // Stylistic Issues
  // Enforce either module.exports or exports.
  // Enforce return after a callback
  "n/callback-return": "off",
  // Enforce either module.exports or exports.
  // "n/exports-style": "off",
  // Enforce the style of file extensions in import declarations
  // Disable in favor `import/extensions`
  // "n/file-extension-in-import": "off",
  // Disallow require() outside of the top-level module scope
  // Useful for optimizations
  "n/global-require": "off",
  // Disallow require calls to be mixed with regular var declarations
  // "n/no-mixed-requires": "off",
  // Disallow process.env
  "n/no-process-env": "off",
  // Disallow specified modules when loaded by require,
  // "n/no-restricted-import": "off",
  // Restrict usage of specified node modules
  // "n/no-restricted-require": "off",
  // Disallow use of synchronous methods,
  "n/no-sync": "off",
  // Enforce either `Buffer` or `require("buffer").Buffer`
  "n/prefer-global/buffer": ["error", "always"],
  // Enforce either `console` or `require("console")`
  "n/prefer-global/console": ["error", "always"],
  // Enforce either `process` or `require("process")`
  "n/prefer-global/process": ["error", "always"],
  // Enforce either `TextDecoder` or `require("util").TextDecoder`
  "n/prefer-global/text-decoder": ["error", "always"],
  // Enforce either `TextEncoder` or `require("util").TextEncoder`
  "n/prefer-global/text-encoder": ["error", "always"],
  // Enforce either `URLSearchParams` or `require("url").URLSearchParams`
  "n/prefer-global/url-search-params": ["error", "always"],
  // Enforce using the node: protocol when importing Node.js builtin modules.
  "n/prefer-node-protocol": "error",
  // Enforce either `URL` or `require("url").URL`
  "n/prefer-global/url": ["error", "always"],
  // No need
  // Enforce require("dns").promises
  "n/prefer-promises/dns": "off",
  // No need
  // Enforce require("fs").promises
  "n/prefer-promises/fs": "off",
};
