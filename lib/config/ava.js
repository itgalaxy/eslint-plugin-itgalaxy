"use strict";

const avaRules = require("./rules/ava");

module.exports = {
  plugins: ["ava"],
  rules: { ...avaRules },
};
