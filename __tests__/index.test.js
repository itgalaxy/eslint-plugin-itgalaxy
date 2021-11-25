import * as fs from "fs";
import * as path from "path";
import * as eslint from "eslint";
import test from "ava";
import { configs } from "../index.js";
import { devDependencies, peerDependencies } from "../package.json";

/**
 * @param {any} obj Maybe object
 * @returns {boolean} Is object?
 */
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

/**
 * @param {string} input Any input
 * @returns {string} String transformed from dash to camel case
 */
function dash2CamelCase(input) {
  return input.replace(/-([a-z])/gu, (found) => found[1].toUpperCase());
}

test("should the config is an object", (t) => {
  t.true(isObject(configs), "configs is an object");
});

test("should the `eslint` and the `eslint` CLI present", (t) => {
  t.true(isObject(eslint), "the `eslint` is present");
  t.true(
    typeof eslint.ESLint === "function",
    "the `eslint` cli engine is present"
  );
});

test("should all configs are present in exports", (t) => {
  const configDir = path.resolve(__dirname, "../lib/config");
  /** @type {string[]} */
  let files = [];

  // eslint-disable-next-line node/no-sync
  files = fs.readdirSync(configDir).filter((item) => item !== "shared");

  const actual = files
    .filter((resource) => resource !== ".eslintrc.js" && resource !== "rules")
    .map((resource) => dash2CamelCase(path.basename(resource, ".js")))
    .sort();

  const excepted = Object.keys(configs).sort();

  t.deepEqual(actual, excepted, "all configs are present in export");
});

test("should load the 'script' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/script.js"] },
    overrideConfig: {
      rules: {
        "no-undef": "error",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    requireConfigFile: false,
    sourceType: "script",
  });

  const scriptReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/script.js"),
  ]);

  t.is(scriptReport.length, 1);
  t.is(scriptReport[0].errorCount, 0);
  t.is(scriptReport[0].warningCount, 0);

  const commonjsReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.length, 1);
  t.is(commonjsReport[0].errorCount, 4);
  t.is(commonjsReport[0].warningCount, 0);

  const moduleReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.length, 1);
  t.is(moduleReport[0].errorCount, 1);
  t.is(moduleReport[0].warningCount, 0);

  t.true(
    moduleReport[0].messages[0].message.includes(
      "Parsing error: 'import' and 'export' may appear only with 'sourceType: \"module\"'"
    )
  );
});

test("should load the 'commonjs' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/commonjs.js"] },
    overrideConfig: {
      rules: {
        "no-undef": "error",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFile.plugins.includes("import"));
  t.true(configForFile.plugins.includes("node"));

  const commonjsReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.length, 1);
  t.is(commonjsReport[0].errorCount, 0);
  t.is(commonjsReport[0].warningCount, 0);

  const moduleReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.length, 1);
  t.is(moduleReport[0].errorCount, 1);
  t.is(moduleReport[0].warningCount, 0);

  t.true(
    moduleReport[0].messages[0].message.includes(
      "Parsing error: 'import' and 'export' may appear only with 'sourceType: \"module\"'"
    )
  );
});

test("should load the 'module' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/module.js"] },
    overrideConfig: {
      rules: {
        "no-undef": "error",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    babelOptions: {
      parserOpts: {
        allowReturnOutsideFunction: false,
      },
    },
    ecmaFeatures: {
      globalReturn: false,
    },
    requireConfigFile: false,
    sourceType: "module",
  });

  const commonjsReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.length, 1);
  t.is(commonjsReport[0].errorCount, 5);
  t.is(commonjsReport[0].warningCount, 0);

  const moduleReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.length, 1);
  t.is(moduleReport[0].errorCount, 0);
  t.is(moduleReport[0].warningCount, 0);

  const wrongModuleCli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module.js", "./lib/config/esnext.js"],
    },
    overrideConfig: {
      rules: {
        "no-undef": "error",
      },
    },
  });

  const wrongModuleReport = await wrongModuleCli.lintFiles([
    path.resolve(__dirname, "./fixtures/wrong-module.js"),
  ]);

  t.is(wrongModuleReport.length, 1);
  t.is(wrongModuleReport[0].errorCount, 1);
  t.is(wrongModuleReport[0].warningCount, 0);
});

test("should load the 'dirty' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/dirty.js"] },
    overrideConfig: {
      rules: {
        "no-undef": "error",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true },
    requireConfigFile: false,
    sourceType: "module",
  });

  const scriptReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/script.js"),
  ]);

  t.is(scriptReport.length, 1);
  t.is(scriptReport[0].errorCount, 0);
  t.is(scriptReport[0].warningCount, 0);

  const commonjsReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.length, 1);
  t.is(commonjsReport[0].errorCount, 0);
  t.is(commonjsReport[0].warningCount, 0);

  const moduleReport = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.length, 1);
  t.is(moduleReport[0].errorCount, 0);
  t.is(moduleReport[0].warningCount, 0);
});

test("should load the 'ava' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/module.js", "./lib/config/ava.js"] },
    overrideConfig: {
      rules: {
        "ava/no-ignored-test-files": "off",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile(
    "tests/myfile.test.js"
  );

  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    babelOptions: {
      parserOpts: {
        allowReturnOutsideFunction: false,
      },
    },
    ecmaFeatures: {
      globalReturn: false,
    },
    requireConfigFile: false,
    sourceType: "module",
  });

  t.true(configForFile.plugins.includes("ava"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/ava.mjs"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'esnext' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/module.js",
        "./lib/config/browser.js",
      ],
    },
    overrideConfig: {
      rules: {
        "max-classes-per-file": "off",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    babelOptions: {
      parserOpts: {
        allowReturnOutsideFunction: false,
      },
    },
    ecmaFeatures: {
      globalReturn: false,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  });
  t.true(configForFile.env.es2020);
  t.true(configForFile.env.browser);

  t.true(configForFile.plugins.includes("import"));
  t.true(configForFile.plugins.includes("promise"));
  t.true(configForFile.plugins.includes("unicorn"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/good.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'node' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/commonjs.js",
        "./lib/config/node.js",
      ],
    },
    overrideConfig: {
      rules: {
        "no-console": "off",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFile.env.node);
  t.false(Boolean(configForFile.env.browser));

  t.true(configForFile.plugins.includes("node"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'browser' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/script.js",
        "./lib/config/browser.js",
        "./lib/config/esnext.js",
      ],
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "script",
  });
  t.false(Boolean(configForFile.env.node));
  t.true(configForFile.env.browser);

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load 'node' and 'browser' presets", async (t) => {
  const cliNodeAndBrowser = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/commonjs.js",
        "./lib/config/node.js",
        "./lib/config/browser.js",
      ],
    },
    overrideConfig: {
      rules: {
        "no-console": "off",
        "import/no-nodejs-modules": "off",
      },
    },
  });

  const configForFileNodeAndBrowser =
    await cliNodeAndBrowser.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFileNodeAndBrowser.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFileNodeAndBrowser.env.node);
  t.true(configForFileNodeAndBrowser.env.browser);

  // Rules for node and browser should
  t.true(
    configForFileNodeAndBrowser.rules["node/no-deprecated-api"][0] === "error"
  );
  t.true(
    configForFileNodeAndBrowser.rules[
      "unicorn/prefer-add-event-listener"
    ][0] === "error"
  );

  const reportNodeAndBrowser = await cliNodeAndBrowser.lintFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(reportNodeAndBrowser.length, 2, "eslint report with one results");

  t.is(reportNodeAndBrowser[0].errorCount, 0, "eslint report without errors");
  t.is(
    reportNodeAndBrowser[0].warningCount,
    0,
    "eslint report without warnings"
  );

  const cliBrowserAndNode = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/commonjs.js",
        "./lib/config/browser.js",
        "./lib/config/node.js",
      ],
    },
    overrideConfig: {
      rules: {
        "no-console": "off",
        "import/no-nodejs-modules": "off",
      },
    },
  });

  const configForFileBrowserAndNode =
    await cliBrowserAndNode.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFileBrowserAndNode.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFileBrowserAndNode.env.node);
  t.true(configForFileBrowserAndNode.env.browser);

  // Rules for node and browser should
  t.true(
    configForFileBrowserAndNode.rules["node/no-deprecated-api"][0] === "error"
  );
  t.true(
    configForFileBrowserAndNode.rules[
      "unicorn/prefer-add-event-listener"
    ][0] === "error"
  );

  const reportBrowserAndNode = await cliBrowserAndNode.lintFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(reportBrowserAndNode.length, 2, "eslint report with one results");
  t.is(reportBrowserAndNode[0].errorCount, 0, "eslint report without errors");
  t.is(
    reportBrowserAndNode[0].warningCount,
    0,
    "eslint report without warnings"
  );

  const cliESNextLast = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/commonjs.js",
        "./lib/config/browser.js",
        "./lib/config/node.js",
      ],
    },
    overrideConfig: {
      rules: {
        "no-console": "off",
        "import/no-nodejs-modules": "off",
      },
    },
  });

  const configForFileESNextLast = await cliESNextLast.calculateConfigForFile(
    "myfile.js"
  );

  t.deepEqual(configForFileESNextLast.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFileESNextLast.env.node);
  t.true(configForFileESNextLast.env.browser);

  // Rules for node and browser should
  t.true(
    configForFileESNextLast.rules["node/no-deprecated-api"][0] === "error"
  );
  t.true(
    configForFileESNextLast.rules["unicorn/prefer-add-event-listener"][0] ===
      "error"
  );

  const reportESNextLast = await cliESNextLast.lintFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(reportESNextLast.length, 2, "eslint report with one results");
  t.is(reportESNextLast[0].errorCount, 0, "eslint report without errors");
  t.is(reportESNextLast[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'react' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/module.js",
        "./lib/config/browser.js",
        "./lib/config/esnext.js",
        "./lib/config/react.js",
      ],
    },
    overrideConfig: {
      rules: {
        "no-console": "off",
        "react/prefer-stateless-function": "off",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    babelOptions: {
      parserOpts: {
        allowReturnOutsideFunction: false,
        plugins: ["jsx"],
      },
    },
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    ecmaVersion: "latest",
    jsxPragma: null,
    requireConfigFile: false,
    sourceType: "module",
  });
  t.true(configForFile.env.browser);
  t.true(configForFile.plugins.includes("react"));
  t.true(configForFile.plugins.includes("jsx-a11y"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/react/**/*.jsx"),
  ]);

  t.is(report.length, 3, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'html' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/html.js"] },
    overrideConfig: {
      rules: {
        "no-alert": "error",
      },
    },
  });

  const configForFile = await await cli.calculateConfigForFile("index.html");

  t.true(configForFile.plugins.includes("html"));

  const validReport = await await cli.lintText(
    `<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Script Tag</title>
  <script>
    var i = 1;
  </script>
 </head>
 <body>
  <div id="welcome"></div>
 </body>
</html>`,
    {
      filePath: "index.html",
    }
  );

  t.is(validReport.length, 1, "eslint report with one results");
  t.is(validReport[0].errorCount, 0, "eslint report without errors");
  t.is(validReport[0].warningCount, 0, "eslint report without warnings");

  const invalidReport = await await cli.lintText(
    `<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Script Tag</title>
  <script>
  alert('test');
  </script>
 </head>
 <body>
  <div id="welcome"></div>
 </body>
</html>`,
    {
      filePath: "index.html",
    }
  );

  t.is(invalidReport.length, 1, "eslint report with one results");
  t.is(invalidReport[0].errorCount, 1, "eslint report without errors");
  t.is(invalidReport[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'jest' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module", "./lib/config/jest"],
    },
  });

  const configForFile = await cli.calculateConfigForFile(
    "tests/myfile.test.js"
  );

  t.true(configForFile.plugins.includes("jest"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/jest.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'jsdoc-typescript' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/jsdoc-typescript", "./lib/config/module"],
    },
  });

  const configForFile = await cli.calculateConfigForFile("myfile.js");

  t.true(configForFile.plugins.includes("jsdoc"));

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/jsdoc-typescript.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("should load the 'markdown' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/script", "./lib/config/markdown"] },
    overrideConfig: {
      rules: {
        "no-alert": "error",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile("README.md/0.js");

  t.true(configForFile.plugins.includes("markdown"));

  const validReport = await cli.lintText(
    `\`\`\`js
var s = "JavaScript syntax highlighting";
\`\`\``,
    {
      filePath: "valid.md",
    }
  );

  t.is(validReport.length, 1, "eslint report with one results");
  t.is(validReport[0].errorCount, 0, "eslint report without errors");
  t.is(validReport[0].warningCount, 0, "eslint report without warnings");

  const invalidReport = await cli.lintText(
    `\`\`\`js
var s = "JavaScript syntax highlighting";

alert("test");
\`\`\``,
    {
      filePath: "invalid.md",
    }
  );

  t.is(invalidReport.length, 1, "eslint report with one results");
  t.is(invalidReport[0].errorCount, 1, "eslint report without errors");
  t.is(invalidReport[0].warningCount, 0, "eslint report without warnings");

  const scriptCli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/script",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    overrideConfig: {
      rules: {
        "import/no-unresolved": "off",
      },
    },
  });

  const scriptConfigForFile = await scriptCli.calculateConfigForFile(
    "README.md/0.js"
  );

  t.deepEqual(scriptConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
  });
  t.true(scriptConfigForFile.plugins.includes("markdown"));

  const validScriptReport = await cli.lintText(
    `\`\`\`js
const test = require('test');

console.log(test);
\`\`\``,
    {
      filePath: "valid.md",
    }
  );

  t.is(validScriptReport.length, 1, "eslint report with one results");
  t.is(validScriptReport[0].errorCount, 0, "eslint report without errors");
  t.is(validScriptReport[0].warningCount, 0, "eslint report without warnings");

  const invalidScriptReport = await cli.lintText(
    `\`\`\`js
import test from 'test';

console.log(test);
\`\`\``,
    {
      filePath: "invalid.md",
    }
  );

  t.is(invalidScriptReport.length, 1, "eslint report with one results");
  t.is(invalidScriptReport[0].errorCount, 0, "eslint report without errors");
  t.is(
    invalidScriptReport[0].warningCount,
    0,
    "eslint report without warnings"
  );

  const moduleCli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/module",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    overrideConfig: {
      rules: {
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "node/no-unsupported-features/es-syntax": "off",
        "no-undef": "error",
      },
    },
  });

  const moduleConfigForFile = await moduleCli.calculateConfigForFile(
    "README.md/0.js"
  );

  t.deepEqual(moduleConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
    babelOptions: { parserOpts: { allowReturnOutsideFunction: false } },
  });
  t.true(moduleConfigForFile.plugins.includes("markdown"));

  const validModuleReport = await moduleCli.lintText(
    `\`\`\`js
import test from 'lodash';

console.log(test);
\`\`\``,
    {
      filePath: "valid.md",
    }
  );

  t.is(validModuleReport.length, 1, "eslint report with one results");
  t.is(validModuleReport[0].errorCount, 0, "eslint report without errors");
  t.is(validModuleReport[0].warningCount, 0, "eslint report without warnings");

  const invalidModuleReport = await moduleCli.lintText(
    `\`\`\`js
const test = require('test');

console.log(test);
\`\`\``,
    {
      filePath: "invalid.md",
    }
  );

  t.is(invalidModuleReport.length, 1, "eslint report with one results");
  t.is(invalidModuleReport[0].errorCount, 0, "eslint report without errors");
  t.is(
    invalidModuleReport[0].warningCount,
    0,
    "eslint report without warnings"
  );

  const dirtyCli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/dirty",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    overrideConfig: {
      rules: {
        "no-undef": "error",
        "no-var": "error",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "import/extensions": "off",
        "node/no-unsupported-features/es-syntax": "off",
      },
    },
  });

  const dirtyConfigForFile = await dirtyCli.calculateConfigForFile(
    "README.md/0.js"
  );

  t.deepEqual(dirtyConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
  });
  t.true(dirtyConfigForFile.plugins.includes("markdown"));

  const validDirtyReport = await dirtyCli.lintText(
    `\`\`\`js
import test from 'lodash';

const otherTest = require('other-test');

console.log(test);
console.log(otherTest);
\`\`\``,
    {
      filePath: "valid.md",
    }
  );

  t.is(validDirtyReport.length, 1, "eslint report with one results");
  t.is(validDirtyReport[0].errorCount, 0, "eslint report without errors");
  t.is(validDirtyReport[0].warningCount, 0, "eslint report without warnings");

  const invalidDirtyReport = await dirtyCli.lintText(
    `\`\`\`js
import test from 'test';

const otherTest = require('other-test');

console.log(test);
console.log(otherTest);

var qwerty = 1;
\`\`\``,
    {
      filePath: "valid.md",
    }
  );

  t.is(invalidDirtyReport.length, 1, "eslint report with one results");
  t.is(invalidDirtyReport[0].errorCount, 1, "eslint report without errors");
  t.is(invalidDirtyReport[0].warningCount, 0, "eslint report without warnings");

  t.true(invalidDirtyReport[0].messages[0].ruleId === "no-var");
});

test("integration tests for unused eslint comments", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module.js", "./lib/config/esnext.js"],
    },
  });

  const report = await cli.lintFiles([
    path.resolve(__dirname, "./fixtures/unused-eslint-directives.js"),
  ]);

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 2, "eslint report with warnings");

  t.true(
    report[0].messages[0].message.includes("Unused eslint-disable directive")
  );
  t.true(
    report[0].messages[1].message.includes("Unused eslint-disable directive")
  );
});

test("should load the 'all' preset", async (t) => {
  const cli = new eslint.ESLint({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/jsdoc-typescript.js",
        "./lib/config/dirty.js",
        "./lib/config/node.js",
        "./lib/config/browser.js",
        "./lib/config/esnext.js",
        "./lib/config/html.js",
        "./lib/config/markdown.js",
        "./lib/config/react.js",
        "./lib/config/jest.js",
        "./lib/config/ava.js",
      ],
    },
    overrideConfig: {
      rules: {
        "jest/require-hook": "off",
      },
    },
  });

  const configForFile = await cli.calculateConfigForFile(
    "tests/myfile.test.js"
  );

  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    babelOptions: {
      parserOpts: {
        plugins: ["jsx"],
      },
    },
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
    },
    ecmaVersion: "latest",
    jsxPragma: null,
    requireConfigFile: false,
    sourceType: "module",
  });
  t.true(configForFile.plugins.includes("jsdoc"));
  t.true(configForFile.plugins.includes("ava"));
  t.true(configForFile.plugins.includes("import"));
  t.true(configForFile.plugins.includes("jsx-a11y"));
  t.true(configForFile.plugins.includes("promise"));
  t.true(configForFile.plugins.includes("unicorn"));
  t.true(configForFile.plugins.includes("jest"));
  t.true(configForFile.plugins.includes("node"));
  t.true(configForFile.plugins.includes("react"));

  const report = await cli.lintText(
    `const value = 100;

/**
 * @returns {number} Number
 */
function foo() {
  return 1;
}

foo(value);`,
    {
      filePath: "test.js",
    }
  );

  t.is(report.length, 1, "eslint report with one results");
  t.is(report[0].errorCount, 0, "eslint report without errors");
  t.is(report[0].warningCount, 0, "eslint report without warnings");
});

test("peerDependencies should be equal devDependencies", (t) => {
  for (const key in peerDependencies) {
    if (Object.prototype.hasOwnProperty.call(peerDependencies, key)) {
      t.true(peerDependencies[key] === devDependencies[key], `${key}`);
    }
  }
});
