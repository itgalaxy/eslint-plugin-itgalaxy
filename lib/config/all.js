"use strict";

module.exports = {
  plugins: [
    "ava",
    "html",
    "import",
    "jest",
    "jsx-a11y",
    "lodash",
    "markdown",
    "node",
    "promise",
    "react",
    "unicorn",
    "jsdoc",
  ],
  extends: [
    require.resolve("./jsdoc-typescript.js"),
    require.resolve("./dirty.js"),
    require.resolve("./esnext.js"),
    require.resolve("./node.js"),
    require.resolve("./browser.js"),
    require.resolve("./react.js"),
    require.resolve("./lodash.js"),
    require.resolve("./jest.js"),
    require.resolve("./ava.js"),
    require.resolve("./markdown.js"),
    require.resolve("./html.js"),
  ],
};
