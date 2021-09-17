"use strict";

const baseSharedConfig = require("./shared/base");
const commonjsSharedConfig = require("./shared/commonjs");

module.exports = {
  ...baseSharedConfig,
  overrides: [
    ...baseSharedConfig.overrides,
    { files: ["*.js", ".*.js"], ...commonjsSharedConfig },
  ],
};
