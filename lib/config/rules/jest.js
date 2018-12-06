"use strict";

// See https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest

module.exports = {
  // Enforce consistent test or it keyword
  "jest/consistent-test-it": "error",
  // Enforce assertion to be made in a test body
  "jest/expect-expect": "error",
  // Disallow capitalized test names
  "jest/lowercase-name": "error",
  // Disallow alias methods
  "jest/no-alias-methods": "error",
  // Disallow disabled tests
  "jest/no-disabled-tests": "error",
  // Disallow focused tests
  // In recommended
  // "jest/no-focused-tests": "error",
  // Disallow setup and teardown hooks
  "jest/no-hooks": "off",
  // Disallow identical titles
  // In recommended
  // "jest/no-identical-title": "error",
  // Disallow Jasmine globals
  "jest/no-jasmine-globals": "error",
  // Disallow importing `jest`
  // In recommended
  // "jest/no-jest-import": "error",
  // Disallow large snapshots
  "jest/no-large-snapshots": "off",
  // Using a callback in asynchronous tests
  "jest/no-test-callback": "off",
  // Disallow using `f` & `x` prefixes to define focused/skipped tests
  // In recommended
  // "jest/no-test-prefixes": "error",
  // Disallow explicitly returning from tests
  "jest/no-test-return-statement": "off",
  // Disallow using `toBeTruthy()` & `toBeFalsy()`
  "jest/no-truthy-falsy": "error",
  // Suggest using `expect.assertions()` OR `expect.hasAssertions()`
  "jest/prefer-expect-assertions": "off",
  // Suggest using `jest.spyOn()`
  "jest/prefer-spy-on": "error",
  // Suggest using `toStrictEqual()`
  "jest/prefer-strict-equal": "off",
  // Suggest using `toBeNull()`
  // In recommended
  // "jest/prefer-to-be-null": "error",
  // Suggest using `toBeUndefined()`
  // In recommended
  // "jest/prefer-to-be-undefined": "error",
  // Suggest using `toContain()`
  // In recommended
  // "jest/prefer-to-contain": "error",
  // Suggest using `toHaveLength()`
  // In recommended
  // "jest/prefer-to-have-length": "error",
  // Suggest using `toMatchInlineSnapshot()`
  "jest/prefer-inline-snapshots": "off",
  // Require that `toThrow()` and `toThrowError()` includes a message
  "jest/require-tothrow-message": "error"
  // Enforce valid `describe()` callback
  // In recommended
  // "jest/valid-describe": "error",
  // Enforce having return statement when testing with promises
  // In recommended
  // "jest/valid-expect-in-promise": "error",
  // Enforce valid `expect()` usage
  // In recommended
  // "jest/valid-expect": "error"
};
