"use strict";

const allConfig = require("./lib/config/all");

const scriptConfig = require("./lib/config/script");
const moduleConfig = require("./lib/config/module");
const commonjsConfig = require("./lib/config/commonjs");
const dirtyConfig = require("./lib/config/dirty");

const nodeConfig = require("./lib/config/node");
const browserConfig = require("./lib/config/browser");

const esnextConfig = require("./lib/config/esnext");

const jsdocTypescript = require("./lib/config/jsdoc-typescript");

const jestConfig = require("./lib/config/jest");
const avaConfig = require("./lib/config/ava");

const reactConfig = require("./lib/config/react");

const htmlConfig = require("./lib/config/html");
const markdownConfig = require("./lib/config/markdown");

const configs = {
  all: allConfig,

  script: scriptConfig,
  module: moduleConfig,
  commonjs: commonjsConfig,
  dirty: dirtyConfig,

  node: nodeConfig,
  browser: browserConfig,

  esnext: esnextConfig,

  jsdocTypescript,

  jest: jestConfig,
  ava: avaConfig,

  react: reactConfig,

  html: htmlConfig,
  markdown: markdownConfig,
};

module.exports = { configs };
