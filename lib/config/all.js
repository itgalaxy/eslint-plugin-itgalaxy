"use strict";

const avaRules = require("./rules/ava");
const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const ecmascript6Rules = require("./rules/ecmascript-6");
const importRules = require("./rules/import");
const jestRules = require("./rules/jest");
const jsxA11yRules = require("./rules/jsx-a11y");
const lodashRules = require("./rules/lodash");
const nodeRules = require("./rules/node");
const possibleErrorsRules = require("./rules/possible-errors");
const prettierRules = require("./rules/prettier");
const promiseRules = require("./rules/promise");
const reactRules = require("./rules/react");
const strictModeRules = require("./rules/strict-mode");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const unicornRules = require("./rules/unicorn");
const variablesRules = require("./rules/variables");

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    allowImportExportEverywhere: true
  },
  plugins: [
    "ava",
    "import",
    "jsx-a11y",
    "promise",
    "unicorn",
    "jest",
    "lodash",
    "markdown",
    "node",
    "prettier",
    "react"
  ],
  rules: Object.assign(
    {},
    avaRules,
    bestPracticesRules,
    deprecatedRules,
    possibleErrorsRules,
    strictModeRules,
    stylisticIssuesRules,
    variablesRules,
    unicornRules,
    ecmascript6Rules,
    jestRules,
    importRules,
    prettierRules,
    promiseRules,
    lodashRules,
    nodeRules,
    jsxA11yRules,
    reactRules
  )
};
