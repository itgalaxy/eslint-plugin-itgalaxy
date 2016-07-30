var ecmascript6Rules = require('./rules/ecmascript-6');
var promiseRules = require('./rules/promise');
var importRules = require('./rules/import');
var merge = require('merge');

module.exports = {
    extends: './core.js',
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    plugins: [
        'promise',
        'import'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.json'
                ]
            }
        },
        'import/ignore': [
            'node_modules',
            '.coffee$',
            '.(scss|less|css)$'
        ]
    },
    rules: merge(
        ecmascript6Rules,
        promiseRules,
        importRules
    )
};
