import {configs} from '../index';
import eslint from 'eslint';
import fs from 'fs';
import path from 'path';
import test from 'ava';

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('basic properties of config', (t) => {
    t.true(isObject(configs), 'configs is object');
});

test('eslint and eslint cli present', (t) => {
    t.true(isObject(eslint), 'eslint is present');
    t.true(typeof eslint.CLIEngine === 'function', 'eslint cli engine is present');
});

test('should all configs are present in export', (t) => {
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
        .map((resource) => path.basename(resource, '.js'));

    const excepted = Object.keys(configs);

    t.deepEqual(actual, excepted, 'all configs are present in export');
});

test('load `ava` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.ava;
    const hasAvaPlugin = config.plugins.indexOf('ava') !== -1;

    t.true(hasAvaPlugin, 'there is ava plugin');

    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    const execute = cli.executeOnText(
        '(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n'
    );

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load `core` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.core;
    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    const execute = cli.executeOnText('(function () {\n    \'use strict\';\n    (123).toString();\n}());\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load `esnext` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.esnext;

    config.extends = [];

    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    const execute = cli.executeOnText('let foo = 0;\n\n    foo += 1;\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load `lodash` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: configs.lodash
    });

    const execute = cli.executeOnText(
        '(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n'
    );

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load `node` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: configs.node
    });

    const execute = cli.executeOnText('module.export = 1;\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load `react` plugin config in eslint to validate all rule syntax is correct', (t) => {
    const config = configs.react;

    config.extends = [];

    config.rules['react/jsx-filename-extension'][0] = 'off';

    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    const execute = cli.executeOnText('var React = require(\'react\');var Hello = <div>{\'test\'}</div>');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');
    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});
