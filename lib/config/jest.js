"use strict";

const jestRules = require("./rules/jest");

module.exports = {
  env: { es6: true },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
  rules: Object.assign({}, jestRules)
};
