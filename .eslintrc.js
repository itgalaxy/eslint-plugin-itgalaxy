"use strict";

module.exports = {
  extends: [
    "./lib/config/script.js",
    "./lib/config/node.js",
    "./lib/config/esnext.js",
    "./lib/config/jsdoc-typescript.js",
    "./lib/config/markdown.js",
    "./lib/config/ava.js",
  ],
  overrides: [
    // Tests
    {
      extends: ["./lib/config/dirty.js"],
      files: ["**/__tests__/**/*", "**/__mocks__/**/*"],
    },
  ],
  root: true,
};
