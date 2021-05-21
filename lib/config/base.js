"use strict";

module.exports = {
  parser: require.resolve("@babel/eslint-parser"),
  parserOptions: {
    requireConfigFile: false,
    sourceType: "script",
    ecmaVersion: 2021,
  },
  reportUnusedDisableDirectives: true,
};
