"use strict";

module.exports = {
  // Preference over native

  // Prefer `_.constant()` over functions returning literals.
  "lodash/prefer-constant": "off",
  // Prefer using `_.get` or `_.has` over expression chains like `a && a.b && a.b.c`.
  "lodash/prefer-get": "off",
  // Prefer `_.includes()` over comparing `indexOf` to -1.
  "lodash/prefer-includes": "off",
  // Prefer `_.isNil` over checks for both `null` and `undefined`.
  "lodash/prefer-is-nil": "off",
  // Prefer using Lodash chains (e.g. `_.map()`) over native and mixed chains.
  "lodash/prefer-lodash-chain": "off",
  // Prefer using Lodash collection methods (e.g. `_.map()`) over native array methods.
  "lodash/prefer-lodash-method": "off",
  // Prefer using `_.is*` methods over typeof and instanceof checks when applicable.
  "lodash/prefer-lodash-typecheck": "off",
  // Prefer `_.matches()` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
  "lodash/prefer-matches": "off",
  // Prefer `_.noop()` over empty functions.
  "lodash/prefer-noop": "off",
  // Prefer `_.overSome` and `_.overEvery` instead of checks with `&&` and `||` for methods that have a boolean check iteratee.
  "lodash/prefer-over-quantifier": "off",
  // Prefer using `_.some` over comparing `findIndex` to -1.
  "lodash/prefer-some": "off",
  // Prefer `_.startsWith()` over `a.indexOf(b) === 0`.
  "lodash/prefer-startswith": "off"
};
