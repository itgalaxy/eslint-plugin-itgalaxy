var reactRules = require('./rules/react');
var jsxA11yRules = require('./rules/jsx-a11y');
var merge = require('merge');

module.exports = {
    extends: './esnext.js',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    globals: {
        fetch: true,
        ReactElement: true,
        ReactClass: true
    },
    plugins: [
        'react',
        'jsx-a11y'
    ],
    rules: merge(
        reactRules,
        jsxA11yRules
    )
};
