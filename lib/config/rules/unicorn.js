'use strict';

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
    // Enforce a specific parameter name in catch clauses
    'unicorn/catch-error-name': [
        'error',
        {
            name: 'error'
        }
    ],
    // Enforce explicitly comparing the `length` property of a value
    'unicorn/explicit-length-check': 'error',
    // Enforce a case style for filenames
    'unicorn/filename-case': 'off',
    // Enforce specifying rules to disable in `eslint-disable` comments
    'unicorn/no-abusive-eslint-disable': 'error',
    // Disallow `process.exit()`
    'unicorn/no-process-exit': 'off',
    // Require new when throwing an error (fixable)
    'unicorn/throw-new-error': 'error',
    // Enforce lowercase identifier and uppercase value for number literals
    'unicorn/number-literal-case': 'error',
    // Require escape sequences to use uppercase values
    'unicorn/escape-case': 'error',
    // Require `Array.isArray()` instead of `instanceof Array`
    'unicorn/no-array-instanceof': 'error',
    // Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Enforce the use of unicode escapes instead of hexadecimal escapes.
    'unicorn/no-hex-escape': 'error',
    // Enforce correct `Error` subclassing.
    'unicorn/custom-error-definition': 'error',
    // Prefer `String#startsWith` & `String#endsWith` over more complex alternatives.
    'unicorn/prefer-starts-ends-with': 'error',
    // Need investigate
    // Enforce throwing `TypeError` in type checking conditions.
    'unicorn/prefer-type-error': 'off'
};
