const jsxA11yRules = require('./rules/jsx-a11y');
const reactRules = require('./rules/react');

module.exports = {
    extends: 'plugin:itgalaxy/esnext',
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
    rules: Object.assign(
        reactRules,
        jsxA11yRules
    )
};
