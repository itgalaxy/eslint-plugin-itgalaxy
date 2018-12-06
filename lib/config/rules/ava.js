"use strict";

// See https://github.com/avajs/eslint-plugin-ava

module.exports = {
  // Enforce passing correct arguments to assertions.
  // In recommended
  // "ava/assertion-arguments": "error",
  // Limit the number of assertions in a test.
  // In recommended
  // "ava/max-asserts": ["off", 5],
  // Ensure that async tests use await
  // In recommended
  // "ava/no-async-fn-without-await": "error",
  // Ensure no test.cb() is used.
  // In recommended
  // "ava/no-cb-test": "off",
  // Ensure tests do not have duplicate modifiers.
  // In recommended
  // "ava/no-duplicate-modifiers": "error",
  // Ensure no tests have the same title.
  // In recommended
  // "ava/no-identical-title": "error",
  // Ensure no tests are written in ignored files.
  // In recommended
  // "ava/no-ignored-test-files": "error",
  // Ensure no test files are imported anywhere
  // In recommended
  // "ava/no-import-test-files": "error",
  // Ensure t.end() is only called inside test.cb().
  // In recommended
  // "ava/no-invalid-end": "error",
  // Ensure no tests are nested.
  // In recommended
  // "ava/no-nested-tests": "error",
  // Ensure no test.only() are present.
  // In recommended
  // "ava/no-only-test": "error",
  // Ensure no assertions are skipped.
  // In recommended
  // "ava/no-skip-assert": "error",
  // Ensure no tests are skipped.
  // In recommended
  // "ava/no-skip-test": "error",
  // Ensure t.end() is the last statement executed.
  // In recommended
  // "ava/no-statement-after-end": "error",
  // Ensure test.todo() is not given an implementation function.
  // In recommended
  // "ava/no-todo-implementation": "error",
  /* eslint-enable */
  // Ensure no test.todo() is used.
  /* eslint-enable */
  "ava/no-todo-test": "error"
  // Prevent the use of unknown test modifiers.
  // In recommended
  // "ava/no-unknown-modifiers": "error",
  // Prefer using async/await instead of returning a Promise.
  // In recommended
  // "ava/prefer-async-await": "off",
  // Allow only use of the asserts that have no power-assert alternative.
  // In recommended
  // "ava/prefer-power-assert": "off",
  // Ensure callback tests are explicitly ended.
  // In recommended
  // "ava/test-ended": "error",
  // Ensure tests have a title.
  // In recommended
  // "ava/test-title": ["error", "if-multiple"],
  // Prevent the incorrect use of t.
  // In recommended
  // "ava/use-t-well": "error",
  // Ensure test functions use t as their parameter.
  // In recommended
  // "ava/use-t": "error",
  // Ensure that AVA is imported with test as the variable name.
  // In recommended
  // "ava/use-test": "error",
  // Ensure that t.true()/t.false() are used instead of t.truthy()/t.falsy().
  // In recommended
  // "ava/use-true-false": "error"
};
