import ecmascript6Rules from './rules/ecmascript-6';
import importRules from './rules/import';
import merge from 'merge';
import promiseRules from './rules/promise';

export default {
    extends: 'plugin:itgalaxy/core',
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
