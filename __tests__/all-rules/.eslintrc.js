const path = require("path");

module.exports = {
  extends: [path.resolve(__dirname, "../../lib/config/all.js")],
  rules: {
    "node/no-unsupported-features/es-syntax": "off"
  }
};
