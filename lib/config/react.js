"use strict";

const reactSharedConfig = require("./shared/react");

module.exports = {
  ...reactSharedConfig,
  overrides: [{ files: ["*.jsx", ".*.jsx"], ...reactSharedConfig }],
};
