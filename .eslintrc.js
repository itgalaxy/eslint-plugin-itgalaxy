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
      files: [
        "**/{tests,test,__tests__}/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
        "**/test-*.[jt]s?(x)",
      ],
    },
  ],
  root: true,
};
