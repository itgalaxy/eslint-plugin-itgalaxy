"use strict";

module.exports = {
  overrides: [
    {
      // Hack for https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/139
      files: ["**/*.html", "**/*.xhtml", "**/*.htm"],
      plugins: ["html"],
    },
  ],
};
