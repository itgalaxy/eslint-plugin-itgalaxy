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
const importRules = require("./rules/import");

module.exports = {
  env: {
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    allowImportExportEverywhere: true
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
  plugins: ["unicorn", "promise", "import"],
  rules: Object.assign(
    {},
    possibleErrorsRules,
    bestPracticesRules,
    strictModeRules,
    variablesRules,
    stylisticIssuesRules,
    deprecatedRules,
    ecmascript6Rules,
    unicornRules,
    promiseRules,
    importRules
  )
};
