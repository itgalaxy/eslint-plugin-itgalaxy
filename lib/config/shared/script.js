"use strict";

const parserSharedConfig = require("./parser");

const scriptSharedConfig = {
  parserOptions: {
    ...parserSharedConfig.parserOptions,
    sourceType: "script",
    ecmaFeatures: { globalReturn: true },
  },
};

module.exports = scriptSharedConfig;
