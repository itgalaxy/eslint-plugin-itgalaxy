"use strict";

const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const possibleErrorsRules = require("./rules/possible-errors");
const strictModeRules = require("./rules/strict-mode");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const variablesRules = require("./rules/variables");
const unicornRules = require("./rules/unicorn");

module.exports = {
  plugins: ["unicorn", "prettier"],
  parserOptions: {
    ecmaVersion: 5
  },
  rules: Object.assign(
    {},
    bestPracticesRules,
    deprecatedRules,
    possibleErrorsRules,
    strictModeRules,
    stylisticIssuesRules,
    variablesRules,
    unicornRules
  )
};
