"use strict";

const baseSharedConfig = require("./shared/base");
const dirtySharedConfig = require("./shared/dirty");

module.exports = {
  ...baseSharedConfig,
  overrides: [
    ...baseSharedConfig.overrides,
    { files: ["*.js", ".*.js"], ...dirtySharedConfig },
  ],
};
