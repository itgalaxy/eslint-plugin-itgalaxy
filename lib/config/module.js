"use strict";

const base = require("./base");
const importRules = require("./rules/import");

module.exports = {
  parser: base.parser,
  parserOptions: {
    ...base.parserOptions,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  globals: {
    __dirname: "off",
    __filename: "off",
    exports: "off",
    module: "off",
    require: "off"
  },
  plugins: ["import", "node"],
  rules: {
    ...importRules,

    "no-import-assign": "error",

    "node/no-unpublished-import": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ]
  },
  reportUnusedDisableDirectives: base.reportUnusedDisableDirectives
};
