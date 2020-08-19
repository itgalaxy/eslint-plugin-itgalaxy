"use strict";

module.exports = {
  "*.{js,cjs,mjs,jsx,ts,tsx}": [
    "prettier --list-different",
    "eslint --report-unused-disable-directives",
  ],
  "*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}": [
    "prettier --list-different",
    "remark -f -q",
  ],
  "*.{yml,yaml}": ["prettier --list-different"],
};
