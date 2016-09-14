const bestPracticesRules = require('./rules/best-practices');
const deprecatedRules = require('./rules/deprecated');
const possibleErrorsRules = require('./rules/possible-errors');
const strictModeRules = require('./rules/strict-mode');
const stylisticIssuesRules = require('./rules/stylistic-issues');
const variablesRules = require('./rules/variables');
const xoRules = require('./rules/xo');

module.exports = {
    plugins: [
        'xo'
    ],
    ecmaFeatures: {
        ecmaVersion: 5
    },
    rules: Object.assign(
        {},
        bestPracticesRules,
        deprecatedRules,
        possibleErrorsRules,
        strictModeRules,
        stylisticIssuesRules,
        variablesRules,
        xoRules
    )
};
