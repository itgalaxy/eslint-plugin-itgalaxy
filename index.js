/* eslint-env node commonjs */
/* eslint-disable strict */

'use strict';

const all = require('./lib/config/all');
const ava = require('./lib/config/ava');
const core = require('./lib/config/core');
const es5 = require('./lib/config/es5');
const esnext = require('./lib/config/esnext');
const lodash = require('./lib/config/lodash');
const node = require('./lib/config/node');
const react = require('./lib/config/react');

const configs = {
    all,
    ava,
    core,
    es5,
    esnext,
    lodash,
    node,
    react
};

module.exports = {
    configs,
    rules: {}
};
