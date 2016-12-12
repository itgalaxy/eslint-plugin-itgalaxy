"use strict";

const avaRules = require("./rules/ava");
const bestPracticesRules = require("./rules/best-practices");
const deprecatedRules = require("./rules/deprecated");
const possibleErrorsRules = require("./rules/possible-errors");
const strictModeRules = require("./rules/strict-mode");
const stylisticIssuesRules = require("./rules/stylistic-issues");
const variablesRules = require("./rules/variables");
const unicornRules = require("./rules/unicorn");
const ecmascript6Rules = require("./rules/ecmascript-6");
const importRules = require("./rules/import");
const promiseRules = require("./rules/promise");
const lodashRules = require("./rules/lodash");
const nodeRules = require("./rules/node");
const jsxA11yRules = require("./rules/jsx-a11y");
const reactRules = require("./rules/react");

module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        "ava",
        "import",
        "jsx-a11y",
        "lodash",
        "node",
        "promise",
        "react",
        "unicorn"
    ],
    rules: Object.assign(
        {},
        avaRules,
        bestPracticesRules,
        deprecatedRules,
        possibleErrorsRules,
        strictModeRules,
        stylisticIssuesRules,
        variablesRules,
        unicornRules,
        ecmascript6Rules,
        importRules,
        promiseRules,
        lodashRules,
        nodeRules,
        jsxA11yRules,
        reactRules
    )
};
