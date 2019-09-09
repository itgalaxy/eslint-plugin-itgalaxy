"use strict";

const avaRules = require("./rules/ava");
const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const ecmascript6Rules = require("./rules/ecmascript-6");
const importRules = require("./rules/import");
const jestRules = require("./rules/jest");
const lodashRules = require("./rules/lodash");
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
  parser: "babel-eslint",
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
  rules: {
    ...possibleErrorsRules,
    ...bestPracticesRules,
    ...strictModeRules,
    ...variablesRules,
    ...nodeRules,
    ...stylisticIssuesRules,
    ...ecmascript6Rules,
    ...deprecatedRules,
    ...avaRules,
    ...unicornRules,
    ...jestRules,
    ...lodashRules,
    ...importRules,
    ...promiseRules,
    ...jsxA11yRules,
    ...reactRules
  },
  settings: {
    react: {
      version: "999.999.999"
    }
  }
};
