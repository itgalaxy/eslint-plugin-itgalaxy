"use strict";

const avaRules = require("./rules/ava");

module.exports = {
  // `AVA` use own `babel` preset what support es6 syntax with `import` but we disable this because
  // you can configure `babel` for `es3`, `es5`, `es6` and other `es` editions.
  plugins: ["ava"],
  rules: Object.assign({}, avaRules)
};
