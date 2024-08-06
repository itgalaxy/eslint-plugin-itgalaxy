"use strict";

const jsxA11yRules = require("../rules/jsx-a11y");
const reactRules = require("../rules/react");
const reactHooksRules = require("../rules/react-hooks");

const reactSharedConfig = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // for @typescript/eslint-parser
    jsxPragma: null,
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"],
      },
    },
  },
  settings: {
    settings: {
      "import/extensions": [".mjs", ".cjs", ".js", ".jsx"],
    },
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    ...reactRules,
    ...jsxA11yRules,
    ...reactHooksRules,
  },
};

module.exports = reactSharedConfig;
