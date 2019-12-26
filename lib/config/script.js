"use strict";

const base = require("./base");
const importRules = require("./rules/import");

module.exports = {
  parser: base.parser,
  parserOptions: {
    ...base.parserOptions,
    sourceType: "script",
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
        ignorePackages: true,
        mjs: "never",
        js: "never",
        jsx: "never"
      }
    ],
    "import/no-useless-path-segments": [
      "error",
      {
        commonjs: true,
        noUselessIndex: true
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
    "no-new-require": "error"
  },
  reportUnusedDisableDirectives: base.reportUnusedDisableDirectives
};
