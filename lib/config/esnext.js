"use strict";

const path = require("path");
const ecmascript6Rules = require("./rules/ecmascript-6");
const promiseRules = require("./rules/promise");

module.exports = {
  extends: path.resolve(__dirname, "./core.js"),
  env: {
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    allowImportExportEverywhere: true
  },
  plugins: ["promise"],
  rules: Object.assign({}, ecmascript6Rules, promiseRules)
};
