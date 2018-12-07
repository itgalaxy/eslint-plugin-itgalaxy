"use strict";

const path = require("path");
const eslint = require("eslint");

function modifyPresetRules(presetName, modificator) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const config = require(path.resolve(__dirname, "config", presetName));
  const cli = new eslint.CLIEngine({
    baseConfig: config,
    useEslintrc: false
  });
  const presetRules = cli.config.baseConfig.rules;

  Object.keys(presetRules).forEach(rule => {
    presetRules[rule] = modificator(presetRules[rule]);
  });

  return presetRules;
}

module.exports = { modifyPresetRules };
