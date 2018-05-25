"use strict";

const nodeRules = require("./rules/node");

module.exports = {
  parserOptions: {
    ecmaVersion: 2018
  },
  env: {
    es6: true,
    node: true
  },
  globals: {
    Atomics: false,
    SharedArrayBuffer: false
  },
  plugins: ["node"],
  settings: {
    node: {
      tryExtensions: [".js", ".jsx", ".json", ".node"],
      convertPath: {
        "src/**/*.js?(x)": ["^src/(.+)$", "dist/$1"]
      }
    }
  },
  rules: Object.assign({}, nodeRules)
};
