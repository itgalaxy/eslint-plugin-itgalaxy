import { configs } from '../index'; // eslint-disable-line import/named
import eslint from 'eslint';
import fs from 'fs';
import path from 'path';
import test from 'ava';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

function dash2CamelCase(input) {
    return input.replace(/-([a-z])/g, (found) => found[1].toUpperCase());
}

test('basic properties of config', (t) => {
    t.true(isObject(configs), 'configs is object');
});

test('eslint and eslint cli present', (t) => {
    t.true(isObject(eslint), 'eslint is present');
    t.true(typeof eslint.CLIEngine === 'function', 'eslint cli engine is present');
});

test('should all configs are present in exports', (t) => {
    const configDir = path.resolve(__dirname, '../lib/config');
    let files = [];

    try {
        /* eslint-disable no-sync */
        files = fs.readdirSync(configDir);
        /* eslint-enable no-sync */
    } catch (error) {
        throw error;
    }

    const actual = files
        .filter((resource) => resource !== '.eslintrc.js' && resource !== 'rules')
        .map((resource) => dash2CamelCase(path.basename(resource, '.js')));

    const excepted = Object.keys(configs);

    t.deepEqual(actual, excepted, 'all configs are present in export');
});

test('load `all` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.all;

    config.extends = [];

    config.rules['react/jsx-filename-extension'] = 'off';

    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText('const value = 100;\n\nfunction foo() {\n    return 1;\n}\n\nfoo(value);\n');

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');
    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `ava` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.ava;
    const hasAvaPlugin = config.plugins.indexOf('ava') !== -1;

    t.true(hasAvaPlugin, 'there is ava plugin');

    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText(
        '(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n'
    );

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `core` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.core;
    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText('(function () {\n    \'use strict\';\n\n    (123).toString();\n}());\n');

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `es5` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.es5;
    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText('(function () {\n    \'use strict\';\n\n    (123).toString();\n}());\n');

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `esnext` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.esnext;

    config.extends = [];

    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText('let foo = 0;\n\n    foo += 1;\n');

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `lodash` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const cli = new eslint.CLIEngine({
        baseConfig: configs.lodash,
        useEslintrc: false
    });

    const report = cli.executeOnText(
        '(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n'
    );

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `node` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const cli = new eslint.CLIEngine({
        baseConfig: configs.node,
        useEslintrc: false
    });

    const report = cli.executeOnText('module.export = 1;\n');

    t.true(isObject(report), 'eslint report is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('load `react` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.react;

    config.extends = [];

    config.rules['react/jsx-filename-extension'] = 'off';

    const cli = new eslint.CLIEngine({
        baseConfig: config,
        useEslintrc: false
    });

    const report = cli.executeOnText('var React = require(\'react\');var Hello = <div>{\'test\'}</div>');

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');
    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('integration tests for `esnext`', (t) => {
    const cli = new eslint.CLIEngine({
        baseConfig: configs.esnext,
        useEslintrc: false
    });

    const report = cli.executeOnFiles([path.resolve(__dirname, './fixtures/good.js')]);

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 1, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});

test('integration tests for `react`', (t) => {
    const cli = new eslint.CLIEngine({
        baseConfig: configs.react
    });

    const report = cli.executeOnFiles([path.resolve(__dirname, './fixtures/react/**/*.jsx')]);

    t.true(isObject(report), 'eslint execute is success');
    t.true(isObject(report.results), 'report is object');

    t.is(report.results.length, 3, 'eslint report with one results');
    t.is(report.errorCount, 0, 'eslint report without errors');
    t.is(report.warningCount, 0, 'eslint report without warnings');
});
