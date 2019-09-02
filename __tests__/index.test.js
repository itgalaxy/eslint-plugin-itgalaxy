import fs from "fs";
import path from "path";
import eslint from "eslint";
import test from "ava";
import { configs } from "..";

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function dash2CamelCase(input) {
  return input.replace(/-([a-z])/gu, found => found[1].toUpperCase());
}

test("should the config is an object", t => {
  t.true(isObject(configs), "configs is an object");
});

test("should the `eslint` and the `eslint` CLI present", t => {
  t.true(isObject(eslint), "the `eslint` is present");
  t.true(
    typeof eslint.CLIEngine === "function",
    "the `eslint` cli engine is present"
  );
});

test("should all configs are present in exports", t => {
  const configDir = path.resolve(__dirname, "../lib/config");
  let files = [];

  // eslint-disable-next-line no-sync
  files = fs.readdirSync(configDir);

  const actual = files
    .filter(resource => resource !== ".eslintrc.js" && resource !== "rules")
    .map(resource => dash2CamelCase(path.basename(resource, ".js")));

  const excepted = Object.keys(configs);

  t.deepEqual(actual, excepted, "all configs are present in export");
});

test("should load the `all` plugin config in the `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.all);
  const { plugins } = config;

  t.deepEqual(plugins, [
    "ava",
    "import",
    "jsx-a11y",
    "promise",
    "unicorn",
    "html",
    "jest",
    "lodash",
    "markdown",
    "node",
    "react"
  ]);

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    "const value = 100;\n\nfunction foo() {\n  return 1;\n}\n\nfoo(value);\n",
    "test.js"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `ava` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.ava);
  const hasAvaPlugin = config.plugins.includes("ava");

  t.true(hasAvaPlugin, "there is ava plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    "(function () {\n    'use strict';\n    var foo = 0;\n\n    foo += 1;\n}());\n",
    "test.js"
  );

  t.true(isObject(report), "eslint execute is success");
  t.true(isObject(report.results), "report is object");

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `esnext` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.esnext);
  const hasUnicornPlugin = config.plugins.includes("unicorn");
  const hasPromisePlugin = config.plugins.includes("promise");
  const hasImportPlugin = config.plugins.includes("import");

  t.true(hasUnicornPlugin, "there is unicorn plugin");
  t.true(hasPromisePlugin, "there is promise plugin");
  t.true(hasImportPlugin, "there is import plugin");

  config.extends = [];

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    "/* global func */\nlet foo = 0;\n\n    foo += 1;\n\nfunc(foo);",
    "test.js"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `lodash` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.lodash);
  const hasLodashPlugin = config.plugins.includes("lodash");

  t.true(hasLodashPlugin, "there is lodash plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    "(function () {\n    'use strict';\n    var foo = 0;\n\n    foo += 1;\n}());\n",
    "test.js"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `node` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.node);
  const hasNodePlugin = config.plugins.includes("node");

  t.true(hasNodePlugin, "there is node plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText("module.export = 1;\n", "test.js");

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `react` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.react);
  const hasReactPlugin = config.plugins.includes("react");
  const hasjsxA11yPlugin = config.plugins.includes("jsx-a11y");

  t.true(hasReactPlugin, "there is react plugin");
  t.true(hasjsxA11yPlugin, "there is jsx-a11y plugin");

  config.rules["react/prefer-stateless-function"] = "off";

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    `
const React = require("react");

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is react component.</h2>
      </div>
    );
  }
}

module.exports = Clock;

  `,
    "test.jsx"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `html` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.html);
  const hasHTMLPlugin = config.plugins.includes("html");

  config.rules = {
    "no-alert": "error"
  };

  t.true(hasHTMLPlugin, "there is html plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

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

test("should load the `jest` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.jest);
  const hasJestPlugin = config.plugins.includes("jest");

  t.true(hasJestPlugin, "there is jest plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnText(
    "(function () {\n    'use strict';\n    var foo = 0;\n\n    foo += 1;\n}());\n",
    "test.js"
  );

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("should load the `markdown` plugin config in `eslint` to validate all rule syntax is correct", t => {
  const config = Object.assign({}, configs.markdown);
  const hasMarkdownPlugin = config.plugins.includes("markdown");

  config.rules = {
    "no-alert": "error"
  };

  t.true(hasMarkdownPlugin, "there is markdown plugin");

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const validReport = cli.executeOnText(
    `\`\`\`javascript
var s = "JavaScript syntax highlighting";
\`\`\``,
    "valid.md"
  );

  t.is(validReport.results.length, 1, "eslint report with one results");
  t.is(validReport.errorCount, 0, "eslint report without errors");
  t.is(validReport.warningCount, 0, "eslint report without warnings");

  const invalidReport = cli.executeOnText(
    `\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert("test");
\`\`\``,
    "invalid.md"
  );

  t.is(invalidReport.results.length, 1, "eslint report with one results");
  t.is(invalidReport.errorCount, 1, "eslint report without errors");
  t.is(invalidReport.warningCount, 0, "eslint report without warnings");
});

test("integration tests for `esnext`", t => {
  const config = Object.assign({}, configs.esnext);

  config.rules["max-classes-per-file"] = "off";

  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/good.js")
  ]);

  t.is(report.results.length, 1, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("integration tests for `react`", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.esnext, configs.react),
    useEslintrc: false
  });

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/react/**/*.jsx")
  ]);

  t.is(report.results.length, 3, "eslint report with one results");
  t.is(report.errorCount, 0, "eslint report without errors");
  t.is(report.warningCount, 0, "eslint report without warnings");
});

test("integration tests for pure node project", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.node),
    useEslintrc: false
  });
  const config = cli.getConfigForFile("myfile.js");

  t.is(config.parserOptions.sourceType, "script");
});

test("integration tests for es modules project", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.esnext),
    useEslintrc: false
  });
  const config = cli.getConfigForFile("myfile.js");

  t.is(config.parserOptions.sourceType, "module");
});

// Example: a `src` directory doesn't contains es modules
test("integration tests for node project with latest ES spec", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.esnext, configs.node)
  });
  const config = cli.getConfigForFile("myfile.js");

  t.is(config.parserOptions.sourceType, "script");
});

// Example: a `src` directory doesn't contains es modules
test("'sourceType' for es modules project with latest ES spec", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.esnext, configs.node)
  });
  const config = cli.getConfigForFile("myfile.js");

  t.is(config.parserOptions.sourceType, "script");
});

test("integration tests for unused eslint comments", t => {
  const cli = new eslint.CLIEngine({
    baseConfig: Object.assign({}, configs.esnext),
    useEslintrc: false
  });

  const report = cli.executeOnFiles([
    path.resolve(__dirname, "./fixtures/unused-eslint-directives.js")
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
