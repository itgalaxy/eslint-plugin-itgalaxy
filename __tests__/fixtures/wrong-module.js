"use strict";

function rtn(value) {
  return value;
}

rtn(__dirname);
rtn(__filename);

// eslint-disable-next-line import/no-self-import
require("./wrong-module.js");

exports = 666;
module.exports = 666;

return 666;
