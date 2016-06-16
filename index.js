'use strict';

var avaConfig = require('./lib/config/ava');
var coreConfig = require('./lib/config/core');
var es5Config = require('./lib/config/es5');
var esnextConfig = require('./lib/config/esnext');
var lodashConfig = require('./lib/config/lodash');
var nodeConfig = require('./lib/config/node');
var reactConfig = require('./lib/config/react');

module.exports = {
    configs: {
        ava: avaConfig,
        core: coreConfig,
        es5: es5Config,
        esnext: esnextConfig,
        lodash: lodashConfig,
        node: nodeConfig,
        react: reactConfig
    }
};
