import bestPracticesRules from './rules/best-practices';
import merge from 'merge';
import possibleErrorsRules from './rules/possible-errors';
import strictModeRules from './rules/strict-mode';
import stylisticIssuesRules from './rules/stylistic-issues';
import variablesRules from './rules/variables';

export default {
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
