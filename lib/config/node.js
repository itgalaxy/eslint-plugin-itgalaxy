"use strict";

const nodeRules = require("./rules/node");

module.exports = {
  env: {
    node: true
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
