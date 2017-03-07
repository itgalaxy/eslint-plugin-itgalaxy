"use strict";

// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
    // Enforce return after a callback
    "callback-return": [
        "error",
        [
            "callback",
            "cb",
            "done",
            "next",
            "resolve",
            "reject"
        ]
    ],
    // Disallow require() outside of the top-level module scope
    "global-require": "error",
    // Enforces error handling in callbacks
    "handle-callback-err": [
        "error",
        "^.*(e|E)rr(or)?$"
    ],
    // Disallow require calls to be mixed with regular var declarations
    "no-mixed-requires": [
        "error",
        {
            "grouping": true,
            "allowCall": true
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

    // Enforce either module.exports or exports.
    "node/exports-style": [
        "error",
        "module.exports",
        {
            "allowBatchAssign": false
        }
    ],
    // Disallow usage deprecated api
    "node/no-deprecated-api": "error",
    // Disallow third-party modules which are hiding core modules.
    "node/no-hide-core-modules": "off",
    // Disallow import and export declarations for files that don't exist.
    "node/no-missing-import": "error",
    // Disallow require()s for files that don't exist.
    "node/no-missing-require": "error",
    // Disallow bin files that npm ignores.
    "node/no-unpublished-bin": "error",
    // Disallow import and export declarations for files that are not published.
    "node/no-unpublished-import": "error",
    // Disallow require()s for files that are not published.
    "node/no-unpublished-require": "error",
    // Disallow unsupported ECMAScript features on the specified version.
    "node/no-unsupported-features": [
        "warn",
        {
            "version": 7,
            "ignores": [
                "modules",
                "exponentialOperators",
                "asyncAwait",
                "trailingCommasInFunctionSyntax"
            ]
        }
    ],
    // Disallow exit as throw
    "node/process-exit-as-throw": "error",
    // Suggest correct usage of shebang.
    "node/shebang": "error"
};
