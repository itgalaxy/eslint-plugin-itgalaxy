"use strict";

module.exports = {
  // Enforces consistent naming for boolean props
  "react/boolean-prop-naming": "off",
  // Enforce all defaultProps have a corresponding non-required PropType
  "react/default-props-match-prop-types": "error",
  // Prevent missing displayName in a React component definition
  "react/display-name": [
    "error",
    {
      ignoreTranspilerName: false
    }
  ],
  // Forbid certain props on Components
  "react/forbid-component-props": "off",
  // Forbid certain elements
  "react/forbid-elements": "off",
  // Forbid certain propTypes
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"]
    }
  ],
  // Forbid foreign propTypes
  "react/forbid-foreign-prop-types": "off",
  // Prevent using Array index in key props
  "react/no-array-index-key": "error",
  // Prevent passing children as props
  "react/no-children-prop": "error",
  // Prevent usage of dangerous JSX properties
  "react/no-danger": "error",
  // Prevent problem with children and props.dangerouslySetInnerHTML
  "react/no-danger-with-children": "error",
  // Prevent usage of deprecated methods
  "react/no-deprecated": "error",
  // Prevent usage of setState in componentDidMount
  "react/no-did-mount-set-state": "error",
  // Prevent usage of setState in componentDidUpdate
  "react/no-did-update-set-state": "error",
  // Prevent usage of setState in componentWillUpdate
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
  "react/no-will-update-set-state": "error",
  // Prevent direct mutation of this.state
  "react/no-direct-mutation-state": "error",
  // Prevent usage of findDOMNode
  "react/no-find-dom-node": "error",
  // Prevent usage of isMounted
  "react/no-is-mounted": "error",
  // Prevent multiple component definition per file
  "react/no-multi-comp": [
    "error",
    {
      ignoreStateless: true
    }
  ],
  // Prevent usage of shouldComponentUpdate when extending React.PureComponent
  "react/no-redundant-should-component-update": "error",
  // Prevent usage of the return value of `React.render`.
  "react/no-render-return-value": "error",
  // Prevent usage of setState
  "react/no-set-state": "off",
  // Prevent common casing typos
  "react/no-typos": "error",
  // Prevent using string references in `ref` attribute.
  "react/no-string-refs": "error",
  // Prevent using string references in `ref` attribute.
  "react/no-unescaped-entities": "off",
  // Prevent usage of unknown DOM property
  "react/no-unknown-property": "error",
  // Prevent unused state values
  "react/no-unused-state": "off",
  // Prevent definitions of unused prop types
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true
    }
  ],
  // Enforce ES5 or ES6 class for React Components
  "react/prefer-es6-class": ["error", "always"],
  // Enforce stateless React Components to be written as a pure function
  "react/prefer-stateless-function": [
    "error",
    {
      ignorePureComponents: true
    }
  ],
  // Prevent missing props validation in a React component definition
  "react/prop-types": "error",
  // Prevent missing React when using JSX
  "react/react-in-jsx-scope": "error",
  // Enforce a defaultProps definition for every prop that is not a required prop
  "react/require-default-props": "error",
  // Enforce React components to have a shouldComponentUpdate method
  "react/require-optimization": "off",
  // Enforce ES5 or ES6 class for returning value in render function
  "react/require-render-return": "error",
  // Prevent extra closing tags for components without children
  "react/self-closing-comp": "error",
  // Enforce component methods order
  "react/sort-comp": [
    "error",
    {
      order: [
        "static-methods",
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }
  ],
  // Enforce propTypes declarations alphabetical sorting
  "react/sort-prop-types": [
    "error",
    {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false
    }
  ],
  // Enforce style prop value being an object
  "react/style-prop-object": "error",
  // Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
  "react/void-dom-elements-no-children": "error",

  // JSX-specific rules

  // Enforce boolean attributes notation in JSX
  "react/jsx-boolean-value": ["error", "never"],
  // Validate closing bracket location in JSX
  "react/jsx-closing-bracket-location": "off",
  // Validate closing tag location in JSX
  "react/jsx-closing-tag-location": "off",
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  "react/jsx-curly-spacing": "off",
  // Enforce or disallow spaces around equal signs in JSX attributes
  "react/jsx-equals-spacing": "off",
  // Restrict file extensions that may contain JSX
  "react/jsx-filename-extension": [
    "error",
    {
      extensions: [".jsx"]
    }
  ],
  // Enforce position of the first prop in JSX
  "react/jsx-first-prop-new-line": "off",
  // Enforce event handler naming conventions in JSX
  "react/jsx-handler-names": [
    "error",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on"
    }
  ],
  // Validate JSX indentation
  "react/jsx-indent": "off",
  // Validate props indentation in JSX
  "react/jsx-indent-props": "off",
  // Validate JSX has key prop when in array or iterator
  "react/jsx-key": "error",
  // Limit maximum of props on a single line in JSX
  "react/jsx-max-props-per-line": "off",
  // Prevent usage of .bind() and arrow functions in JSX props
  "react/jsx-no-bind": [
    "error",
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowBind: false
    }
  ],
  // Prevent comments from being inserted as text nodes
  "react/jsx-no-comment-textnodes": "error",
  // Prevent duplicate props in JSX
  "react/jsx-no-duplicate-props": [
    "error",
    {
      ignoreCase: true
    }
  ],
  // Prevent usage of unwrapped JSX strings
  "react/jsx-no-literals": "off",
  // Prevent usage of unsafe target="_blank"
  "react/jsx-no-target-blank": "error",
  // Disallow undeclared variables in JSX
  "react/jsx-no-undef": "error",
  // Enforce PascalCase for user-defined JSX components
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: true,
      ignore: []
    }
  ],
  // Enforce props alphabetical sorting
  "react/jsx-sort-props": [
    "error",
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true
    }
  ],
  // Validate whitespace in and around the JSX opening and closing brackets
  "react/jsx-tag-spacing": "off",
  // Prevent React to be incorrectly marked as unused
  "react/jsx-uses-react": "error",
  // Prevent variables used in JSX to be incorrectly marked as unused
  "react/jsx-uses-vars": "error",
  // Prevent missing parentheses around multilines JSX
  "react/jsx-wrap-multilines": "off",

  // Deprecation
  // Validate spacing before closing bracket in JSX
  "react/jsx-space-before-closing": "off"
};
