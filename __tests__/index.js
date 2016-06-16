'use strict';

/* eslint-disable ava/max-asserts */

var eslint = require('eslint');
var path = require('path');
var fs = require('fs');
var plugin = require('../index');
var test = require('ava');

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

test('basic properties of config', function (t) {
    t.true(isObject(plugin.configs), 'configs is object');
});

test('eslint and eslint cli present', function (t) {
    t.true(isObject(eslint), 'eslint is present');
    t.true(typeof eslint.CLIEngine === 'function', 'eslint cli engine is present');
});

test('should all configs are present in export', function (t) {
    var configDir = path.resolve(__dirname, '../lib/config');
    var files = [];

    try {
        /* eslint-disable no-sync */
        files = fs.readdirSync(configDir);
        /* eslint-enable no-sync */
    } catch (error) {
        throw error;
    }

    var actual = files
        .filter(function (resource) {
            return resource !== '.eslintrc.js' && resource !== 'rules';
        })
        .map(function (resource) {
            return path.basename(resource, '.js');
        });

    var excepted = Object.keys(plugin.configs);

    t.deepEqual(actual, excepted, 'all configs are present in export');
});

test('load ava plugin config in eslint to validate all rule syntax is correct', function (t) {
    var config = plugin.configs.ava;
    var hasAvaPlugin = config.plugins.indexOf('ava') !== -1;

    t.true(hasAvaPlugin, 'there is ava plugin');

    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load core plugin config in eslint to validate all rule syntax is correct', function (t) {
    var config = plugin.configs.core;
    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load esnext plugin config in eslint to validate all rule syntax is correct', function (t) {
    var config = plugin.configs.esnext;

    config.extends = [];

    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    var execute = cli.executeOnText('let foo = 0;\n\n    foo += 1;\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load lodash plugin config in eslint to validate all rule syntax is correct', function (t) {
    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: plugin.configs.lodash
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load node plugin config in eslint to validate all rule syntax is correct', function (t) {
    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: plugin.configs.node
    });

    var execute = cli.executeOnText('module.export = 1;\n');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');

    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});

test('load react plugin config in eslint to validate all rule syntax is correct', function (t) {
    var config = plugin.configs.react;

    config.extends = [];

    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: plugin.configs.react
    });

    var execute = cli.executeOnText('var React = require(\'react\');var Hello = <div>{\'test\'}</div>');

    t.true(isObject(execute), 'eslint execute is success');
    t.true(isObject(execute.results), 'execute results is object');
    t.is(execute.results.length, 1, 'eslint execute with one results');
    t.is(execute.errorCount, 0, 'eslint execute without errors');
    t.is(execute.warningCount, 0, 'eslint execute without warnings');
});
