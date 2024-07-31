"use strict";

const parserSharedConfig = require("./parser");
const importRules = require("../rules/import");

const scriptSharedConfig = {
  parserOptions: {
    ...parserSharedConfig.parserOptions,
    sourceType: "script",
    ecmaFeatures: { globalReturn: true },
  },
  globals: {
    //  ...globals.es2021,
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
    "import/extensions": [
      "error",
      "always",
      {
        ignorePackages: true,
        pattern: {
          mjs: "never",
          js: "never",
          jsx: "never",
        },
      },
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true,
        noUselessIndex: true,
      },
    ],

    // Possible Errors
    "n/no-exports-assign": "error",
    "n/no-extraneous-require": "off",
    "n/no-missing-require": "off",
    "n/no-new-require": "error",
    "n/no-unpublished-require": "error",
    "n/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["dynamicImport"] },
    ],

    // Stylistic Issues
    "n/exports-style": "error",
    "n/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],
    "n/no-restricted-require": "off",
  },
};

module.exports = scriptSharedConfig;
