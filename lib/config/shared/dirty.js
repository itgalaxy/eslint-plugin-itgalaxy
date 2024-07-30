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
  plugins: ["import", "n"],
  rules: {
    ...importRules,
    "import/extensions": "off",

    // Possible Errors
    "n/no-exports-assign": "error",
    "n/no-extraneous-require": "off",
    "n/no-extraneous-import": "off",
    "n/no-missing-require": "off",
    "n/no-missing-import": "off",
    "n/no-new-require": "error",
    "n/no-unpublished-require": "error",
    "n/no-unpublished-import": "error",
    "n/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules", "dynamicImport"] },
    ],

    // Stylistic Issues
    "n/exports-style": [
      "error",
      "module.exports",
      {
        allowBatchAssign: false,
      },
    ],
    "n/file-extension-in-import": "off",
    "n/global-require": "off",
    "n/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],
    "n/no-restricted-import": "off",
    "n/no-restricted-require": "off",

    "no-import-assign": "error",
  },
};

module.exports = dirtySharedConfig;
