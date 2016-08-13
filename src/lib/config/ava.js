import avaRules from './rules/ava';

export default {
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
