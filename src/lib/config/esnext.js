import ecmascript6Rules from './rules/ecmascript-6';
import importRules from './rules/import';
import promiseRules from './rules/promise';

export default {
    extends: 'plugin:itgalaxy/core',
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
        ecmascript6Rules,
        promiseRules,
        importRules
    )
};
