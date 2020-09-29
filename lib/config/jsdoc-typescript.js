"use strict";

const jsdocTypescriptRules = require("./rules/jsdoc-typescript");

module.exports = {
  plugins: ["jsdoc"],
  settings: {
    jsdoc: {
      mode: "typescript",
      //  https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
      tagNamePreference: {
        param: "param",
        arg: "param",
        argument: "param",
        returns: "returns",
        return: "returns",
        class: "constructor",
        constructor: "constructor",
        extends: "extends",
        augments: "extends",
        prop: "property",
        property: "property",
      },
    },
  },
  rules: { ...jsdocTypescriptRules },
};
