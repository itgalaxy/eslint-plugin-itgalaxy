var merge = require('merge');

module.exports = {
    plugins: [
        'objects'
    ],
    ecmaFeatures: {
        ecmaVersion: 5
    },
    rules: merge(
        require('./rules/possible-errors'),
        require('./rules/best-practices'),
        require('./rules/strict-mode'),
        require('./rules/variables'),
        require('./rules/stylistic-issues')
    )
};
