"use strict";

const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const possibleErrorsRules = require("./rules/possible-errors");
const strictModeRules = require("./rules/strict-mode");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const variablesRules = require("./rules/variables");
const importRules = require("./rules/import");
const unicornRules = require("./rules/unicorn");

module.exports = {
  plugins: ["import", "unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:unicorn/recommended"
  ],
  env: {
    es6: false
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".mjs",
          ".js",
          ".jsx",
          ".json",
          ".web.js",
          ".ios.js",
          ".android.js"
        ]
      }
    },
    "import/ignore": ["\\.(coffee|scss|css|less|hbs|svg|json)$"],
    "import/extensions": [".mjs", ".js", ".jsx"]
  },
  rules: Object.assign(
    {},
    possibleErrorsRules,
    bestPracticesRules,
    strictModeRules,
    variablesRules,
    stylisticIssuesRules,
    deprecatedRules,
    importRules,
    unicornRules
  )
};
