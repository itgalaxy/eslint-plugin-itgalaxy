// https://github.com/sindresorhus/eslint-plugin-xo

module.exports = {
    // Enforce a specific parameter name in catch clauses
    'xo/catch-error-name': 'off',
    // Enforce explicitly comparing the `length` property of a value
    // 'xo/explicit-length-check': 'error',
    // Enforce a case style for filenames
    'xo/filename-case': 'off',
    // Enforce specifying rules to disable in `eslint-disable` comments
    'xo/no-abusive-eslint-disable': 'error',
    // Disallow `process.exit()`
    'xo/no-process-exit': 'off',
    // Require new when throwing an error (fixable)
    'xo/throw-new-error': 'off'
};
