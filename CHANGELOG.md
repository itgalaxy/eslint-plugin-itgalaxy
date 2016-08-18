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
