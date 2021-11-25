"use strict";

const dirtySharedConfig = require("./shared/dirty");

module.exports = {
  overrides: [
    {
      // In v2, explicitly apply eslint-plugin-markdown's `markdown`
      // processor on any Markdown files you want to lint.
      files: ["**/*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}"],
      processor: "markdown/markdown",
    },
    {
      ...dirtySharedConfig,
      // In v2, configuration for fenced code blocks is separate from the
      // containing Markdown file. Each code block has a virtual filename
      // appended to the Markdown file's path.
      files: ["**/*.{md,markdown,mdown,mkdn,mkd,mdwn,mkdown,ron}/**"],
      // Configuration for fenced code blocks goes with the override for
      // the code block's virtual filename, for example:
      parserOptions: {
        ...dirtySharedConfig.parserOptions,
        ecmaFeatures: {
          ...dirtySharedConfig.parserOptions.ecmaFeatures,
          impliedStrict: true,
        },
        babelOptions: undefined,
      },
      plugins: ["markdown"],
      rules: {
        ...dirtySharedConfig.rules,
        // The Markdown parser automatically trims trailing newlines from code blocks.
        "eol-last": "off",

        // For example
        "no-console": "off",

        // In code snippets and examples, these rules are often counterproductive to clarity and brevity.
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-unused-expressions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "node/no-unpublished-require": "off",
        "node/no-unpublished-import": "off",

        // Adding a "use strict" directive at the top of every code block is tedious and distracting. The config opts into strict mode parsing without the directive.
        strict: "off",

        // The processor will not receive a Unicode Byte Order
        // Mark from the Markdown parser.
        "unicode-bom": "off",

        // Avoid naming nested blocks
        "unicorn/filename-case": "off",
        "unicorn/no-empty-file": "off",
      },
    },
  ],
};
