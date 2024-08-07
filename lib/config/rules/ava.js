"use strict";

// See https://github.com/avajs/eslint-plugin-ava

module.exports = {
  // Enforce passing correct arguments to assertions.
  "ava/assertion-arguments": "error",
  // Enforce test hook ordering.
  "ava/hooks-order": "error",
  // Limit the number of assertions in a test.
  "ava/max-asserts": ["off", 5],
  // Ensure that async tests use await
  "ava/no-async-fn-without-await": "error",
  // Ensure tests do not have duplicate modifiers.
  "ava/no-duplicate-modifiers": "error",
  // Ensure no tests have the same title.
  "ava/no-identical-title": "error",
  // Ensure no tests are written in ignored files.
  "ava/no-ignored-test-files": "error",
  // Ensure no test files are imported anywhere
  "ava/no-import-test-files": "error",
  // Avoid using deepEqual with primitives.
  "ava/no-incorrect-deep-equal": "error",
  // Ensure assertions are not called from inline arrow functions.
  "ava/no-inline-assertions": "error",
  // Ensure no tests are nested.
  "ava/no-nested-tests": "error",
  // Ensure no test.only() are present.
  "ava/no-only-test": "error",
  // Ensure no assertions are skipped.
  "ava/no-skip-assert": "error",
  // Ensure no tests are skipped.
  "ava/no-skip-test": "error",
  // Ensure test.todo() is not given an implementation function.
  "ava/no-todo-implementation": "error",
  // Ensure no test.todo() is used.
  "ava/no-todo-test": "error",
  // Prevent the use of unknown test modifiers.
  "ava/no-unknown-modifiers": "error",
  // Prefer using async/await instead of returning a Promise.
  // In `recommended` it is `error`, we need activate this in next major
  // for `jest` too
  "ava/prefer-async-await": "off",
  // Allow only use of the asserts that have no power-assert alternative.
  "ava/prefer-power-assert": "off",
  // Prefer using `t.regex()` to test regular expressions
  "ava/prefer-t-regex": "error",
  // Ensure tests have a title.
  "ava/test-title": "error",
  // Ensure test titles have a certain format
  "ava/test-title-format": "off",
  // Ensure test functions use t as their parameter.
  "ava/use-t": "error",
  // Ensure that `t.throwsAsync()` and `t.notThrowsAsync()` are awaited.
  "ava/use-t-throws-async-well": "error",
  // Prevent the incorrect use of t.
  "ava/use-t-well": "error",
  // Ensure that AVA is imported with test as the variable name.
  "ava/use-test": "error",
  // Ensure that t.true()/t.false() are used instead of t.truthy()/t.falsy().
  "ava/use-true-false": "error",
};
