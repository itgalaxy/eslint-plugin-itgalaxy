"use strict";

const parser = require.resolve("@babel/eslint-parser");
const parserOptions = {
  requireConfigFile: false,
  sourceType: "module",
};

const mainSharedConfig = {
  parser,
  parserOptions,
  reportUnusedDisableDirectives: true,
};

module.exports = mainSharedConfig;
