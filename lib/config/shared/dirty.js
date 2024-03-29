"use strict";

const parserSharedConfig = require("./parser");
const importRules = require("../rules/import");

const dirtySharedConfig = {
  parserOptions: {
    ...parserSharedConfig.parserOptions,
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true },
  },
  globals: {
    __dirname: "readonly",
    __filename: "readonly",
    exports: "writable",
    module: "readonly",
    require: "readonly",
  },
  settings: {
    "import/extensions": [".mjs", ".cjs", ".js"],
    "import/ignore": ["\\.(coffee|scss|css|less|hbs|svg|json|md)$"],
    "import/resolver": {
      node: { extensions: [".mjs", ".cjs", ".js", ".jsx", ".json", ".node"] },
    },
  },
  plugins: ["import", "node"],
  rules: {
    ...importRules,
    "import/extensions": "off",

    // Possible Errors
    "node/no-exports-assign": "error",
    "node/no-extraneous-require": "off",
    "node/no-extraneous-import": "off",
    "node/no-missing-require": "off",
    "node/no-missing-import": "off",
    "node/no-new-require": "error",
    "node/no-unpublished-require": "error",
    "node/no-unpublished-import": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules", "dynamicImport"] },
    ],

    // Stylistic Issues
    "node/exports-style": [
      "error",
      "module.exports",
      {
        allowBatchAssign: false,
      },
    ],
    "node/file-extension-in-import": "off",
    "node/global-require": "off",
    "node/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],
    "node/no-restricted-import": "off",
    "node/no-restricted-require": "off",

    "no-import-assign": "error",
  },
};

module.exports = dirtySharedConfig;
