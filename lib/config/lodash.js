"use strict";

const lodashRules = require("./rules/lodash");

module.exports = {
  plugins: ["lodash"],
  extends: ["plugin:lodash/recommended"],
  rules: Object.assign({}, lodashRules)
};
