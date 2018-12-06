"use strict";

const avaRules = require("./rules/ava");

module.exports = {
  env: {
    es6: true
  },
  plugins: ["ava"],
  extends: ["plugin:ava/recommended"],
  rules: Object.assign({}, avaRules)
};
