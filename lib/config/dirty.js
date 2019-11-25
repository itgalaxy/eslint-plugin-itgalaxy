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
  settings: {
    "import/extensions": [".mjs", ".cjs", ".js", ".jsx", ".json", ".node"],
    "import/ignore": ["\\.(coffee|scss|css|less|hbs|svg|json|md)$"],
    "import/resolver": {
      node: { extensions: [".mjs", ".cjs", ".js", ".jsx", ".json", ".node"] }
    }
  },
  plugins: ["import", "node"],
  rules: {
    ...importRules,
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true
      }
    ],

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
