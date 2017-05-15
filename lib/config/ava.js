"use strict";

const avaRules = require("./rules/ava");

module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module"
    },
    plugins: [
        "ava"
    ],
    rules: Object.assign(
        {},
        avaRules
    )
};
