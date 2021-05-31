"use strict";

const baseSharedConfig = require("./shared/base");
const moduleSharedConfig = require("./shared/module");

module.exports = {
  ...baseSharedConfig,
  overrides: [
    ...baseSharedConfig.overrides,
    { files: ["*.js", ".*.js"], ...moduleSharedConfig },
  ],
};
