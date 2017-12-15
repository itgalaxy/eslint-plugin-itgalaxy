"use strict";

const jestRules = require("./rules/jest");

module.exports = {
  env: {
    es6: true,
    jest: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  rules: Object.assign({}, jestRules)
};
