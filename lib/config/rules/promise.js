"use strict";

// see https://github.com/xjamundx/eslint-plugin-promise

module.exports = {
  // Ensure that each time a then() is applied to a promise, a catch() is applied as well.
  // Exceptions are made if you are returning that promise.
  "promise/catch-or-return": "error",
  // Prevents uneccessary wrapping of results in Promise.resolve
  // or Promise.reject as the Promise will do that for us
  "promise/no-return-wrap": "error",
  // Enforce standard parameter names for Promise constructors.
  "promise/param-names": "error",
  // Ensure that inside a then() you make sure to return a new promise or value.
  "promise/always-return": "error",
  // Allow use native promise
  // Preferable to use native `Promise`
  "promise/no-native": "off",
  // Avoid nested .then() or .catch() statements
  // Nested Promises is fine, but deeply nested means you need do refactor, anyway it is devleoper eye work
  "promise/no-nesting": "off",
  // Avoid using promises inside of callbacks
  // For old software
  "promise/no-promise-in-callback": "off",
  // Avoid calling cb() inside of a then()
  // For old software
  "promise/no-callback-in-promise": "off",
  // Avoid creating new promises outside of utility libs
  // No need
  "promise/avoid-new": "off",
  // Avoid calling new on a Promise static method
  "promise/no-new-statics": "error",
  // Disallow return statements in `finally()`.
  "promise/no-return-in-finally": "error",
  // Ensures the proper number of arguments are passed to Promise functions
  "promise/valid-params": "error",

  // Async/Await Rules
  // Prefer await to then() for reading Promise values
  // TODO enable in future
  "promise/prefer-await-to-then": "off",
  // Prefer async/await to the callback pattern
  // TODO maybe enable in future
  "promise/prefer-await-to-callbacks": "off",
};
