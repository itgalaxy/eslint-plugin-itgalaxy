/* eslint-env node */
/* eslint-disable */

var plugin = require('../index');
var test = require('tape');

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}

test('basic properties of config', function (t) {
    t.ok(isObject(plugin.configs), 'configs is object');

    t.end();
});

test('eslint', function (t) {
    var eslint = require('eslint');

    t.ok(eslint, 'eslint is present');
    t.ok(eslint.CLIEngine, 'eslint cli engine is present');

    t.end();
});

test('load ava plugin config in eslint to validate all rule syntax is correct', function (t) {
    var eslint = require('eslint');
    var config = plugin.configs.ava;
    var hasAvaPlugin = config.plugins.indexOf('ava') !== -1;

    t.ok(hasAvaPlugin, 'there is ava plugin');

    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.ok(execute, 'eslint execute is success');
    t.ok(isObject(execute.results), 'execute results is object');

    t.equal(execute.results.length, 1, 'eslint execute with one results');
    t.equal(execute.errorCount, 0, 'eslint execute without errors');
    t.equal(execute.warningCount, 0, 'eslint execute without warnings');

    t.end();
});

test('load core plugin config in eslint to validate all rule syntax is correct', function (t) {
    var eslint = require('eslint');
    var config = plugin.configs.core;
    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: config
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.ok(execute, 'eslint execute is success');
    t.ok(isObject(execute.results), 'execute results is object');

    t.equal(execute.results.length, 1, 'eslint execute with one results');
    t.equal(execute.errorCount, 0, 'eslint execute without errors');
    t.equal(execute.warningCount, 0, 'eslint execute without warnings');

    t.end();
});

test('load lodash plugin config in eslint to validate all rule syntax is correct', function (t) {
    var eslint = require('eslint');
    var cli = new eslint.CLIEngine({
        useEslintrc: false,
        baseConfig: plugin.configs.lodash
    });

    var execute = cli.executeOnText('(function () {\n    \'use strict\';\n    var foo = 0;\n\n    foo += 1;\n}());\n');

    t.ok(execute, 'eslint execute is success');
    t.ok(isObject(execute.results), 'execute results is object');

    t.equal(execute.results.length, 1, 'eslint execute with one results');
    t.equal(execute.errorCount, 0, 'eslint execute without errors');
    t.equal(execute.warningCount, 0, 'eslint execute without warnings');

    t.end();
});
/* eslint-enable */
