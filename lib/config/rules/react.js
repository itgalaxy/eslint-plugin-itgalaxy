'use strict';

module.exports = {
    // Prevent missing displayName in a React component definition
    'react/display-name': [
        'error',
        {
            ignoreTranspilerName: false
        }
    ],
    // Forbid certain props on Components
    'react/forbid-component-props': 'off',
    // Forbid certain propTypes
    'react/forbid-prop-types': [
        'error',
        {
            forbid: [
                'any',
                'array'
            ]
        }
    ],
    // Prevent passing children as props
    'react/no-children-prop': 'error',
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'error',
    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',
    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'error',
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',
    // Prevent usage of isMounted
    'react/no-is-mounted': 'off',
    // Prevent multiple component definition per file
    'react/no-multi-comp': [
        'error',
        {
            'ignoreStateless': true
        }
    ],
    // Prevent usage of the return value of `React.render`.
    'react/no-render-return-value': 'error',
    // Prevent usage of setState
    'react/no-set-state': 'off',
    // Prevent using string references in `ref` attribute.
    'react/no-string-refs': 'error',
    // Prevent using string references in `ref` attribute.
    'react/no-unescaped-entities': 'error',
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',
    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 'off',
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': [
        'error',
        'always'
    ],
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 'off',
    // Prevent missing props validation in a React component definition
    'react/prop-types': [
        'error',
        {
            'ignore': [],
            'customValidators': []
        }
    ],
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',
    // Enforce component methods order
    'react/sort-comp': [
        'error',
        {
            order: [
                'static-methods',
                'lifecycle',
                '/^on.+$/',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                'everything-else',
                '/^render.+$/',
                'render'
            ]
        }
    ],
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': [
        'error',
        {
            'callbacksLast': true,
            'ignoreCase': false,
            'requiredFirst': true
        }
    ],
    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': [
        'error',
        'never'
    ],
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [
        'error',
        'line-aligned'
    ],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': [
        'error',
        'never',
        {
            allowMultiline: true
        }
    ],
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': [
        'error',
        'never'
    ],
    'react/jsx-filename-extension': 'error',
    // Enforce position of the first prop in JSX
    'react/jsx-first-prop-new-line': [
        'error',
        'multiline-multiprop'
    ],
    'react/jsx-handler-names': 'error',
    // Validate JSX indentation
    'react/jsx-indent': [
        'error',
        4
    ],
    // Validate props indentation in JSX
    'react/jsx-indent-props': [
        'error',
        4
    ],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': [
        'error',
        {
            'maximum': 3
        }
    ],
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': [
        'error',
        {
            'ignoreRefs': true,
            'allowArrowFunctions': true,
            'allowBind': false
        }
    ],
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'error',
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'error',
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': [
        'error',
        {
            'callbacksLast': true,
            'shorthandFirst': true,
            'ignoreCase': false
        }
    ],
    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': [
        'error',
        'always'
    ],
    // Validate whitespace in and around the JSX opening and closing brackets
    'react/jsx-tag-spacing': [
        'error',
        {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never'
        }
    ],
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': [
        'error',
        {
            'declaration': true,
            'assignment': true,
            'return': true
        }
    ],

    // Deprecated
    'react/no-comment-textnodes': 'off',
    'react/require-extension': 'off',
    'react/wrap-multilines': 'off'
};
