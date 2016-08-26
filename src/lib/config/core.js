import bestPracticesRules from './rules/best-practices';
import possibleErrorsRules from './rules/possible-errors';
import strictModeRules from './rules/strict-mode';
import stylisticIssuesRules from './rules/stylistic-issues';
import variablesRules from './rules/variables';
import xoRules from './rules/xo';

export default {
    plugins: [
        'xo'
    ],
    ecmaFeatures: {
        ecmaVersion: 5
    },
    rules: Object.assign(
        possibleErrorsRules,
        bestPracticesRules,
        strictModeRules,
        variablesRules,
        stylisticIssuesRules,
        xoRules
    )
};
