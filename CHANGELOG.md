# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org). Except add new
rule (it is breaking changed by default).

## 95.0.0 - 2018-12-24

- Added: `no-useless-catch` rule.
- Chore: minimum require `eslint` version is now `^5.11.0`.

## 94.0.0 - 2018-12-11

- Changed: move `unicorn` rules into `esnext` preset.
- Changed: remove `sourceType` from `react` preset.
- Changed: remove `es6` from `jest` preset.
- Changed: remove `es6` from `ava` preset.
- Changed: remove `es6` from `html` preset.
- Fixed: add `jest/globals` to `jest` preset.
- Removed: `globals` from `react` preset.
- Removed: `es5` preset (use `babel` to transpile code in `es5`/`es3` and etc).
- Removed: `core` preset.

## 93.0.0 - 2018-12-11

- Added: `react/forbid-foreign-prop-types` rule.
- Added: `react/no-unused-state` rule.
- Added: `react/destructuring-assignment` rule.
- Added: `lodash/collection-ordering` rule.
- Added: `mjs` extesion for `import/extensions` rules.
- Changed: `checkContextTypes` and `checkChildContextTypes` for `react/forbid-prop-types` rule.
- Changed: use `React` pragma.
- Changed: add `ignoreCase` to `react/jsx-no-duplicate-props` rule.
- Changed: disable `react/sort-prop-types` rule.
- Changed: disable `react/jsx-handler-names` rule.
- Changed: better order for `react/sort-comp` rule.
- Changed: disable `react/jsx-sort-props` rule.
- Changed: disable `react/jsx-sort-default-props` rule.
- Changed: disable `sort-keys` rule.

## 92.0.1 - 2018-12-07

- Fixed: `no-process-exit` should disable, but `recommended` preset of `eslint-plugin-node` enable rule.

## 92.0.0 - 2018-12-07

- Added: `import/order` rule.
- Changed: disable `no-process-env` rule.
- Changed: disable `no-process-exit` rule.
- Changed: disable `sort-imports` rule.

## 91.1.0 - 2018-12-07

- Added: `utils.modifyPresetRules("presetName", callback)` helper (allow enable/disable preset rules).

## 91.0.0 - 2018-12-07

- Changed: `react` present doesn't extend `esnext` preset.

## 90.0.0 - 2018-12-06

- Added: `react/no-unescaped-entities` rule.
- Added: `ava/prefer-async-await` rule.
- Added: `jest/no-truthy-falsy` rule.
- Changed: disable `jest/no-test-callback` rule (some test better testing with `callback`).
- Changed: disable all rules in markdown config (use `overrides`, see `README`).
- Changed: disable `html/report-bad-indent` (`prettier` supports `html`).
- Changed: disable `unicorn/no-fn-reference-in-iterator` rule.
- Chore: minimum require `eslint-plugin-lodash` version is now `^5.0.0`.
- Chore: minimum require `eslint-plugin-jest` version is now `^22.1.2`.
- Fixed: use `babel-parser` for `es5` preset.

## 89.0.0 - 2018-11-21

- Chore: minimum require `eslint-plugin-lodash` version is now `^4.0.0`.

## 88.0.0 - 2018-11-12

- Chore: minimum require `eslint-plugin-html` version is now `^5.0.0`.
- Chore: minimum require `eslint-plugin-jest` version is now `^22.0.0`.

## 87.0.0 - 2018-11-06

- Added: `jest/prefer-spy-on` rule.
- Changed: disable `require-unicode-regexp` rule.
- Chore: minimum require `eslint-plugin-markdown` version is now `^1.0.0-rc.1`.

## 86.0.0 - 2018-10-29

- Chore: minimum require `eslint-plugin-markdown` version is now `^1.0.0-rc.0`.
- Chore: minimum require `eslint-plugin-node` version is now `^8.0.0`.

## 85.0.0 - 2018-10-23

- Added: `jest/no-test-callback` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.26.0`.

## 84.0.0 - 2018-10-22

- Added: `jest/prefer-to-contain` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.25.1`.

## 83.0.0 - 2018-10-04

- Added: [confusing-browser-globals](https://github.com/facebook/create-react-app/tree/master/packages/confusing-browser-globals) to `no-restricted-globals` rule.

## 82.0.0 - 2018-10-01

- Added: `jest/require-tothrow-message` rule.
- Added: `jest/no-alias-methods` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.24.0`.

## 81.0.0 - 2018-09-26

- Chore: minimum require `babel-eslint` version is now `^10.0.0`.

## 80.0.0 - 2018-09-25

- Chore: minimum require `eslint-plugin-lodash` version is now `^3.1.0`.
- Changed: use `recommended` rules for `lodash` preset, but disable all preference over native rules.
- Changed: use `999.999.999` version of `react` by default to avoid warning.

## 79.0.0 - 2018-08-29

- Chore: minimum require `babel-eslint` version is now `^9.0.0`.

## 78.0.0 - 2018-08-24

- Added: `unicorn/prefer-exponentiation-operator` rule.
- Chore: minimum require `eslint-plugin-unicorn` version is now `^6.0.0`.

## 77.0.0 - 2018-08-20

- Chore: minimum require `eslint-plugin-promise` version is now `^4.0.0`.

## 76.0.0 - 2018-08-04

- Changed: `jest/no-test-return-statement` rule disabled.

## 75.0.0 - 2018-08-04

- Added: `jest/expect-expect` rule.
- Changed: `jest/prefer-expect-assertions` rule disabled.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.20.2`.

## 74.0.0 - 2018-08-04

- Added: `no-async-promise-executor` rule.
- Added: `require-atomic-updates` rule.
- Added: `require-unicode-regexp` rule.
- Added: `no-misleading-character-class` rule.
- Chore: minimum require `eslint` version is now `^5.3.0`.

## 73.0.0 - 2018-07-30

- Chore: minimum require `eslint-plugin-unicorn` version is now `^5.0.0`.

## 72.0.0 - 2018-07-17

- Added: `node/no-unsupported-features/es-builtins` rule.
- Added: `node/no-unsupported-features/es-syntax` rule.
- Added: `node/no-unsupported-features/node-builtins` rule.
- Added: `node/prefer-global/buffer` rule.
- Added: `node/prefer-global/console` rule.
- Added: `node/prefer-global/process` rule.
- Changed: use `ecmaVersion` `2019`.
- Chore: minimum require `eslint-plugin-node` version is now `^7.0.0`.

## 71.0.0 - 2018-07-16

- Added: `ava/no-import-test-files` rule.
- Chore: minimum require `eslint-plugin-ava` version is now `^5.0.0`.

## 70.0.1 - 2018-07-05

- Fix: remove `jest/globals` global env (removed in `eslint@5`).

## 70.0.0 - 2018-07-05

- Added: `jsx-a11y/label-has-associated-control` rule.
- Added: `prefer-object-spread` rule.
- Added: `max-classes-per-file` rule.
- Chore: minimum require `eslint` version is now `^5.0.0`.
- Chore: minimum require `eslint-plugin-import` version is now `^2.13.0`.
- Chore: minimum require `eslint-plugin-prettier` version is now `^2.6.1`.
- Chore: minimum require `eslint-plugin-react` version is now `^7.10.0`.
- Chore: minimum require `eslint-plugin-jsx-a11y` version is now `^6.1.0`.
- Changed: removed `prettier` preset.

## 69.0.0 - 2018-06-21

- Added: `html` preset.
- Added: `jest/no-jasmine-globals` rule.
- Added: support `mjs` extension for `import` plugin.
- Changed: disable `node/no-extraneous-import` in favor `import/no-extraneous-dependencies` rule.
- Changed: disable `node/no-extraneous-require` in favor `import/no-extraneous-dependencies` rule.
- Changed: disable `node/node/no-missing-import` in favor `import/no-unresolved` rule.
- Changed: disable `node/node/no-missing-require` in favor `import/no-unresolved` rule.
- Changed: default `env` is `browser` and `node` for markdown.
- Changed: disable `strict` rule for `markdown` preset.
- Changed: disable `no-process-env` rule for `markdown` preset.
- Changed: disable `no-console` rule for `markdown` preset.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.17.0`.
- Chore: minimum require `eslint-plugin-react` version is now `^7.9.1`.

## 68.0.0 - 2018-05-22

- Added: `markdown` preset.
- Added: `import/dynamic-import-chunkname` rule.
- Removed: `no-new-wrappers` in favor `unicorn/no-new-builtins`.

## 67.0.0 - 2018-04-12

- Added: `import/no-cycle` rule.
- Added: `import/no-useless-path-segments` rule.
- Added: `lodash/prefer-find` rule.
- Added: `lodash/prefer-immutable-method` rule.

## 66.0.0 - 2018-03-11

- Added: `jest/no-jest-import` rule.
- Added: `promise/no-new-statics` rule.
- Added: `promise/valid-params` rule.

## 65.0.0 - 2018-02-22

- Added: `import/no-self-import` rule.
- Changed: switch to `babel-eslint` parser for `esnext` bundle.
- Removed: `max-nested-callbacks` rule.
- Removed: `max-depth` rule.

## 64.0.0 - 2018-02-13

- Added: `unicorn/prefer-add-event-listener` rule.
- Added: `unicorn/prefer-spread` rule.
- Added: `unicorn/no-unsafe-regex` rule.
- Added: `unicorn/error-message` rule.
- Added: `jest/lowercase-name` rule.
- Added: `jest/lowercase-name` rule.
- Added: `jest/no-test-prefixes` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.12.1`.
- Chore: minimum require `eslint-plugin-unicorn` version is now `^4.0.1`.

## 63.0.0 - 2018-02-13

- Added: `jest/consistent-test-it` rule.
- Added: `jest/valid-describe` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.9.0`.

## 62.0.0 - 2018-02-05

- Added: `react/jsx-child-element-spacing` rule.
- Added: `react/jsx-sort-default-props` rule.
- Added: `react/no-this-in-sfc` rule.
- Chore: minimum require `eslint` version is now `^4.17.0`.
- Chore: minimum require `eslint-plugin-node` version is now `^6.0.0`.
- Chore: minimum require `eslint-plugin-react` version is now `^7.6.1`.

## 61.0.0 - 2018-01-17

- Added: `jest/valid-expect-in-promise` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.7.0`.

## 60.0.0 - 2018-01-11

- Added: `jest/globals` env.
- Added: `jest/prefer-expect-assertions` rule.
- Chore: minimum require `eslint-plugin-jest` version is now `^21.6.1`.

## 59.0.0 - 2017-12-05

- Added: `jest/prefer-to-be-null` rule.
- Added: `jest/prefer-to-be-undefined` rule.
- Chore: minimum require `nodejs` version is now `^6.9.0`.

## 58.0.0 - 2017-11-28

- Added: `react/button-has-type` rule.
- Added: `react/no-access-state-in-setstate` rule.
- Changed: minimum require `eslint-plugin-react` version is now `^7.5.0`.

## 57.0.0 - 2017-11-09

- Added: `unicorn/no-fn-reference-in-iterator` rule.
- Added: `unicorn/import-index` rule.
- Added: `unicorn/new-for-builtins` rule.
- Added: `jest/prefer-to-have-length` rule.
- Changed: disable `no-unexpected-multiline` rule.
- Chore: minimum require `eslint-plugin-unicorn` version is now `^3.0.0`.

## 56.0.0 - 2017-10-19

- Added: `import/exports-last` rule.
- Chore: minimum require `eslint-plugin-import` version is now `^2.8.0`.

## 55.0.0 - 2017-10-15

- Added: `promise/no-return-in-finally` rule.
- Added: `lines-between-class-members` rule.
- Chore: minimum require `eslint` version is now `^4.9.0`.
- Chore: minimum require `eslint-plugin-promise` version is now `^3.6.0`.

## 54.0.0 - 2017-09-28

- Added: `react/jsx-curly-brace-presence` rule.
- Changed: disable `no-floating-decimal` rule in favor `prettier`.

## 53.0.0 - 2017-09-08

- Chore: minimum required `eslint-plugin-jest` version is now `^21.0.0`.

## 52.0.0 - 2017-08-15

- Changed: move `import` plugin to core.
- Changed: use `always` for `func-name-matching` rule.
- Fixed: remove `prettier` from `core` preset.
- Fixed: ignore `jquery` build-in caps api.
- Revert: allow `for-in` syntax.

## 51.0.0 - 2017-08-14

- Added: `import/no-named-default` rule.
- Added: `react/no-typos` rule.
- Added: `no-bitwise` rule.
- Added: `vars-on-top` rule.
- Added: ignore rest siblings for `no-unused-vars` rule.
- Added **(Major update)**: `ForInStatement` in `no-restricted-syntax` rule.
- Changed: revers options for `import/extensions` rule - always require
  extension exclude `js` and `jsx`.
- Changed: enable `import/no-unresolved` rule for `commonjs`.
- Changed: all rules now respect case sensitive.
- Changed: set `builtinGlobals` to `false` in `no-redeclare` rule.
- Changed: set `5` for `max-nested-callbacks` rule.
- Changed: set `awlays` for `no-return-assign` rule.
- Changed: set `max` to `20` in `complexity` rule.
- Changed: set `defaultAssignment` to `false` in `no-unneeded-ternary` rule.
- Changed: disallow empty reject for `prefer-promise-reject-errors` rule.
- Changed: set `balanced` to `true` for block comments in `spaced-comment` rule.
- Changed: set `location` to `start` in `no-warning-comments` rule.
- Changed: set `enforceInMethodNames` to `true` in `no-underscore-dangle` rule.
- Chore: minimum required `eslint-plugin-react` version is now `^7.2.0`.
- Changed: override `class-methods-use-this` rule for react.
- Changed: update supported `node` version.
- Changed: use `default` fallthrough comment.
- Changed: allow using irregular whitespace in strings, comments, regexps and
  templates.
- Changed: allow variables more 32 characters (`id-length` rule).
- Revert: return `prettier` preset.
- Removed: `lines-around-comment` rule.
- Removed: `no-duplicate-imports` rule in favor `import/no-duplicates` rule.
- Removed: `valid-jsdoc` rule.
- Removed: `no-debugger` rule in favor `no-restricted-syntax` rule.
- Removed: `no-restricted-syntax` rule in favor `no-restricted-syntax` rule.
- Removed: `LabeledStatement` from `no-restricted-syntax` in favor `no-labels`
  rule.
- Removed: `max-statements` rule.
- Removed: `max-lines` rule.

## 50.0.0 - 2017-07-10

- Added: `getter-return` rule.
- Fixed: support `jsx` extension for `eslint-plugin-import`.
- Chore **(Major update)**: minimum required `eslint` version is now `^4.2.0`.

## 49.0.0 - 2017-06-28

- Changed: set `singleQuote` to `false` for `prettier`.
- Chore **(Major update)**: minimum required `prettier` version is now `^1.5.2`.

## 48.0.0 - 2017-06-27

- Added: `jsx-a11y/anchor-is-valid` rule.
- Added: `react/default-props-match-prop-types` rule.
- Added: `react/no-redundant-should-component-update` rule.
- Added: `padding-line-between-statements` rule.
- Added: `for-direction` rule.
- Added: `allowImportExportEverywhere` in `parserOptions` to `esnext` preset.
- Changed: `jsx-a11y/interactive-supports-focus` now contain `tabbable` list.
- Chore **(Major update)**: minimum required `eslint` version is now `^4.1.1`.
- Chore **(Major update)**: minimum required `eslint-plugin-ava` version is now
  `^4.2.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^2.3.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-unicorn` version is
  now `^2.1.1`.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^2.1.1`.
- Chore **(Major update)**: minimum required `eslint-plugin-promise` version is
  now `^3.5.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-lodash` version is
  now `^2.4.2`.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^2.6.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-jsx-a11y` version is
  now `^6.0.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^5.1.0`.
- Removed: `quote-props` rule in favor `prettier/prettier`.
- Removed: `unicorn/number-literal-case` rule in favor `prettier/prettier`.
- Removed: `unicorn/no-new-buffer` rule in favor `node/no-deprecated-api` rule.
- Removed: `prettier/prettier` preset in favor build-in `prettier` plugin in
  `core`, `es5`, `esnext`, `react` preset.
- Removed: `import/newline-after-import` rule in favor
  `padding-line-between-statements`.

## 47.0.0 - 2017-06-07

- Added: `jest` preset.
- Added: `prettier` preset.
- Added: `node/no-extraneous-import` rule.
- Added: `node/no-extraneous-require` rule.
- Changed: use all `plugins` as `peerDependencies`.
- Fixed: use `ecmaVersion: 8` for `all` preset.
- Removed: `parserOptions` from `ava` preset.
- Chore: minimum required `eslint-plugin-node` version is now `^5.0.0`.
- Changed: remove `version` from `node/no-unsupported-features` rule.
- Changed: `node/no-unsupported-features` have `error` several.
- Removed: `array-bracket-spacing` rule in favor `prettier/prettier`.
- Removed: `max-len` rule in favor `prettier/prettier`.
- Removed: `semi` rule in favor `prettier/prettier`.
- Removed: `semi-spacing` rule in favor `prettier/prettier`.
- Removed: `rest-spread-spacing` rule in favor `prettier/prettier`.
- Removed: `arrow-parens` rule in favor `prettier/prettier`.
- Removed: `arrow-spacing` rule in favor `prettier/prettier`.
- Removed: `block-spacing` rule in favor `prettier/prettier`.
- Removed: `brace-style` rule in favor `prettier/prettier`.
- Removed: `comma-dangle` rule in favor `prettier/prettier`.
- Removed: `comma-spacing` rule in favor `prettier/prettier`.
- Removed: `eol-last` rule in favor `prettier/prettier`.
- Removed: `func-call-spacing` rule in favor `prettier/prettier`.
- Removed: `indent` rule in favor `prettier/prettier`.
- Removed: `arrow-spacing` rule in favor `prettier/prettier`.
- Removed: `keyword-spacing` rule in favor `prettier/prettier`.
- Removed: `new-parens` rule in favor `prettier/prettier`.
- Removed: `wrap-regex` rule in favor `prettier/prettier`.
- Removed: `unicode-bom` rule in favor `prettier/prettier`.
- Removed: `space-unary-ops` rule in favor `prettier/prettier`.
- Removed: `padded-blocks` rule in favor `prettier/prettier`.
- Removed: `operator-linebreak` rule in favor `prettier/prettier`.
- Removed: `one-var-declaration-per-line` rule in favor `prettier/prettier`.
- Removed: `newline-per-chained-call` rule in favor `prettier/prettier`.
- Removed: `no-trailing-spaces` rule in favor `prettier/prettier`.
- Removed: `comma-style` rule in favor `prettier/prettier`.
- Removed: `generator-star-spacing` rule in favor `prettier/prettier`.
- Removed: `object-curly-newline` rule in favor `prettier/prettier`.
- Removed: `object-curly-spacing` rule in favor `prettier/prettier`.
- Removed: `object-property-newline` rule in favor `prettier/prettier`.
- Removed: `quotes` rule in favor `prettier/prettier`.
- Removed: `computed-property-spacing` rule in favor `prettier/prettier`.
- Removed: `key-spacing` rule in favor `prettier/prettier`.
- Removed: `space-before-blocks` rule in favor `prettier/prettier`.
- Removed: `space-before-function-paren` rule in favor `prettier/prettier`.
- Removed: `no-multiple-empty-lines` rule in favor `prettier/prettier`.
- Removed: `no-whitespace-before-property` rule in favor `prettier/prettier`.
- Removed: `no-tabs` rule in favor `prettier/prettier`.
- Removed: `yield-star-spacing` rule in favor `prettier/prettier`.
- Removed: `template-tag-spacing` rule in favor `prettier/prettier`.
- Removed: `template-curly-spacing` rule in favor `prettier/prettier`.
- Removed: `space-infix-ops` rule in favor `prettier/prettier`.
- Removed: `space-in-parens` rule in favor `prettier/prettier`.
- Removed: `no-mixed-spaces-and-tabs` rule in favor `prettier/prettier`.
- Removed: `dot-location` rule in favor `prettier/prettier`.
- Removed: `no-extra-parens` rule in favor `prettier/prettier`.
- Removed: `no-extra-semi` rule in favor `prettier/prettier`.
- Removed: `no-multi-spaces` rule in favor `prettier/prettier`.
- Removed: `wrap-iife` rule in favor `prettier/prettier`.
- Removed: `no-confusing-arrow` rule in favor `prettier/prettier`.
- Removed: `no-mixed-operators` rule in favor `prettier/prettier`.
- Removed: `react/jsx-closing-bracket-location` rule in favor
  `prettier/prettier`.
- Removed: `react/no-unescaped-entities` rule in favor `prettier/prettier`.
- Removed: `react/jsx-curly-spacing` rule in favor `prettier/prettier`.
- Removed: `react/jsx-equals-spacing` rule in favor `prettier/prettier`.
- Removed: `react/jsx-first-prop-new-line` rule in favor `prettier/prettier`.
- Removed: `react/jsx-indent` rule in favor `prettier/prettier`.
- Removed: `react/jsx-indent-props` rule in favor `prettier/prettier`.
- Removed: `react/jsx-max-props-per-line` rule in favor `prettier/prettier`.
- Removed: `react/jsx-tag-spacing` rule in favor `prettier/prettier`.
- Removed: `react/jsx-wrap-multilines` rule in favor `prettier/prettier`.

## 46.0.0 - 2017-05-07

- Added: `jsx-a11y/interactive-supports-focus` rule.
- Added: `jsx-a11y/no-noninteractive-element-interactions` rule.
- Added: `jsx-a11y/media-has-caption` rule.
- Added: `jsx-a11y/no-interactive-element-to-noninteractive-role` rule.
- Added: `jsx-a11y/no-noninteractive-element-to-interactive-role` rule.
- Added: `jsx-a11y/no-noninteractive-tabindex` rule.
- Added: `jsx-a11y/alt-text` rule.
- Added: `react/no-is-mounted` rule.
- Added: `react/prefer-stateless-function` rule.
- Added: `react/no-unused-prop-types` rule.
- Changed: `jsx-a11y/no-static-element-interactions` options.
- Changed: `jsx-a11y/no-distracting-elements` to `error` always.
- Changed: `react/jsx-wrap-multilines` require parentheses around arrow
  (functions and expressions).
- Changed: `react/jsx-sort-props` is now ignore case.
- Changed: `react/jsx-sort-props` is now not require shorthand first.
- Changed: `react/jsx-sort-props` is now not require sort alphabetically.
- Changed: `react/jsx-pascal-case` is now allow components name in all caps.
- Changed: `react/jsx-no-duplicate-props` is now ignore case.
- Changed: `react/jsx-filename-extension` is now only support `jsx` extension.
- Changed: `react/sort-prop-types` is now ignore case.
- Changed: `react/sort-prop-types` is now not require require first.
- Changed: `react/sort-prop-types` is now not require callback last.
- Changed: `react/forbid-prop-types` is now report on `object`.
- Chore: `react/jsx-no-literals` is now disabled.
- Chore: `react/forbid-foreign-prop-types` is now disabled.
- Chore: `react/jsx-space-before-closing` is now disabled.
- Chore: reduce package size.
- Chore **(Major update)**: minimum required `eslint-plugin-jsx-a11y` version is
  now `^5.0.1`.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^7.0.0`.
- Removed: `jsx-a11y/img-has-alt` rule.
- Removed: `jsx-a11y/onclick-has-role` rule.
- Removed: `jsx-a11y/onclick-has-focus` rule.

## 45.0.0 - 2017-04-01

- Added **(Major update)**: `lodash/prefer-some` rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.19.0`.

## 44.0.0 - 2017-03-18

- Added: `allowTaggedTemplates` with `true` value in `no-unused-expressions`
  rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.18.0`.

## 43.0.0 - 2017-03-07

- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^4.2.0`.
- Removed: `node/no-hide-core-modules` rule.

## 42.0.0 - 2017-03-06

- Added **(Major update)**: `no-compare-neg-zero` rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.17.0`.

## 41.0.0 - 2017-02-23

- Changed: set `ignoreIndirectDependencies` to `true` in
  `node/no-hide-core-modules` rule.

## 40.0.0 - 2017-02-23

- Added **(Major update)**: `node/no-hide-core-modules` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^4.1.0`.

## 39.0.0 - 2017-02-16

- Added **(Major update)**: `react/forbid-foreign-prop-types` rule.
- Added **(Major update)**: `react/void-dom-elements-no-children` rule.
- Changed: set `maximum` to `1` and `when` to `multiline` in
  `react/jsx-max-props-per-line` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.10.0`.

## 38.0.0 - 2017-02-06

- Added **(Major update)**: `unicorn/number-literal-case` rule.
- Added **(Major update)**: `unicorn/escape-case` rule.
- Added **(Major update)**: `unicorn/no-array-instanceof` rule.
- Added **(Major update)**: `unicorn/no-new-buffer` rule.
- Added **(Major update)**: `unicorn/no-hex-escape` rule.
- Added **(Major update)**: `unicorn/custom-error-definition` rule.
- Added **(Major update)**: `unicorn/prefer-starts-ends-with` rule.
- Added **(Major update)**: `jsx-a11y/accessible-emoji` rule.
- Added **(Major update)**: `jsx-a11y/aria-activedescendant-has-tabindex` rule.
- Added **(Major update)**: `jsx-a11y/iframe-has-title` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^4.0.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-unicorn` version is
  now `^2.0.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-jsx-a11y` version is
  now `^4.0.0`.

## 37.0.0 - 2017-02-04

- Added **(Major update)**: `template-tag-spacing` rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.15.0`.

## 36.0.0 - 2017-01-21

- Added **(Major update)**: `no-multi-assign` rule.
- Added **(Major update)**: `prefer-promise-reject-errors` rule.
- Changed: `ignoreJSX` option is now `multi-line` in `no-extra-parens`.
- Chore **(Major update)**: minimum required `eslint-plugin-lodash` version is
  now `^2.3.0`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.14.0`.

## 35.0.0 - 2017-01-11

- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.9.0`.

## 34.0.0 - 2017-01-08

- Added **(Major update)**: `prefer-destructuring` rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.13.0`.

## 33.0.0 - 2016-12-12

- Added: function `Immutable.*` in `capIsNewExceptions` option to `new-cap`
  rule.
- Added **(Major update)**: option `balanced: false` to `spaced-comment` rule in
  `block` section.
- Added **(Major update)**: `ArrayExpression` and `ObjectExpression` option with
  value `1` in `indent` rule.
- Changed: option `allowMultiplePropertiesPerLine` in `object-property-newline`
  is now `true`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.12.0`.

## 32.0.0 - 2016-12-05

- Added **(Major update)**: `react/require-default-props` rule.
- Added **(Major update)**: `react/no-array-index-key` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.8.0`.

## 31.0.0 - 2016-11-28

- Added **(Major update)**: `require-await` rule.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.11.0`.
- Chore: minimum required `nyc` version is now `^10.0.0`.

## 30.0.0 - 2016-11-21

- Chore **(Major update)**: `minijsx-a11y/anchor-is-validmum` required `eslint`
  version is now `^3.10.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-lodash` version is
  now `^2.2.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.7.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-promise` version is
  now `^3.4.0`.

## 29.0.0 - 2016-11-18

- Added **(Major update)**: `promise/no-return-wrap` rule.
- Added **(Major update)**: `promise/no-promise-in-callback` rule.
- Added **(Major update)**: `promise/no-callback-in-promise` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-promise` version is
  now `^3.4.0`.
- Chore: minimum required `ava` version is now `^0.17.0`.
- Chore: minimum required `nyc` version is now `^9.0.0`.

## 28.0.0 - 2016-11-16

- Added **(Major update)**: `react/jsx-tag-spacing` rule.
- Chore **(Major update)**: update a minimal verison of `eslint-plugin-react`
  from `6.6.0` to `6.7.0`.

## 27.0.0 - 2016-11-12

- Added **(Major update)**: `lodash/no-unbound-this` rule.
- Added **(Major update)**: `no-return-await` rule.

## 26.0.0 - 2016-11-08

- Changed: `react/jsx-curly-spacing` option `allowMultiline` to `true`.
- Changed: `react/jsx-curly-spacing` now don't ignore `multiline-multiline`.
- Changed: `react/jsx-first-prop-new-line` set option to `never`.
- Changed: remove option `components` from `jsx-a11y/heading-has-content`.
- Changed: remove option `components` from `jsx-a11y/href-no-hash`.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^2.2.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-jsx-a11y` version is
  now `^3.0.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.6.0`.
- Removed: `react/no-is-mounted` rule.
- Tests: improve `react` integration tests.

## 25.0.0 - 2016-11-03

- Added **(Major update)**: options `'asyncArrow': 'always'` to
  `space-before-function-paren` rule.
- Changed: disable `ava/max-asserts` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-ava` version is now
  `^4.0.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^2.1.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.5.0`.
- Chore **(Major update)**: minimum required `remark-preset-lint-itgalaxy`
  version is now `^3.0.0`.

## 24.0.0 - 2016-11-01

- Added **(Major update)**: `no-useless-return` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-promise` version is
  now `^3.3.0`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.9.1`.
- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^3.0.0`.
- Chore: added support `nodejs` version 7.

## 23.0.0 - 2016-10-18

- Added **(Major update)**: `func-name-matching` rule.
- Added **(Major update)**: `lodash/prefer-times` rule.
- Added **(Major update)**: `lodash/prefer-is-nil` rule.
- Added **(Major update)**: `lodash/prefer-invoke-map` rule.
- Added **(Major update)**: `lodash/prefer-thru` rule.
- Added **(Major update)**: `lodash/prefer-wrapper-method` rule.
- Changed: `lodash/chain-style` to `as-needed`.
- Changed: `lodash/identity-shorthand` to `always`.
- Changed: `lodash/matches-prop-shorthand` to `always`.
- Changed: `lodash/prop-shorthand` to `always`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.8.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-lodash` version is
  now `^2.1.0`.
- Removed: `lodash/prefer-chain` rule.
- Removed: `lodash/no-single-chain` rule.

## 22.0.0 - 2016-10-10

- Chore: minimum required `remark-preset-lint-itgalaxy` version is now `^2.0.0`.
- Chore **(Major update)**:: minimum required `eslint-plugin-react` version is
  now `^6.4.0`.
- Chore **(Major update)**:: minimum required `eslint-plugin-promise` version is
  now `^3.0.0`.

## 21.0.0 - 2016-10-3

- Added **(Major update)**:: `import/first` rule.
- Chore **(Major update)**:: minimum required `eslint-plugin-import` version is
  now `^2.0.0`.
- Chore **(Major update)**:: minimum required `eslint` version is now `^3.7.0`.
- Chore **(Major update)**: minimum required `babel-core` version is now
  `^6.17.0`.
- Chore: remove nodejs 4 from `travis`. Bugs now, need investigation, but work.
- Removed: `import/imports-first` rule.

## 20.0.2 - 2016-09-26

- Chore **(Major update)**: update `ecmaVersion` from `7` to `8` in `cssnext`
  preset.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.6.1`.

## 20.0.1 - 2016-09-26

- Fixed: `dist` from `files` section and `bin` from `package.json`.

## 20.0.0 - 2016-09-26

- Added **(Major update)**: `ava/no-async-fn-without-await` rule.
- Added **(Major update)**: `ava/no-duplicate-modifiers` rule.
- Added **(Major update)**: `node/no-unpublished-bin` rule.
- Added **(Major update)**: `node/no-unpublished-import` rule.
- Added **(Major update)**: `node/exports-style` rule.
- Added **(Major update)**: `node/no-missing-import` rule.
- Added: `convertPath` options to `eslint-plugin-node` for good work with
  `babel`.
- Changed: `import/extensions` have default `never` option.
- Chore: use `^` instead `~` for `package-schema` package.
- Chore: use `^` instead `~` for `ajv-cli` package.
- Chore: minimum required `ajv-cli` version is now `^1.1.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-ava` version is now
  `^3.1.0`.
- Chore **(Major update)**: minimum required `eslint-plugin-node` version is now
  `^2.1.1`.
- Chore: rename `eslint-plugin-xo` to `eslint-plugin-unicorn`.
- Chore: improve `.gitattributes`.
- Fixed: all rules of `eslint-plugin-node` now works with `jsx`.
- Removed: `import/no-namespace` rule.
- Removed: `import/no-commonjs` rule.

## 19.0.0 - 2016-09-24

- Added **(Major update)**: `import/no-absolute-path` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^1.16.0`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.6.0`.
- Chore: change `unix` to `always` in `eol-last` rule.

## 18.0.0

- Added **(Major update)**: `react/no-children-prop` rule.
- Added **(Major update)**: `react/no-unescaped-entities` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-react` version is
  now `^6.3.0`.

## 17.0.0

- Added **(Major update)**: `xo/catch-error-name` rule.
- Added **(Major update)**: `explicit-length-check` rule.
- Added **(Major update)**: `xo/throw-new-error` rule.
- Chore **(Major update)**: minimum required `eslint-plugin-xo` version is now
  `^1.0.0`.

## 16.0.0

- Added **(Major update)**: `no-absolute-path` rule.
- Fixed: use `Object.assign` with first argument `object` for cloning rules.
- Chore **(Major update)**: minimum required `eslint-plugin-import` version is
  now `^1.15.0`.
- Chore: improved of tests.
- Chore: added `deprecated` rules for `eslint`, `eslint-plugin-import` for
  passed `eslint-find-rules` test.
- Chore: added `remarkConfig` section to `package.json` for use own
  `remark-preset-lint-itgalaxy` preset.

## 15.0.1

- Fixed: `extends` now use `path.resolve` to config files.

## 15.0.0

- Added: preset `all`.
- Fixed: valid options for `lines-around-directive` rule.
- Changed: drop `es6` code style, because `eslint` have bad support.
- Chore: fixed lint errors of `eslint`.
- Chore: improved of tests.

## 14.0.0

- Added **(Major update)**: `prefer-numeric-literals` rule.
- Added **(Major update)**: `lines-around-directive` rule.
- Changed: `FunctionDeclaration` and `FunctionExpression` to `{ "body": 1, "parameters": 1 }` in `indent` rule.
- Chore: fix link `dependencies` and `devDependencies`.
- Chore **(Major update)**: minimum required `eslint` version is now `^3.5.0`.

## 13.0.0

- Added **(Major update)**: `class-methods-use-this` rule.
- Added **(Major update)**: `max` to `id-length` rule.
- Added: `experimentalObjectRestSpread` option to `parserOptions` in `esnext`
  bundle.
- Changed: `ignoreChainWithDepth` to `4` in `newline-per-chained-call` rule.
- Changed: `caseSensitive` to `false` in `sort-keys` rule.
- Changed: `requireStringLiterals` to `true` in `valid-typeof` rule.
- Changed: `allowAfterSuper` to `true` in `no-underscore-dangle` rule.
- Changed: `props` to `true` in `no-self-assign` rule.
- Changed: `object-curly-spacing` now is `always`.
- Changed: `order` in `react/sort-comp` rule, add `type-annotations`.
- Changed: `no-func-assign` now accounts `functions` and `vars`.
- Changed: `no-restricted-globals` now is turned off.
- Changed: `padded-blocks` now accounts `switches`.
- Changed: `arrow-parens` now accounts `block` body parens.
- Changed: `generator-star-spacing` now require no space before and space after
  `*`.
- Changed: `allowParens` to `true` in `no-confusing-arrow` rule.
- Changed: `ignoreConstructors` to `false` in `object-shorthand` rule.
- Changed: `import/ignore` patterns in `settings` for `import` plugin.
- Changed: `allowAfterThis` and `allowAfterSuper` to `false` in
  `no-underscore-dangle` rule.
- Changed: update all `deps` to right version.
- Chore: add `react/no-unused-prop-types` rule for tracking.
- Chore: move `comma-dangle` to `stylistic-issues`.
- Chore: remove default unused parameters in some rules(package size reduction).

## 12.0.0

- Added **(Major update)**: `jsx-a11y/no-static-element-interactions` rule.
- Added **(Major update)**: `jsx-a11y/click-events-have-key-events` rule.
- Chore: use `Object.assign` instead `merge` package.
- Chore: use `^` instead `~` for `babel-preset-es2015` package.
- Chore: use `^` instead `~` for `babel-preset-stage-0` package.
- Chore: minimum required `remark-cli` version is now `^2.0.0`.
- Chore: minimum required `remark-lint` version is now `^5.0.0`.
- Chore: use `remark-preset-lint-itgalaxy` instead
  `remark-lint-config-itgalaxy`.

## 11.0.1

- Chore: remove `tools/**/__tests__/*.js` glob pattern from `ava` npm script.
- Chore: remove `eslint-plugin-markdown` as unused.
- Chore: `remark-lint` now lint `markdown` inside the directories.
- Chore: rename `LICENSE.md` to `LICENSE`.
- Chore: remove extra `files` from `package.json`.

## 11.0.0

- Added **(Major update)**: `react/no-danger-with-children` rule.
- Added **(Major update)**: `xo/no-abusive-eslint-disable` rule.
- Changed: drop `eslint-plugin-objects` plugin.
- Chore: add `forbid-prop-types` rule for tracking changes.
- Chore: add description to `react/require-optimization` rule.
- Chore: add other `xo/*` rules for tracking.
- Chore: add `nyc` to coveralls report.
- Docs: fix `url` typos in `README.md`.
- Fixed: tests now works fine.
- Removed: `objects/*` rules.

## 10.0.2

- Fixed: exporting configs now correctly.

## 10.0.1

- Fixed: `main` contain `dist/index.js` in `package.json`

## 10.0.0

- Added **(Major update)**: `sort-keys` rule.
- Added **(Major update)**: `no-unsafe-negation` rule.
- Added **(Major update)**: `no-global-assign` rule.
- Added **(Major update)**: `jsx-a11y/anchor-has-content` rule.
- Changed: `jsx-a11y/no-onchange` rule is enabled.
- Changed: `jsx-a11y/onclick-has-role` rule is enabled.
- Changed: `jsx-a11y/tabindex-no-positive` rule is enabled.
- Chore: use `remark-lint-config-itgalaxy` sharable config for linting
  `markdown`.
- Chore: sort alphabetically `devDependencies`.
- Chore: rename `LICENSE` to `LICENSE.md`.
- Chore: `files` section in `package.json` now contain `CHANGELOG.md` and
  `README.md`.

## 9.0.0

- Added **(Major update)**: `ava/no-nested-tests` rule.
- Added **(Major update)**: option `if-multiple` to `ava/test-title` rule.
- Changed: rule `ava/max-asserts` now accepts minimal 8 `asserts`.
- Changed: rule `ava/no-cb-test` disabled.
- Chore **(Major update)**: update minimal version `eslint-plugin-ava` to
  `3.0.0`.
- Chore **(Major update)**: update minimal version `ava` to `0.16.0`.

## 8.0.0

- Added: new rule `no-tabs`.
- Added **(Major update)**: `react/no-find-dom-node` rule.
- Changed: disable `no-inline-comments` rule.
- Chore **(Major update)**: update minimal version `eslint-plugin-react` to
  `6.0.0`.
- Chore: order `eslint-plugin-react` rules as in docs.
- Removed: `react/require-extension` rule. Deprecated.

## 7.0.1

- Fixed: right path to load basic config.

## 7.0.0

- Chore: add script `lint:remark` in `package.json`.
- Chore: add script `lint:eslint` in `package.json`.
- Chore: all disable rules now use `off` instead `0`.
- Chore: add node version `5` to `.travis.yml`.

## 6.0.0

- Changed **(Major update)**: all `dependencies` now have `^` instead `~`.

## 5.0.0

- Changed **(Major update)**: update minor version `eslint`.
- Changed **(Major update)**: update minor version `eslint-plugin-import`.

## 4.0.1

- Fixed: `Refusing to install eslint-plugin-itgalaxy as a dependency of itself`
  error.

## 4.0.0

- Chore **(Major update)**: bump major `eslint-plugin-jsx-a11y` version.
- Chore **(Major update)**: bump major `eslint-plugin-promise` version.

## 3.0.0

- Chore **(Major update)**: update minimal version `eslint` to `3.0.0`.
- Chore **(Major update)**: bump major `eslint-plugin-node` version.

## 2.3.0

- Chore: update minor version `eslint-plugin-import`.

## 2.2.0

- Chore: update minor version `eslint-plugin-import`.

## 2.1.1

- Fixed: `eslint-plugin-itgalaxy` version in `package.json`.

## 2.1.0

- Added: all eslint-plugins in `peerDependencies`.
- Added: new rules from `eslint-plugin-react`.
- Chore: update version `eslint-plugin-node`.
- Chore: update version `eslint-plugin-react`.

## 2.0.1

- Fixed: repo url in `package.json`.

## 2.0.0

- Added: new version `eslint-plugin-jsx-a11y` and new rules from
  `eslint-plugin-jsx-a11y` plugin.
- Chore: update minimal version `eslint-plugin-ava`.
- Remove: default disable rules from `esnext` config.

## 1.0.1

- Fixed: remove `es6` export config.

## 1.0.0

- Remove: `plugin:itgalaxy/es6` config.
- Remove: `babel-eslint` and `eslint-plugin-babel` rules.

## 0.1.0

- Added **(Major update)**: `plugin:itgalaxy/es6` config.

## 0.0.5

- Fixed: configuration for rule `babel/object-shorthand`.

## 0.0.4

- Fixed: configuration for rule `babel/new-cap`.

## 0.0.3

- Fixed: added `babel-eslint` to `package.json`.

## 0.0.2

- Fixed: added `lib` directory to `files` in package.json.
- Fixed: stylistics fixed.

## 0.0.1

- Initial release.
