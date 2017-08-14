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
  plugins: ["unicorn", "prettier", "import"],
  parserOptions: {
    ecmaVersion: 5
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
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
    "import/extensions": [".js", ".jsx"]
  },
  rules: Object.assign(
    {},
    bestPracticesRules,
    deprecatedRules,
    possibleErrorsRules,
    strictModeRules,
    stylisticIssuesRules,
    variablesRules,
    importRules,
    unicornRules
  )
};
