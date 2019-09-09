"use strict";

const base = require("./base");

module.exports = {
  ...base.flags,
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
  plugins: ["node", "import"],
  rules: {
    "global-require": "off",
    "no-new-require": "off",
    "no-mixed-requires": "off",
    "node/no-unpublished-require": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ],
    "node/no-exports-assign": "off",
    "node/exports-style": "off",

    "import/no-dynamic-require": "off"
  }
};
