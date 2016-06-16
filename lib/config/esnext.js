var merge = require('merge');

module.exports = {
    extends: 'plugin:itgalaxy/core',
    parser: 'babel-eslint',
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
    },
    plugins: [
        'babel',
        'promise',
        // 'sort-class-members',
        'import',
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
        require('./rules/babel'),
        // require('./rules/sort-class-members'),
        require('./rules/import'),
        {
            'generator-star-spacing': 'off',
            'new-cap': 'off',
            'array-bracket-spacing': 'off',
            'object-curly-spacing': 'off',
            'object-shorthand': 'off',
            'arrow-parens': 'off',
            'no-await-in-loop': 'off',
            'flow-object-type': 'off'
        }
    ),
};
