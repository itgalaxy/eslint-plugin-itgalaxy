# eslint-plugin-itgalaxy

[![NPM version](https://img.shields.io/npm/v/eslint-plugin-itgalaxy.svg)](https://www.npmjs.org/package/eslint-plugin-itgalaxy) [![Travis Build Status](https://img.shields.io/travis/itgalaxy/eslint-plugin-itgalaxy/master.svg?label=build)](https://travis-ci.org/itgalaxy/eslint-plugin-itgalaxy) [![dependencies Status](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy/status.svg)](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy) [![devDependencies Status](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy/dev-status.svg)](https://david-dm.org/itgalaxy/eslint-plugin-itgalaxy?type=dev)

Itgalaxy’s ESLint rules and configs.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```shell
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-itgalaxy`:

```shell
$ npm install eslint-plugin-itgalaxy --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) 
then you must also install `eslint-plugin-itgalaxy` globally.

## Usage

Itgalaxy’s ESLint configs come bundled in this package. In order to use them, you simply extend the relevant 
configuration in your project’s `.eslintrc`. For example, the following will extend 
the ESNext (ES2015 and later) config:

```json
{
  "extends": "plugin:itgalaxy/esnext"
}
```

If using React, extend the React version of the configuration 
(which adds some React-specific rules to those in the ESNext config):

```json
{
  "extends": "plugin:itgalaxy/react"
}
```

If working on an ES5 project, extend the ES5 version of the configuration:

```json
{
  "extends": "plugin:itgalaxy/es5"
}
```

You can also add some "augmenting" configs on top of the "core" config by extending an array of linting configs. 
For example, this package provides a lodash linting config, which can be added to the ESNext config 
with the following configuration file:

```json
{
  "extends": [
    "plugin:itgalaxy/esnext",
    "plugin:itgalaxy/lodash",
    "plugin:itgalaxy/mocha"
  ]
}
```

## Additional rules

Coming soon

## Provided configurations

This plugin provides the following core configurations:

- [all](lib/config/all.js): Use only for internal testing.
- [core](lib/config/core.js): Use for internal purposes.
- [es5](lib/config/es5.js): Use this for legacy projects.
- [esnext](lib/config/esnext.js): Use this for anything written with ES2015+ features.
- [node](lib/config/node.js):  Use this for nodejs projects.
- [react](lib/config/react.js): Use this for React projects.

This plugin also provides the following tool-specific configurations, which can be used on top 
of the core configurations:

- [ava](lib/config/ava.js): Use this for projects that use the [AVA test runner](https://github.com/sindresorhus/ava).
- [lodash](lib/config/lodash.js): Use this for projects that use [lodash](https://lodash.com).

## Creating New Rules

The easiest way to add new rules is to use the 
[ESLint Yeoman generator](https://www.npmjs.com/package/generator-eslint). 
Running `yo eslint:rule` from the root of this project should add the required main file, docs, 
and test for your new rules. Make sure that these are all filled out and consistent 
with the other rules before merging. All tests can be run using `npm test`.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
