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

    "no-import-assign": "error",

    "node/no-unpublished-import": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ]
  },
  reportUnusedDisableDirectives: base.reportUnusedDisableDirectives
};
