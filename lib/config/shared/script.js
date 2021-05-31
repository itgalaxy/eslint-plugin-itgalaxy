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
    "node/no-unsupported-features/es-syntax": "error",
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

    "node/no-mixed-requires": [
      "error",
      {
        grouping: true,
        allowCall: true,
      },
    ],
    "node/no-new-require": "error",
  },
};

module.exports = scriptSharedConfig;
