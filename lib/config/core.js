var possibleErrorsRules = require('./rules/possible-errors');
var bestPracticesRules = require('./rules/best-practices');
var strictModeRules = require('./rules/strict-mode');
var variablesRules = require('./rules/variables');
var stylisticIssuesRules = require('./rules/stylistic-issues');
var merge = require('merge');

module.exports = {
    plugins: [
        'objects'
    ],
    ecmaFeatures: {
        ecmaVersion: 5
    },
    rules: merge(
        possibleErrorsRules,
        bestPracticesRules,
        strictModeRules,
        variablesRules,
        stylisticIssuesRules
    )
};
