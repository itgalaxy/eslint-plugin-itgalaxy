"use strict";

const jestRules = require("./rules/jest");

module.exports = {
  env: { es6: true },
  plugins: ["jest"],
  rules: Object.assign({}, jestRules)
};
