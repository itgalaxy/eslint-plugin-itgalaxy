'use strict';

var nodeRules = require('./rules/node');

module.exports = {
    env: {
        node: true
    },
    plugins: [
        'node'
    ],
    rules: nodeRules
};
