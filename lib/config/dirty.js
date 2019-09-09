"use strict";

const base = require("./base");

module.exports = {
  ...base.flags,
  parser: base.parser,
  parserOptions: {
    ...base.parserOptions,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true }
  },
  globals: {
    __dirname: "readonly",
    __filename: "readonly",
    exports: "writable",
    module: "readonly",
    require: "readonly"
  },
  plugins: ["node"],
  rules: {
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ]
  }
};
