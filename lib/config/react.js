"use strict";

const jsxA11yRules = require("./rules/jsx-a11y");
const reactRules = require("./rules/react");

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    allowImportExportEverywhere: true
  },
  globals: {
    fetch: true,
    ReactElement: true,
    ReactClass: true
  },
  settings: {
    react: {
      version: "999.999.999"
    }
  },
  plugins: ["react", "jsx-a11y"],
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  rules: Object.assign({}, reactRules, jsxA11yRules, {
    "class-methods-use-this": [
      "error",
      {
        exceptMethods: [
          "render",
          "getInitialState",
          "getDefaultProps",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }
    ]
  })
};
