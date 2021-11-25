"use strict";

module.exports = {
  plugins: [
    "ava",
    "html",
    "import",
    "jest",
    "jsx-a11y",
    "markdown",
    "node",
    "react",
    "unicorn",
    "jsdoc",
  ],
  extends: [
    "./dirty.js",
    "./esnext.js",
    "./node.js",
    "./browser.js",
    "./react.js",
    "./jest.js",
    "./ava.js",
    "./jsdoc-typescript.js",
    "./markdown.js",
    "./html.js",
  ],
};
