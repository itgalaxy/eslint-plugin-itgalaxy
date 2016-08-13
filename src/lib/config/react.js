import jsxA11yRules from './rules/jsx-a11y';
import merge from 'merge';
import reactRules from './rules/react';

export default {
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
    rules: merge(
        reactRules,
        jsxA11yRules
    )
};
