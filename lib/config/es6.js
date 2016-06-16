var merge = require('merge');

module.exports = {
    extends: 'plugin:itgalaxy/core',
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
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
        require('./rules/ecmascript-6'),
        require('./rules/promise'),
        require('./rules/import')
    )
};
