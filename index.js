"use strict";

const all = require("./lib/config/all");
const ava = require("./lib/config/ava");
const esnext = require("./lib/config/esnext");
const html = require("./lib/config/html");
const jest = require("./lib/config/jest");
const lodash = require("./lib/config/lodash");
const markdown = require("./lib/config/markdown");
const node = require("./lib/config/node");
const react = require("./lib/config/react");
const utils = require("./lib/utils");

const configs = {
  all,
  ava,
  esnext,
  html,
  jest,
  lodash,
  markdown,
  node,
  react
};

module.exports = { configs, utils };
