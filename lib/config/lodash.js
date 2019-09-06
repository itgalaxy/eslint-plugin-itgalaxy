"use strict";

const lodashRules = require("./rules/lodash");

module.exports = {
  plugins: ["lodash"],
  rules: { ...lodashRules }
};
