"use strict";

const path = require("path");
const ecmascript6Rules = require("./rules/ecmascript-6");
const promiseRules = require("./rules/promise");

module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  plugins: ["promise"],
  extends: [path.resolve(__dirname, "./core.js")],
  rules: Object.assign({}, ecmascript6Rules, promiseRules)
};
