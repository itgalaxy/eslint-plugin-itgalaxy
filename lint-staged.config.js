"use strict";

module.exports = {
  "*.{js,cjs,mjs,jsx,ts,tsx}": ["eslint", "prettier --write"],
  "*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}": [
    "remark -f -q",
    "prettier --write",
  ],
  "*.{yml,yaml}": ["prettier --write"],
};
