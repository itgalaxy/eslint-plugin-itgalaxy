"use strict";

const base = require("./lib/config/base");

const moduleType = require("./lib/config/module");
const script = require("./lib/config/script");
const dirty = require("./lib/config/dirty");

const node = require("./lib/config/node");
const browser = require("./lib/config/browser");

const all = require("./lib/config/all");
const ava = require("./lib/config/ava");
const esnext = require("./lib/config/esnext");
const html = require("./lib/config/html");
const jest = require("./lib/config/jest");
const lodash = require("./lib/config/lodash");
const markdown = require("./lib/config/markdown");
const react = require("./lib/config/react");

const jsdocTypescript = require("./lib/config/jsdoc-typescript");

const configs = {
  base,

  module: moduleType,
  script,
  dirty,

  node,
  browser,

  esnext,

  lodash,
  react,
  html,
  markdown,
  ava,
  jest,

  jsdocTypescript,

  all,
};

module.exports = { configs };
