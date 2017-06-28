"use strict";

const avaRules = require("./rules/ava");

module.exports = {
    env: {
        es6: true
    },
    plugins: ["ava"],
    rules: Object.assign({}, avaRules)
};
