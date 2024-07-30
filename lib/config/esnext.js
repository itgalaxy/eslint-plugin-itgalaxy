"use strict";

const possibleErrorsRules = require("./rules/possible-errors");
const suggestions = require("./rules/suggestions");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const deprecated = require("./rules/deprecated");
const unicornRules = require("./rules/unicorn");
const layoutAndFormatting = require("./rules/layout-and-formatting");

module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
  },
  env: { es2020: true },
  plugins: ["unicorn", "@stylistic"],
  rules: {
    ...possibleErrorsRules,
    ...suggestions,
    ...layoutAndFormatting,
    ...deprecated,
    ...stylisticIssuesRules,
    ...unicornRules,
  },
};
