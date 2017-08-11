"use strict";

const prettierRules = require("./rules/prettier");

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    allowImportExportEverywhere: true
  },
  plugins: ["prettier"],
  rules: Object.assign({}, prettierRules)
};
