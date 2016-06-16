// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
    // enforce return after a callback
    'callback-return': [
        'error',
        [
            'callback',
            'cb',
            'done',
            'next'
        ]
    ],
    // disallow require() outside of the top-level module scope
    'global-require': 'error',
    // Enforces error handling in callbacks
    'handle-callback-err': [
        'error',
        '^.*(e|E)rr(or)?$'
    ],
    // Disallow mixing regular variable and require declarations
    'no-mixed-requires': [
        'error',
        {
            'grouping': true,
            'allowCall': true
        }
    ],
    // Disallow use of new operator with the require function
    'no-new-require': 'error',
    // Disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',
    // Disallow process.env
    'no-process-env': 'error',
    // Disallow process.exit()
    'no-process-exit': 'error',
    // Restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // Disallow use of synchronous methods
    'no-sync': 'error',

    // Disallow usage deprecated api
    'node/no-deprecated-api': 'error',
    // Disallow import and export declarations for files that don't exist.
    'node/no-missing-import': 'error',
    // Disallow require()s for files that don't exist.
    'node/no-missing-require': 'error',
    // Disallow import and export declarations for files that are not published.
    'node/no-unpublished-import': 'off',
    // Disallow require()s for files that are not published.
    'node/no-unpublished-require': 'off',
    // Disallow unsupported ECMAScript features on the specified version.
    'node/no-unsupported-features': [
        'warn',
        {
            'version': 6
        }
    ],
    // Disallow exit as throw
    'node/process-exit-as-throw': 'error',
    // Suggest correct usage of shebang.
    'node/shebang': 'error',
};
