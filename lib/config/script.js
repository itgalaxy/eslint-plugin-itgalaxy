"use strict";

const baseSharedConfig = require("./shared/base");
const scriptSharedConfig = require("./shared/script");

module.exports = {
  ...baseSharedConfig,
  overrides: [
    ...baseSharedConfig.overrides,
    { files: ["*.js", ".*.js"], ...scriptSharedConfig },
  ],
};
