"use strict";

const jsxA11yRules = require("./rules/jsx-a11y");
const reactRules = require("./rules/react");

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"],
      },
    },
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    ...reactRules,
    ...jsxA11yRules,
  },
};
