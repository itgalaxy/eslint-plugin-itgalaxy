const avaRules = require('./rules/ava');

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
    },
    plugins: [
        'ava'
    ],
    rules: avaRules
};
