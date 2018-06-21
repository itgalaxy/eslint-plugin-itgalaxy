"use strict";

const all = require("./lib/config/all");
const ava = require("./lib/config/ava");
const core = require("./lib/config/core");
const es5 = require("./lib/config/es5");
const esnext = require("./lib/config/esnext");
const html = require("./lib/config/html");
const jest = require("./lib/config/jest");
const lodash = require("./lib/config/lodash");
const markdown = require("./lib/config/markdown");
const node = require("./lib/config/node");
const prettier = require("./lib/config/prettier");
const react = require("./lib/config/react");

const configs = {
  all,
  ava,
  core,
  es5,
  esnext,
  html,
  jest,
  lodash,
  markdown,
  node,
  prettier,
  react
};

module.exports = {
  configs,
  rules: {}
};
