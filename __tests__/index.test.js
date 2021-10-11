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
    typeof eslint.CLIEngine === "function",
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

test("should load the 'script' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/script.js"] },
    rules: {
      "no-undef": "error",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    requireConfigFile: false,
    sourceType: "script",
  });

  const scriptReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/script.js"),
  ]);

  t.is(scriptReport.results.length, 1);
  t.is(scriptReport.errorCount, 0);
  t.is(scriptReport.warningCount, 0);

  const commonjsReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.results.length, 1);
  t.is(commonjsReport.errorCount, 4);
  t.is(commonjsReport.warningCount, 0);

  const moduleReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.results.length, 1);
  t.is(moduleReport.errorCount, 1);
  t.is(moduleReport.warningCount, 0);

  t.true(
    moduleReport.results[0].messages[0].message.includes(
      "Parsing error: 'import' and 'export' may appear only with 'sourceType: \"module\"'"
    )
  );
});

test("should load the 'commonjs' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/commonjs.js"] },
    rules: {
      "no-undef": "error",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

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

  const commonjsReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.results.length, 1);
  t.is(commonjsReport.errorCount, 0);
  t.is(commonjsReport.warningCount, 0);

  const moduleReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.results.length, 1);
  t.is(moduleReport.errorCount, 1);
  t.is(moduleReport.warningCount, 0);

  t.true(
    moduleReport.results[0].messages[0].message.includes(
      "Parsing error: 'import' and 'export' may appear only with 'sourceType: \"module\"'"
    )
  );
});

test("should load the 'module' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/module.js"] },
    rules: {
      "no-undef": "error",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

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

  const commonjsReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.results.length, 1);
  t.is(commonjsReport.errorCount, 5);
  t.is(commonjsReport.warningCount, 0);

  const moduleReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.results.length, 1);
  t.is(moduleReport.errorCount, 0);
  t.is(moduleReport.warningCount, 0);

  const wrongModuleCli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module.js", "./lib/config/esnext.js"],
    },
    rules: {
      "no-undef": "error",
    },
  });

  const wrongModuleReport = wrongModuleCli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/wrong-module.js"),
  ]);

  t.is(wrongModuleReport.results.length, 1);
  t.is(wrongModuleReport.errorCount, 1);
  t.is(wrongModuleReport.warningCount, 0);
});

test("should load the 'dirty' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/dirty.js"] },
    rules: {
      "no-undef": "error",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

  t.is(configForFile.parser, require.resolve("@babel/eslint-parser"));
  t.deepEqual(configForFile.parserOptions, {
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true },
    requireConfigFile: false,
    sourceType: "module",
  });

  const scriptReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/script.js"),
  ]);

  t.is(scriptReport.results.length, 1);
  t.is(scriptReport.errorCount, 0);
  t.is(scriptReport.warningCount, 0);

  const commonjsReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/commonjs.js"),
  ]);

  t.is(commonjsReport.results.length, 1);
  t.is(commonjsReport.errorCount, 0);
  t.is(commonjsReport.warningCount, 0);

  const moduleReport = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/module.js"),
  ]);

  t.is(moduleReport.results.length, 1);
  t.is(moduleReport.errorCount, 0);
  t.is(moduleReport.warningCount, 0);
});

test("should load the 'ava' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/module.js", "./lib/config/ava.js"] },
    rules: {
      "ava/no-ignored-test-files": "off",
    },
  });

  const configForFile = cli.getConfigForFile("tests/myfile.test.js");

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

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/ava.mjs"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'esnext' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/module.js",
        "./lib/config/browser.js",
      ],
    },
    rules: {
      "max-classes-per-file": "off",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

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
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: "module",
  });
  t.true(configForFile.env.es2020);
  t.true(configForFile.env.browser);

  t.true(configForFile.plugins.includes("import"));
  t.true(configForFile.plugins.includes("promise"));
  t.true(configForFile.plugins.includes("unicorn"));

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/good.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'node' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/esnext.js",
        "./lib/config/commonjs.js",
        "./lib/config/node.js",
      ],
    },
    rules: {
      "no-console": "off",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: "script",
  });
  t.true(configForFile.env.node);
  t.false(Boolean(configForFile.env.browser));

  t.true(configForFile.plugins.includes("node"));

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'browser' preset", (t) => {
  const cli = new eslint.CLIEngine({
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

  const configForFile = cli.getConfigForFile("myfile.js");

  t.deepEqual(configForFile.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: "script",
  });
  t.false(Boolean(configForFile.env.node));
  t.true(configForFile.env.browser);

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load 'node' and 'browser' presets", (t) => {
  const cliNodeAndBrowser = new eslint.CLIEngine({
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
    rules: {
      "no-console": "off",
      "import/no-nodejs-modules": "off",
    },
  });

  const configForFileNodeAndBrowser =
    cliNodeAndBrowser.getConfigForFile("myfile.js");

  t.deepEqual(configForFileNodeAndBrowser.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 2021,
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

  const reportNodeAndBrowser = cliNodeAndBrowser.executeOnFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(
    reportNodeAndBrowser.results.length,
    2,
    "eslint report with one results"
  );

  t.is(reportNodeAndBrowser.errorCount, 0, "eslint report without errors");
  t.is(reportNodeAndBrowser.warningCount, 0, "eslint report without warnings");

  const cliBrowserAndNode = new eslint.CLIEngine({
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
    rules: {
      "no-console": "off",
      "import/no-nodejs-modules": "off",
    },
  });

  const configForFileBrowserAndNode =
    cliBrowserAndNode.getConfigForFile("myfile.js");

  t.deepEqual(configForFileBrowserAndNode.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 2021,
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

  const reportBrowserAndNode = cliBrowserAndNode.executeOnFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(
    reportBrowserAndNode.results.length,
    2,
    "eslint report with one results"
  );
  t.is(reportBrowserAndNode.errorCount, 0, "eslint report without errors");
  t.is(reportBrowserAndNode.warningCount, 0, "eslint report without warnings");

  const cliESNextLast = new eslint.CLIEngine({
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
    rules: {
      "no-console": "off",
      "import/no-nodejs-modules": "off",
    },
  });

  const configForFileESNextLast = cliESNextLast.getConfigForFile("myfile.js");

  t.deepEqual(configForFileESNextLast.parserOptions, {
    ecmaFeatures: {
      globalReturn: true,
    },
    ecmaVersion: 2021,
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

  const reportESNextLast = cliESNextLast.executeOnFiles([
    path.resolve(__dirname, "./fixtures/node.js"),
    path.resolve(__dirname, "./fixtures/browser.js"),
  ]);

  t.is(reportESNextLast.results.length, 2, "eslint report with one results");
  t.is(reportESNextLast.errorCount, 0, "eslint report without errors");
  t.is(reportESNextLast.warningCount, 0, "eslint report without warnings");
});

test("should load the 'react' preset", (t) => {
  const cli = new eslint.CLIEngine({
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
    rules: {
      "no-console": "off",
      "react/prefer-stateless-function": "off",
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

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
    ecmaVersion: 2021,
    jsxPragma: null,
    requireConfigFile: false,
    sourceType: "module",
  });
  t.true(configForFile.env.browser);
  t.true(configForFile.plugins.includes("react"));
  t.true(configForFile.plugins.includes("jsx-a11y"));

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/react/**/*.jsx"),
  ]);

  t.is(report.results.length, 3, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'html' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/html.js"] },
    rules: {
      "no-alert": "error",
    },
  });

  const configForFile = cli.getConfigForFile("index.html");

  t.true(configForFile.plugins.includes("html"));

  const validReport = cli.executeOnText(
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
    "index.html"
  );

  t.is(validReport.results.length, 1, "eslint report with one results");
  t.is(validReport.errorCount, 0, "eslint report without errors");
  t.is(validReport.warningCount, 0, "eslint report without warnings");

  const invalidReport = cli.executeOnText(
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
    "index.html"
  );

  t.is(invalidReport.results.length, 1, "eslint report with one results");
  t.is(invalidReport.errorCount, 1, "eslint report without errors");
  t.is(invalidReport.warningCount, 0, "eslint report without warnings");
});

test("should load the 'jest' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module", "./lib/config/jest"],
    },
  });

  const configForFile = cli.getConfigForFile("tests/myfile.test.js");

  t.true(configForFile.plugins.includes("jest"));

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/jest.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'jsdoc-typescript' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/jsdoc-typescript", "./lib/config/module"],
    },
  });

  const configForFile = cli.getConfigForFile("myfile.js");

  t.true(configForFile.plugins.includes("jsdoc"));

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/jsdoc-typescript.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the 'markdown' preset", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: { extends: ["./lib/config/script", "./lib/config/markdown"] },
    rules: {
      "no-alert": "error",
    },
  });

  const configForFile = cli.getConfigForFile("README.md/0.js");

  t.true(configForFile.plugins.includes("markdown"));

  const validReport = cli.executeOnText(
    `\`\`\`js
var s = "JavaScript syntax highlighting";
\`\`\``,
    "valid.md"
  );

  t.is(validReport.results.length, 1, "eslint report with one results");
  t.is(validReport.errorCount, 0, "eslint report without errors");
  t.is(validReport.warningCount, 0, "eslint report without warnings");

  const invalidReport = cli.executeOnText(
    `\`\`\`js
var s = "JavaScript syntax highlighting";

alert("test");
\`\`\``,
    "invalid.md"
  );

  t.is(invalidReport.results.length, 1, "eslint report with one results");
  t.is(invalidReport.errorCount, 1, "eslint report without errors");
  t.is(invalidReport.warningCount, 0, "eslint report without warnings");

  const scriptCli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/script",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    rules: {
      "import/no-unresolved": "off",
    },
  });

  const scriptConfigForFile = scriptCli.getConfigForFile("README.md/0.js");

  t.deepEqual(scriptConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
  });
  t.true(scriptConfigForFile.plugins.includes("markdown"));

  const validScriptReport = scriptCli.executeOnText(
    `\`\`\`js
const test = require('test');

console.log(test);
\`\`\``,
    "valid.md"
  );

  t.is(validScriptReport.results.length, 1, "eslint report with one results");
  t.is(validScriptReport.errorCount, 0, "eslint report without errors");
  t.is(validScriptReport.warningCount, 0, "eslint report without warnings");

  const invalidScriptReport = scriptCli.executeOnText(
    `\`\`\`js
import test from 'test';

console.log(test);
\`\`\``,
    "invalid.md"
  );

  t.is(invalidScriptReport.results.length, 1, "eslint report with one results");
  t.is(invalidScriptReport.errorCount, 0, "eslint report without errors");
  t.is(invalidScriptReport.warningCount, 0, "eslint report without warnings");

  const moduleCli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/module",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    rules: {
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "node/no-unsupported-features/es-syntax": "off",
      "no-undef": "error",
    },
  });

  const moduleConfigForFile = moduleCli.getConfigForFile("README.md/0.js");

  t.deepEqual(moduleConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
    babelOptions: { parserOpts: { allowReturnOutsideFunction: false } },
  });
  t.true(moduleConfigForFile.plugins.includes("markdown"));

  const validModuleReport = moduleCli.executeOnText(
    `\`\`\`js
import test from 'lodash';

console.log(test);
\`\`\``,
    "valid.md"
  );

  t.is(validModuleReport.results.length, 1, "eslint report with one results");
  t.is(validModuleReport.errorCount, 0, "eslint report without errors");
  t.is(validModuleReport.warningCount, 0, "eslint report without warnings");

  const invalidModuleReport = moduleCli.executeOnText(
    `\`\`\`js
const test = require('test');

console.log(test);
\`\`\``,
    "invalid.md"
  );

  t.is(invalidModuleReport.results.length, 1, "eslint report with one results");
  t.is(invalidModuleReport.errorCount, 0, "eslint report without errors");
  t.is(invalidModuleReport.warningCount, 0, "eslint report without warnings");

  const dirtyCli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: [
        "./lib/config/dirty",
        "./lib/config/node",
        "./lib/config/markdown",
      ],
    },
    rules: {
      "no-undef": "error",
      "no-var": "error",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",
      "node/no-unsupported-features/es-syntax": "off",
    },
  });

  const dirtyConfigForFile = dirtyCli.getConfigForFile("README.md/0.js");

  t.deepEqual(dirtyConfigForFile.parserOptions, {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: { globalReturn: true, impliedStrict: true },
  });
  t.true(dirtyConfigForFile.plugins.includes("markdown"));

  const validDirtyReport = dirtyCli.executeOnText(
    `\`\`\`js
import test from 'lodash';

const otherTest = require('other-test');

console.log(test);
console.log(otherTest);
\`\`\``,
    "valid.md"
  );

  t.is(validDirtyReport.results.length, 1, "eslint report with one results");
  t.is(validDirtyReport.errorCount, 0, "eslint report without errors");
  t.is(validDirtyReport.warningCount, 0, "eslint report without warnings");

  const invalidDirtyReport = dirtyCli.executeOnText(
    `\`\`\`js
import test from 'test';

const otherTest = require('other-test');

console.log(test);
console.log(otherTest);

var qwerty = 1;
\`\`\``,
    "valid.md"
  );

  t.is(invalidDirtyReport.results.length, 1, "eslint report with one results");
  t.is(invalidDirtyReport.errorCount, 1, "eslint report without errors");
  t.is(invalidDirtyReport.warningCount, 0, "eslint report without warnings");

  t.true(invalidDirtyReport.results[0].messages[0].ruleId === "no-var");
});

test("integration tests for unused eslint comments", (t) => {
  const cli = new eslint.CLIEngine({
    ignore: false,
    useEslintrc: false,
    baseConfig: {
      extends: ["./lib/config/module.js", "./lib/config/esnext.js"],
    },
  });

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/unused-eslint-directives.js"),
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 2, "eslint report with warnings");

  t.true(
    report.results[0].messages[0].message.includes(
      "Unused eslint-disable directive"
    )
  );
  t.true(
    report.results[0].messages[1].message.includes(
      "Unused eslint-disable directive"
    )
  );
});

test("should load the 'all' preset", (t) => {
  const cli = new eslint.CLIEngine({
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
    rules: {
      "jest/require-hook": "off",
    },
  });

  const configForFile = cli.getConfigForFile("tests/myfile.test.js");

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
    ecmaVersion: 2021,
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

  const report = cli.executeOnText(
    `const value = 100;

/**
 * @returns {number} Number
 */
function foo() {
  return 1;
}

foo(value);`,
    "test.js"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("peerDependencies should be equal devDependencies", (t) => {
  for (const key in peerDependencies) {
    if (Object.prototype.hasOwnProperty.call(peerDependencies, key)) {
      t.true(peerDependencies[key] === devDependencies[key], `${key}`);
    }
  }
});
