"use strict";

module.exports = {
  "*.{js,jsx}": [
    "prettier --list-different",
    "eslint --report-unused-disable-directives",
    "git add"
  ],
  "*.md": ["prettier --list-different", "remark -f -q", "git add"]
};
