"use strict";

// See https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest

module.exports = {
  // Enforce consistent test or it keyword
  "jest/consistent-test-it": "error",
  // Enforce assertion to be made in a test body
  "jest/expect-expect": "error",
  // Disallow capitalized test names
  "jest/prefer-lowercase-title": "error",
  // Enforces a maximum depth to nested describe calls
  "jest/max-nested-describe": "off",
  // Disallow alias methods
  "jest/no-alias-methods": "error",
  // Disallow commented out tests
  "jest/no-commented-out-tests": "error",
  // Disallow commented out tests
  "jest/no-conditional-expect": "error",
  // Disallow use of deprecated functions
  "jest/no-deprecated-functions": "error",
  // Disallow disabled tests
  "jest/no-disabled-tests": "error",
  // Avoid using a callback in asynchronous tests and hooks
  "jest/no-done-callback": "error",
  // Disallow duplicate hooks within a describe block
  "jest/no-duplicate-hooks": "error",
  // Disallow export from test files
  "jest/no-export": "error",
  // Disallow focused tests
  "jest/no-focused-tests": "error",
  // Disallow setup and teardown hooks
  "jest/no-hooks": "off",
  // Disallow identical titles
  "jest/no-identical-title": "error",
  // Disallow conditional logic
  "jest/no-if": "off",
  // Disallow string interpolation inside snapshots
  "jest/no-interpolation-in-snapshots": "error",
  // Disallow Jasmine globals
  "jest/no-jasmine-globals": "error",
  // Disallow importing `jest`
  "jest/no-jest-import": "error",
  // Disallow large snapshots
  "jest/no-large-snapshots": "off",
  // Disallow manually importing from __mocks__
  "jest/no-mocks-import": "error",
  // Disallow specific matchers & modifiers
  "jest/no-restricted-matchers": [
    "error",
    {
      toBeTruthy: "Avoid `toBeTruthy`",
      toBeFalsy: "Avoid `toBeFalsy`",
    },
  ],
  // Prevents `expect` statements outside of a `test` or `it` block
  "jest/no-standalone-expect": "error",
  // Disallow using `f` & `x` prefixes to define focused/skipped tests
  "jest/no-test-prefixes": "error",
  // Disallow explicitly returning from tests
  "jest/no-test-return-statement": "off",
  // Suggest using `toBeCalledWith()` OR `toHaveBeenCalledWith()`
  "jest/prefer-called-with": "off",
  // Suggest using `expect.assertions()` OR `expect.hasAssertions()`
  "jest/prefer-expect-assertions": "off",
  // Prefer `await expect(...).resolves` over `expect(await ...)` syntax
  "jest/prefer-expect-resolves": "error",
  // Suggest to have all hooks at top-level before tests
  "jest/prefer-hooks-on-top": "error",
  // Suggest using `jest.spyOn()`
  "jest/prefer-spy-on": "error",
  // Suggest using `toStrictEqual()`
  "jest/prefer-strict-equal": "off",
  // Suggest using `toBe()` for primitive literals
  "jest/prefer-to-be": "error",
  // Suggest using `toContain()`
  "jest/prefer-to-contain": "error",
  // Suggest using `toHaveLength()`
  "jest/prefer-to-have-length": "error",
  // Suggest using `test.todo`
  "jest/prefer-todo": "error",
  // Require setup and teardown code to be within a hook
  "jest/require-hook": "error",
  // Require that `toThrow()` and `toThrowError()` includes a message
  "jest/require-to-throw-message": "error",
  // Require a top-level `describe` block
  "jest/require-top-level-describe": "error",
  // Enforce valid `describe()` callback
  "jest/valid-describe-callback": "error",
  // Enforce valid `expect()` usage
  "jest/valid-expect": "error",
  // Enforce having return statement when testing with promises
  "jest/valid-expect-in-promise": "error",
  // Enforce valid titles for jest blocks
  "jest/valid-title": "error",

  // TypeScript Rules
  "jest/unbound-method": "off",
};
