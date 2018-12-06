"use strict";

const avaRules = require("./rules/ava");
const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const ecmascript6Rules = require("./rules/ecmascript-6");
const importRules = require("./rules/import");
const jestRules = require("./rules/jest");
const jsxA11yRules = require("./rules/jsx-a11y");
const nodeRules = require("./rules/node");
const possibleErrorsRules = require("./rules/possible-errors");
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
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    allowImportExportEverywhere: true
  },
  plugins: [
    "ava",
    "import",
    "jsx-a11y",
    "promise",
    "unicorn",
    "html",
    "jest",
    "lodash",
    "markdown",
    "node",
    "react"
  ],
  rules: Object.assign(
    {},
    possibleErrorsRules,
    bestPracticesRules,
    strictModeRules,
    variablesRules,
    nodeRules,
    stylisticIssuesRules,
    ecmascript6Rules,
    deprecatedRules,
    avaRules,
    unicornRules,
    jestRules,
    importRules,
    promiseRules,
    jsxA11yRules,
    reactRules
  ),
  extends: [
    "eslint:recommended",
    "plugin:ava/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:jest/recommended",
    "plugin:lodash/recommended",
    "plugin:node/recommended",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "999.999.999"
    }
  }
};
