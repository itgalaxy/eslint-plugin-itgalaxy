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
  plugins: ["import", "node"],
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
    "node/no-extraneous-import": "off",
    "node/no-missing-import": "off",
    "node/no-unpublished-import": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules", "dynamicImport"] },
    ],

    // Stylistic Issues
    "node/file-extension-in-import": "off",
    "node/no-restricted-import": "off",

    "no-import-assign": "error",
  },
};

module.exports = moduleSharedConfig;
