"use strict";

const base = require("./base");
const importRules = require("./rules/import");

module.exports = {
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
  plugins: ["import", "node"],
  rules: {
    ...importRules,

    "global-require": "error",
    "no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true
      }
    ],
    "no-new-require": "error",
    "no-import-assign": "error",

    "node/no-exports-assign": "error",
    "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ],
    "node/exports-style": [
      "error",
      "module.exports",
      {
        allowBatchAssign: false
      }
    ]
  },
  reportUnusedDisableDirectives: base.reportUnusedDisableDirectives
};
