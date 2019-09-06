"use strict";

const jestRules = require("./rules/jest");

module.exports = {
  env: { "jest/globals": true },
  plugins: ["jest"],
  rules: { ...jestRules }
};
