const path = require('path');
const ecmascript6Rules = require('./rules/ecmascript-6');
const importRules = require('./rules/import');
const promiseRules = require('./rules/promise');

module.exports = {
    extends: path.resolve(__dirname, './core.js'),
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
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
            '\\.(coffee|scss|css|less|hbs|svg|json)$'
        ]
    },
    rules: Object.assign(
        {},
        ecmascript6Rules,
        promiseRules,
        importRules
    )
};
