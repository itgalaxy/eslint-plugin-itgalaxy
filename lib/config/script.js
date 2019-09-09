"use strict";

const base = require("./base");

module.exports = {
  ...base.flags,
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
  plugins: ["node", "import"],
  rules: {
    "no-duplicate-imports": "off",

    "node/no-unpublished-import": "off",

    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-mutable-exports": "off",
    "import/first": "off",
    "import/exports-last": "off",
    "import/no-duplicates": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-named-default": "off",
    "import/dynamic-import-chunkname": "off"
  }
};
