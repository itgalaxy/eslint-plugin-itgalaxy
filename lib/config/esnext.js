"use strict";

const possibleErrorsRules = require("./rules/possible-errors");
const bestPracticesRules = require("./rules/best-practices");
const strictModeRules = require("./rules/strict-mode");
const variablesRules = require("./rules/variables");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const ecmascript6Rules = require("./rules/ecmascript-6");
const promiseRules = require("./rules/promise");
const unicornRules = require("./rules/unicorn");

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: { es2020: true },
  plugins: ["unicorn", "promise"],
  rules: {
    ...possibleErrorsRules,
    ...bestPracticesRules,
    ...strictModeRules,
    ...variablesRules,
    ...stylisticIssuesRules,
    ...ecmascript6Rules,
    ...unicornRules,
    ...promiseRules,
  },
};
