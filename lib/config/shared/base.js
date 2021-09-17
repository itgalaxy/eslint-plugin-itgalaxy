"use strict";

const parserSharedConfig = require("./parser");
const commonjsSharedConfig = require("./commonjs");
const moduleSharedConfig = require("./module");

module.exports = {
  ...parserSharedConfig,
  ignorePatterns: [
    "**/dist/**",
    "**/coverage/**",
    "**/fixtures/**",
    "**/fixture/**",
    "**/__fixtures__/**",
    "**/snapshots/**",
    "**/__snapshots__/**",
  ],
  overrides: [
    { files: ["*.cjs", ".*.cjs"], ...commonjsSharedConfig },
    { files: ["*.mjs", ".*.mjs"], ...moduleSharedConfig },
  ],
};
