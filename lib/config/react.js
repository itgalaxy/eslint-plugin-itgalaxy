"use strict";

const path = require("path");
const jsxA11yRules = require("./rules/jsx-a11y");
const reactRules = require("./rules/react");

module.exports = {
    extends: path.resolve(__dirname, "./esnext.js"),
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        allowImportExportEverywhere: true
    },
    globals: {
        fetch: true,
        ReactElement: true,
        ReactClass: true
    },
    plugins: ["react", "jsx-a11y"],
    rules: Object.assign({}, reactRules, jsxA11yRules)
};
