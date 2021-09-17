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
    "node/no-exports-assign": "error",
    "node/no-extraneous-require": "off",
    "node/no-missing-require": "off",
    "node/no-new-require": "error",
    "node/no-unpublished-require": "error",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["dynamicImport"] },
    ],

    // Stylistic Issues
    "node/exports-style": [
      "error",
      "module.exports",
      {
        allowBatchAssign: false,
      },
    ],
    "node/global-require": "off",
    "node/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],
    "node/no-restricted-require": "off",
  },
};

module.exports = scriptSharedConfig;
