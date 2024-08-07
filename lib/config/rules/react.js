"use strict";

module.exports = {
  // Enforces consistent naming for boolean props
  "react/boolean-prop-naming": [
    "off",
    {
      propTypeNames: ["bool", "mutuallyExclusiveTrueProps"],
      rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      message: "",
    },
  ],
  // Prevent usage of `button` elements without an explicit `type` attribute
  "react/button-has-type": "error",
  // This rule enforces `onChange` or `readonly` attribute for checked property of input elements.
  "react/checked-requires-onchange-or-readonly": "error",
  // Enforce all defaultProps have a corresponding non-required PropType
  "react/default-props-match-prop-types": [
    "error",
    { allowRequiredDefaults: false },
  ],
  // Enforce consistent usage of destructuring assignment of props, state, and context
  "react/destructuring-assignment": ["error", "always"],
  // Prevent missing displayName in a React component definition
  "react/display-name": "error",
  // Forbid certain props on Components
  "react/forbid-component-props": "off",
  // Forbid certain props on DOM Nodes
  "react/forbid-dom-props": "off",
  // Forbid certain elements
  "react/forbid-elements": "off",
  // Forbid certain propTypes
  "react/forbid-prop-types": [
    "error",
    {
      forbid: ["any", "array", "object"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],
  // Enforce a specific function type for function components
  "react/function-component-definition": "off",
  // This rule checks whether the value and setter variables destructured from a React.useState() call are named symmetrically.
  "react/hook-use-state": "error",
  // The sandbox attribute enables an extra set of restrictions for the content in the iframe. Using sandbox attribute is considered a good security practice.
  "react/iframe-missing-sandbox": "error",
  // Forbid foreign propTypes
  "react/forbid-foreign-prop-types": ["error", { allowInPropTypes: true }],
  // Prevent using Array index in key props
  "react/no-array-index-key": "error",
  // Lifecycle methods should be methods on the prototype, not class fields
  "react/no-arrow-function-lifecycle": "error",
  // Prevent passing children as props
  "react/no-children-prop": "error",
  // Prevent usage of dangerous JSX properties
  "react/no-danger": "error",
  // Prevent problem with children and props.dangerouslySetInnerHTML
  "react/no-danger-with-children": "error",
  // Prevent usage of deprecated methods
  "react/no-deprecated": "error",
  // Prevent usage of setState in componentDidMount
  "react/no-did-mount-set-state": "off",
  // Prevent usage of setState in componentDidUpdate
  "react/no-did-update-set-state": "error",
  // Prevent usage of setState in componentWillUpdate
  "react/no-will-update-set-state": "error",
  // Prevent direct mutation of this.state
  "react/no-direct-mutation-state": "error",
  // Prevent usage of findDOMNode
  "react/no-find-dom-node": "error",
  // Forbid attribute with an invalid values
  "react/no-invalid-html-attribute": "error",
  // Prevent usage of isMounted
  "react/no-is-mounted": "error",
  // Prevent multiple component definition per file
  "react/no-multi-comp": [
    "error",
    {
      ignoreStateless: true,
    },
  ],
  // Enforce that namespaces are not used in React elements
  "react/no-namespace": "error",
  // Warns if in a functional component, an object type value (such as array/object literal/function/etc) is used as default prop, to prevent potential unnecessary rerenders, and performance regressions.
  "react/no-object-type-as-default-prop": "off",
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
  // Prevent `this` from being used in stateless functional components
  "react/no-this-in-sfc": "error",
  // Prevent using string references in `ref` attribute.
  "react/no-unescaped-entities": "error",
  // Prevent usage of unknown DOM property
  "react/no-unknown-property": "error",
  // Prevent usage of `UNSAFE_` methods
  "react/no-unsafe": "error",
  // Prevent creating unstable components inside components
  "react/no-unstable-nested-components": "error",
  // Prevent declaring unused methods of component class
  // Maybe enable in future
  "react/no-unused-class-component-methods": "off",
  // Prevent unused state values
  "react/no-unused-state": "error",
  // Prevent definitions of unused prop types
  "react/no-unused-prop-types": [
    "error",
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],
  // Enforce ES5 or ES6 class for React Components
  "react/prefer-es6-class": "off",
  // Prefer exact proptype definitions
  "react/prefer-exact-props": "off",
  // Using Flow, one can define types for props. This rule enforces that prop types are read-only (covariant).
  "react/prefer-read-only-props": "off",
  // Enforce stateless React Components to be written as a pure function
  "react/prefer-stateless-function": [
    "error",
    {
      ignorePureComponents: true,
    },
  ],
  // Prevent missing props validation in a React component definition
  "react/prop-types": [
    "error",
    {
      ignore: [],
      customValidators: [],
      skipUndeclared: false,
    },
  ],
  // Prevent missing React when using JSX
  "react/react-in-jsx-scope": "off",
  // Enforce a defaultProps definition for every prop that is not a required prop
  "react/require-default-props": [
    "error",
    {
      forbidDefaultForRequired: true,
    },
  ],
  // Enforce React components to have a shouldComponentUpdate method
  "react/require-optimization": "off",
  // Enforce ES5 or ES6 class for returning value in render function
  "react/require-render-return": "error",
  // Prevent extra closing tags for components without children
  "react/self-closing-comp": "off",
  // Enforce component methods order
  "react/sort-comp": [
    "error",
    {
      order: [
        "static-methods",
        "instance-variables",
        "lifecycle",
        "/^on.+$/",
        "getters",
        "setters",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "instance-methods",
        "everything-else",
        "rendering",
      ],
      groups: {
        lifecycle: [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
        ],
        rendering: ["/^render.+$/", "render"],
      },
    },
  ],
  // This rule checks all components and verifies that all defaultProps declarations are sorted alphabetically. A spread attribute resets the verification. The default configuration of the rule is case-sensitive.
  "react/sort-default-props": "off",
  // Enforce propTypes declarations alphabetical sorting
  "react/sort-prop-types": [
    "off",
    {
      ignoreCase: true,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ],
  // Enforce the state initialization style to be either in a constructor or with a class property
  "react/state-in-constructor": "error",
  // Defines where React component static properties should be positioned.
  "react/static-property-placement": "off",
  // Enforce style prop value being an object
  "react/style-prop-object": "error",
  // Prevent void DOM elements (e.g. `<img />`, `<br />`) from receiving children
  "react/void-dom-elements-no-children": "error",

  // JSX-specific rules

  // Enforce boolean attributes notation in JSX
  "react/jsx-boolean-value": ["error", "never"],
  // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
  // Disable in favor `prettier`
  "react/jsx-child-element-spacing": "off",
  // Validate closing bracket location in JSX
  // Disable in favor `prettier`
  "react/jsx-closing-bracket-location": "off",
  // Validate closing tag location in JSX
  // Disable in favor `prettier`
  "react/jsx-closing-tag-location": "off",
  // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
  "react/jsx-curly-brace-presence": [
    "error",
    { props: "never", children: "never" },
  ],
  // Enforce or disallow newlines inside of curly braces in JSX attributes and expressions (fixable)
  // Disable in favor `prettier`
  "react/jsx-curly-newline": "off",
  // Enforce or disallow spaces inside of curly braces in JSX attributes
  // Disable in favor `prettier`
  "react/jsx-curly-spacing": "off",
  // Enforce or disallow spaces around equal signs in JSX attributes
  // Disable in favor `prettier`
  "react/jsx-equals-spacing": "off",
  // Restrict file extensions that may contain JSX
  "react/jsx-filename-extension": [
    "error",
    {
      extensions: [".jsx", ".md"],
    },
  ],
  // Enforce position of the first prop in JSX
  // Disable in favor `prettier`
  "react/jsx-first-prop-new-line": "off",
  // Enforce shorthand or standard form for React fragments
  "react/jsx-fragments": ["error", "syntax"],
  // Enforce event handler naming conventions in JSX
  "react/jsx-handler-names": [
    "off",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    },
  ],
  // Validate JSX indentation
  "react/jsx-indent": "off",
  // Validate props indentation in JSX
  // Disable in favor `prettier`
  "react/jsx-indent-props": "off",
  // Validate JSX has key prop when in array or iterator
  "react/jsx-key": "error",
  // Validate JSX maximum depth
  "react/jsx-max-depth": "off",
  // Limit maximum of props on a single line in JSX
  // Disable in favor `prettier`
  "react/jsx-max-props-per-line": "off",
  // Require or prevent a new line after jsx elements and expressions.
  "react/jsx-newline": "off",
  // Prevent usage of .bind() and arrow functions in JSX props
  "react/jsx-no-bind": [
    "error",
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  // Prevent comments from being inserted as text nodes
  "react/jsx-no-comment-textnodes": "error",
  // Prevents JSX context provider values from taking values that will cause needless rerenders.
  "react/jsx-no-constructed-context-values": "error",
  // Using the && operator to render some element conditionally in JSX can cause unexpected values being rendered, or even crashing the rendering.
  "react/jsx-no-leaked-render": "error",
  // Prevent duplicate props in JSX
  "react/jsx-no-duplicate-props": ["error", { ignoreCase: true }],
  // Prevent usage of unwrapped JSX strings
  "react/jsx-no-literals": "off",
  // Prevent usage of `javascript:` URLs
  "react/jsx-no-script-url": "error",
  // Prevent usage of unsafe target="_blank"
  "react/jsx-no-target-blank": ["error", { enforceDynamicLinks: "always" }],
  // Disallow undeclared variables in JSX
  "react/jsx-no-undef": "error",
  // Disallow unnecessary fragments
  "react/jsx-no-useless-fragment": "error",
  // One JSX Element Per Line
  // Disable in favor `prettier`
  "react/jsx-one-expression-per-line": "off",
  // Enforce PascalCase for user-defined JSX components
  "react/jsx-pascal-case": [
    "error",
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  // Enforces that there is exactly one space between all attributes and after tag name and the first attribute in the same line.
  // Disable in favor `prettier`
  "react/jsx-props-no-multi-spaces": "off",
  // Enforces that any unique expression is only spread once. Generally spreading the same expression twice is an indicator of a mistake since any attribute between the spreads may be overridden when the intent was not to. Even when that is not the case this will lead to unnecessary computations being performed.
  "react/jsx-props-no-spread-multi": "error",
  // Disallow JSX props spreading
  "react/jsx-props-no-spreading": "off",
  // Enforce defaultProps declarations alphabetical sorting
  "react/jsx-sort-default-props": [
    "off",
    {
      ignoreCase: true,
    },
  ],
  // Enforce props alphabetical sorting
  "react/jsx-sort-props": [
    "off",
    {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  // Validate whitespace in and around the JSX opening and closing brackets
  // Disable in favor `prettier`
  "react/jsx-tag-spacing": "off",
  // Prevent React to be incorrectly marked as unused
  "react/jsx-uses-react": "off",
  // Prevent variables used in JSX to be incorrectly marked as unused
  "react/jsx-uses-vars": "error",
  // Prevent missing parentheses around multilines JSX
  // Disable in favor `prettier`
  "react/jsx-wrap-multilines": "off",
  // Prevent using `this.state` within a `this.setState`
  "react/no-access-state-in-setstate": "error",
  // Prevent adjacent inline elements not separated by whitespace
  "react/no-adjacent-inline-elements": "error",
};
