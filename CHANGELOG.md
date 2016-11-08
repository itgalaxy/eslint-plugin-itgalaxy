# 26.0.0 - 2016-11-08

- Changed: `react/jsx-curly-spacing` option `allowMultiline` to `true`.
- Changed: `react/jsx-curly-spacing` now don't ignore `multiline-multiline`.
- Changed: `react/jsx-first-prop-new-line` set option to `never`.
- Changed: remove option `components` from `jsx-a11y/heading-has-content`.
- Changed: remove option `components` from `jsx-a11y/href-no-hash`.
- Chore(Major update): update a minimal version of `eslint-plugin-import` from `2.1.0` to `2.2.0`.
- Chore(Major update): update a minimal version of `eslint-plugin-jsx-a11y` from `2.2.0` to `3.0.0`.
- Chore(Major update): update a minimal version of `eslint-plugin-react` from `6.5.0` to `6.6.0`.
- Removed: `react/no-is-mounted` rule.
- Tests: improve `react` integration tests.

# 25.0.0 - 2016-11-03

- Added(Major update): options `'asyncArrow': 'always'` to `space-before-function-paren` rule.
- Changed: disable `ava/max-asserts` rule.
- Chore(Major update): update a minimal version of `eslint-plugin-ava` from `3.1.0` to `4.0.0`.
- Chore(Major update): update a minimal version of `eslint-plugin-import` from `2.0.0` to `2.1.0`.
- Chore(Major update): update a minimal version of `eslint-plugin-react` from `6.4.0` to `6.5.0`.
- Chore(Major update): update a minimal version of `remark-preset-lint-itgalaxy` from `2.0.0` to `3.0.0`.

# 24.0.0 - 2016-11-01

- Added(Major update): `no-useless-return` rule.
- Chore(Major update): update a minimal version of `eslint-plugin-promise` from `3.0.0` to `3.3.0`.
- Chore(Major update): update a minimal version of `eslint` from `3.8.0` to `3.9.1`. 
- Chore(Major update): update a minimal version of `eslint-plugin-node` from `2.1.0` to `3.0.0`. 
- Chore: added support `nodejs` version 7.

# 23.0.0 - 2016-10-18

- Added: `func-name-matching` rule.
- Added: `lodash/prefer-times` rule.
- Added: `lodash/prefer-is-nil` rule.
- Added: `lodash/prefer-invoke-map` rule.
- Added: `lodash/prefer-thru` rule.
- Added: `lodash/prefer-wrapper-method` rule.
- Changed: `lodash/chain-style` to `as-needed`.
- Changed: `lodash/identity-shorthand` to `always`.
- Changed: `lodash/matches-prop-shorthand` to `always`.
- Changed: `lodash/prop-shorthand` to `always`.
- Chore(package)(breaking changes): update a minimal version of `eslint` from `3.7.0` to `3.8.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-lodash` from `1.10.0` to `2.1.0`.
- Removed: `lodash/prefer-chain` rule.
- Removed: `lodash/no-single-chain` rule.

# 22.0.0 - 2016-10-10

- Chore(package): update a minimal version of `remark-preset-lint-itgalaxy` from `1.0.0` to `2.0.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-react` from `6.3.0` to `6.4.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-promise` from `2.0.0` to `3.0.0`.

# 21.0.0 - 2016-10-3

- Added: `import/first` rule.
- Chore(package): update a minimal version of `eslint-plugin-import` from `1.16.0` to `2.0.0`.
- Chore(package): update a minimal version of `eslint` from `3.6.1` to `3.7.0`.
- Chore(package): update a minimal version of `babel-core` from `6.13.0` to `6.17.0`.
- Chore: remove nodejs 4 from `travis`. Bugs now, need investigation, but work.
- Removed: `import/imports-first` rule.

# 20.0.2 - 2016-09-26

- Chore: update `ecmaVersion` from `7` to `8` in `cssnext` preset.
- Chore: update a minimal version of `eslint` from `3.6.0` to `3.6.1`.

# 20.0.1 - 2016-09-26

- Fixed: `dist` from `files` section and `bin` from `package.json`.

# 20.0.0 - 2016-09-26

- Added(breaking changes): `ava/no-async-fn-without-await` rule.
- Added(breaking changes): `ava/no-duplicate-modifiers` rule.
- Added(breaking changes): `node/no-unpublished-bin` rule.
- Added(breaking changes): `node/no-unpublished-import` rule.
- Added(breaking changes): `node/exports-style` rule.
- Added(breaking changes): `node/no-missing-import` rule.
- Added: `convertPath` options to `eslint-plugin-node` for good work with `babel`.
- Changed: `import/extensions` have default `never` option.
- Chore(package): use `^` instead `~` for `package-schema` package.
- Chore(package): use `^` instead `~` for `ajv-cli` package.
- Chore(package): update a minimal version of `ajv-cli` from `0.9.0` to `1.1.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-ava` from `3.0.0` to `3.1.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-node` from `2.0.0` to `2.1.1`.
- Chore(package): rename `eslint-plugin-xo` to `eslint-plugin-unicorn`.
- Chore: improve `.gitattributes`.
- Fixed: all rules of `eslint-plugin-node` now works with `jsx`.
- Removed: `import/no-namespace` rule.
- Removed: `import/no-commonjs` rule.

# 19.0.0 - 2016-09-24

- Added(breaking changes): `import/no-absolute-path` rule.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-import` from `1.15.0` to `1.16.0`.
- Chore(package)(breaking changes): update a minimal version of `eslint` from `3.5.0` to `3.6.0`.
- Chore: change `unix` to `always` in `eol-last` rule.

# 18.0.0

- Added(breaking changes): `react/no-children-prop` rule.
- Added(breaking changes): `react/no-unescaped-entities` rule.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-react` from `6.2.0` to `6.3.0`.

# 17.0.0

- Added(breaking changes): `xo/catch-error-name` rule.
- Added(breaking changes): `explicit-length-check` rule.
- Added(breaking changes): `xo/throw-new-error` rule.
- Chore(package): update a minimal version of `eslint-plugin-xo` from `0.5.0` to `1.0.0`.

# 16.0.0

- Added(breaking changes): `no-absolute-path` rule.
- Fixed: use `Object.assign` with first argument `object` for cloning rules.
- Chore(package)(breaking changes): update a minimal version of `eslint-plugin-import` from `1.14.0` to `1.15.0`.
- Chore: improved of tests.
- Chore: added `deprecated` rules for `eslint`, `eslint-plugin-import` for passed `eslint-find-rules` test.
- Chore: added `remarkConfig` section to `package.json` for use own `remark-preset-lint-itgalaxy` preset.

# 15.0.1

- Fixed: `extends` now use `path.resolve` to config files.

# 15.0.0

- Added: preset `all`.
- Fixed: valid options for `lines-around-directive` rule.
- Changed: drop `es6` code style, because `eslint` have bad support.
- Chore: fixed lint errors of `eslint`.
- Chore: improved of tests.

# 14.0.0

- Added(breaking changes): `prefer-numeric-literals` rule.
- Added(breaking changes): `lines-around-directive` rule.
- Changed: `FunctionDeclaration` and `FunctionExpression` to `{ "body": 1, "parameters": 1 }` in `indent` rule.
- Chore: fix link `dependencies` and `devDependencies`.
- Chore: update a minimal version of `eslint` to `3.5.0`.

# 13.0.0

- Added(breaking changes): `class-methods-use-this` rule.
- Added(breaking changes): `max` to `id-length` rule.
- Added: `experimentalObjectRestSpread` option to `parserOptions` in `esnext` bundle.
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
- Changed: `generator-star-spacing` now require no space before and space after `*`.
- Changed: `allowParens` to `true` in `no-confusing-arrow` rule.
- Changed: `ignoreConstructors` to `false` in `object-shorthand` rule.
- Changed: `import/ignore` patterns in `settings` for `import` plugin.
- Changed: `allowAfterThis` and `allowAfterSuper` to `false` in `no-underscore-dangle` rule.
- Changed: update all `deps` to right version.
- Chore: add `react/no-unused-prop-types` rule for tracking.
- Chore: move `comma-dangle` to `stylistic-issues`.
- Chore: remove default unused parameters in some rules(package size reduction).

# 12.0.0

- Added(breaking changes): `jsx-a11y/no-static-element-interactions` rule.
- Added(breaking changes): `jsx-a11y/click-events-have-key-events` rule.
- Chore: use `Object.assign` instead `merge` package.
- Chore(package): use `^` instead `~` for `babel-preset-es2015` package.
- Chore(package): use `^` instead `~` for `babel-preset-stage-0` package.
- Chore(package): update a minimal version of `remark-cli` from `1.0.0` to `2.0.0`.
- Chore(package): update a minimal version of `remark-lint` from `4.0.0` to `5.0.0`.
- Chore(package): use `remark-preset-lint-itgalaxy` instead `remark-lint-config-itgalaxy`.

# 11.0.1

- Chore: remove `tools/**/__tests__/*.js` glob pattern from `ava` npm script.
- Chore: remove `eslint-plugin-markdown` as unused.
- Chore: `remark-lint` now lint `markdown` inside the directories.
- Chore: rename `LICENSE.md` to `LICENSE`.
- Chore(package): remove extra `files` from `package.json`.
- Deps: update a minimal version of `npm-run-all` from `2.3.0` to `3.0.0`.

# 11.0.0

- Added: add `react/no-danger-with-children` rule.
- Added: `xo/no-abusive-eslint-disable` rule.
- Changed: drop `eslint-plugin-objects` plugin.
- Chore: add `forbid-prop-types` rule for tracking changes.
- Chore: add description to `react/require-optimization` rule.
- Chore: add other `xo/*` rules for tracking.
- Chore: add `nyc` to coveralls report.
- Docs: fix `url` typos in `README.md`.
- Fixed: tests now works fine.
- Removed: `objects/*` rules.

# 10.0.2

- Fixed: exporting configs now correctly.

# 10.0.1

- Fixed: `main` contain `dist/index.js` in `package.json`

# 10.0.0

- Added: `sort-keys` rule.
- Added: `no-unsafe-negation` rule.
- Added: `no-global-assign` rule.
- Added: `jsx-a11y/anchor-has-content` rule.
- Changed: `jsx-a11y/no-onchange` rule is enabled.
- Changed: `jsx-a11y/onclick-has-role` rule is enabled.
- Changed: `jsx-a11y/tabindex-no-positive` rule is enabled.
- Chore: use `remark-lint-config-itgalaxy` sharable config for linting `markdown`.
- Chore: sort alphabetically `devDependencies`.
- Chore: rename `LICENSE` to `LICENSE.md`.
- Chore: `files` section in `package.json` now contain `CHANGELOG.md` and `README.md`.

# 9.0.0

- Added: `ava/no-nested-tests` rule.
- Added: option `if-multiple` to `ava/test-title` rule.
- Changed: rule `ava/max-asserts` now accepts minimal 8 `asserts`.
- Changed: rule `ava/no-cb-test` disabled.
- Chore(package)(breaking changes): update minimal version `eslint-plugin-ava` to `3.0.0`.
- Chore(package)(breaking changes): update minimal version `ava` to `0.16.0`.

# 8.0.0

- Added: `react/no-find-dom-node` rule.
- Chore(package)(breaking changes): update minimal version `eslint-plugin-react` to `6.0.0`.
- Chore: order `eslint-plugin-react` rules as in docs.
- Removed: `react/require-extension` rule. Deprecated.

# 7.0.1

- Fixed: right path to load basic config.

# 7.0.0

- Added: new rule `no-tabs`.
- Changed: disable `no-inline-comments` rule.
- Chore: add script `lint:remark` in `package.json`.
- Chore: add script `lint:eslint` in `package.json`.
- Chore: all disable rules now use `off` instead `0`.
- Chore: add node version `5` to `.travis.yml`.

# 6.0.0

- Changed(package)(breaking changes): all `dependencies` now have `^` instead `~`.

# 5.0.0

- Changed(package)(breaking changes): update minor version `eslint`.
- Changed(package)(breaking changes): update minor version `eslint-plugin-import`.

# 4.0.1

- Fixed: `Refusing to install eslint-plugin-itgalaxy as a dependency of itself` error.

# 4.0.0

- Chore(package)(breaking changes): bump major `eslint-plugin-jsx-a11y` version.
- Chore(package)(breaking changes): bump major `eslint-plugin-promise` version.

# 3.0.0

- Chore(package)(breaking changes): update minimal version `eslint` to `3.0.0`.
- Chore(package)(breaking changes): bump major `eslint-plugin-node` version.

# 2.3.0

- Chore(package): update minor version `eslint-plugin-import`.

# 2.2.0

- Chore(package): update minor version `eslint-plugin-import`.

# 2.1.1

- Fixed: `eslint-plugin-itgalaxy` version in `package.json`.

# 2.1.0

- Added: all eslint-plugins in `peerDependencies`.
- Added: new rules from `eslint-plugin-react`.
- Chore(package): update version `eslint-plugin-node`.
- Chore(package): update version `eslint-plugin-react`.

# 2.0.1

- Fixed: repo url in `package.json`.

# 2.0.0

- Added: new version `eslint-plugin-jsx-a11y` and new rules from `eslint-plugin-jsx-a11y` plugin.
- Chore(package)(breaking changes): update minimal version `eslint-plugin-ava`.
- Remove: default disable rules from `esnext` config.

# 1.0.1

- Fixed: remove `es6` export config.

# 1.0.0

- Remove: `plugin:itgalaxy/es6` config.
- Remove: `babel-eslint` and `eslint-plugin-babel` rules.

# 0.1.0

- Added: `plugin:itgalaxy/es6` config.

# 0.0.5

- Fixed: configuration for rule `babel/object-shorthand`.

# 0.0.4

- Fixed: configuration for rule `babel/new-cap`.

# 0.0.3

- Fixed: added `babel-eslint` to `package.json`.

# 0.0.2

- Fixed: added `lib` directory to `files` in package.json.
- Fixed: stylistics fixed.

# 0.0.1

- Initial release.
