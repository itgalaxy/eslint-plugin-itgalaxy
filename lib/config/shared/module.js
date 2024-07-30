"use strict";

const parserSharedConfig = require("./parser");
const importRules = require("../rules/import");

const moduleSharedConfig = {
  parserOptions: {
    ...parserSharedConfig.parserOptions,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      parserOpts: {
        allowReturnOutsideFunction: false,
      },
    },
  },
  globals: {
    // ...globals.es2021,
    __dirname: "off",
    __filename: "off",
    exports: "off",
    module: "off",
    require: "off",
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
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true,
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: false,
      },
    ],

    // Possible Errors
    "n/no-extraneous-import": "off",
    "n/no-missing-import": "off",
    "n/no-unpublished-import": "error",
    "n/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules", "dynamicImport"] },
    ],

    // Stylistic Issues
    "n/file-extension-in-import": "off",
    "n/no-restricted-import": "off",

    "no-import-assign": "error",
  },
};

module.exports = moduleSharedConfig;
