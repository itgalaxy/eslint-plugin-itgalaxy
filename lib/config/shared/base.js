"use strict";

const parserSharedConfig = require("./parser");
const scriptSharedConfig = require("./script");
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
    { files: ["*.cjs", ".*.cjs"], ...scriptSharedConfig },
    { files: ["*.mjs", ".*.mjs"], ...moduleSharedConfig },
  ],
};
