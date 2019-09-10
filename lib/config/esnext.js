"use strict";

const possibleErrorsRules = require("./rules/possible-errors");
const bestPracticesRules = require("./rules/best-practices");
const strictModeRules = require("./rules/strict-mode");
const variablesRules = require("./rules/variables");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const deprecatedRules = require("./rules/deprecated");
const ecmascript6Rules = require("./rules/ecmascript-6");
const promiseRules = require("./rules/promise");
const unicornRules = require("./rules/unicorn");

module.exports = {
  env: {
    es2020: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".mjs",
          ".cjs",
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
    "import/extensions": [".mjs", ".cjs", ".js", ".jsx"]
  },
  plugins: ["unicorn", "promise", "import"],
  rules: {
    ...possibleErrorsRules,
    ...bestPracticesRules,
    ...strictModeRules,
    ...variablesRules,
    ...stylisticIssuesRules,
    ...deprecatedRules,
    ...ecmascript6Rules,
    ...unicornRules,
    ...promiseRules
  },
  reportUnusedDisableDirectives: true
};
