import jsxA11yRules from './rules/jsx-a11y';
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
    rules: Object.assign(
        reactRules,
        jsxA11yRules
    )
};
