"use strict";

module.exports = {
  // Possible errors

  // Use or avoid thisArg for Lodash method callbacks, depending on major version.
  "lodash/callback-binding": "error",
  // Use value returned from collection methods properly.
  "lodash/collection-method-value": "error",
  // Lodash has two methods for sorting a collection by a specific order: sortBy and orderBy.
  // Both methods accept one or several iteratees, but orderBy also accepts an optional parameter whether the order is ascending or descending.
  // This means that ordering any array by ascending order can be done in several different ways:
  "lodash/collection-ordering": "error",
  // Always return a value in iteratees of Lodash collection methods that aren't forEach.
  "lodash/collection-return": "error",
  // Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`)
  "lodash/no-double-unwrap": "error",
  // Do not use superfluous arguments on Lodash methods with a specified arity.
  "lodash/no-extra-args": "error",
  // Do not use this inside callbacks without binding them.
  "lodash/no-unbound-this": "error",
  // Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`.
  "lodash/unwrap": "error",

  // Stylistic issues

  // Enforce a specific chain style: explicit, implicit, or explicit only when necessary.
  "lodash/chain-style": ["error", "as-needed"],
  // Prefer a either a Lodash chain or nested Lodash calls
  "lodash/chaining": "error",
  // Enforce a specific function composition direction: `flow` or `flowRight`.
  "lodash/consistent-compose": ["error", "flow"],
  // Prefer identity shorthand syntax
  "lodash/identity-shorthand": ["error", "always"],
  // Prefer a specific import scope (e.g. `lodash/map` vs `lodash`)
  // Rewrite recommended due difference packages can use difference import scope for `lodash`
  "lodash/import-scope": "off",
  // Prefer matches property shorthand syntax
  "lodash/matches-prop-shorthand": ["error", "always"],
  // Prefer matches shorthand syntax
  "lodash/matches-shorthand": ["error", "always", 3],
  // Do not use `.commit()` on chains that should end with `.value()`
  "lodash/no-commit": "error",
  // Enforce a specific path style for methods like get and property: array, string, or arrays only for deep paths.
  "lodash/path-style": ["error", "string"],
  // Prefer `_.compact()` over `_.filter()` for only truthy values.
  "lodash/prefer-compact": "error",
  // Prefer `_.filter()` over `_.forEach()` with an if statement inside.
  "lodash/prefer-filter": ["error", 3],
  // Prefer `_.find` over `_.filter` followed by selecting the first result.
  "lodash/prefer-find": "error",
  // Prefer `_.flatMap()` over consecutive map and flatten.
  "lodash/prefer-flat-map": "error",
  // Prefer using methods that do not mutate the source parameters, e.g. `_.without` instead of `_.pull`.
  "lodash/prefer-immutable-method": "error",
  // Prefer using `_.invoke()` over `_.map()` with a method call inside.
  "lodash/prefer-invoke-map": "error",
  // Prefer `_.map()` over `_.forEach()` with a push inside.
  "lodash/prefer-map": "error",
  // Prefer `_.reject()` over filter with `!(expression)` or `x.prop1 !== value`
  "lodash/prefer-reject": ["error", 3],
  // Prefer using `_.prototype.thru()` in the chain and not call functions in the initial value, e.g. `_(x).thru(f).map(g)`...
  "lodash/prefer-thru": "error",
  // Prefer using array and string methods in the chain and not the initial value, e.g. `_(str).split(' ')`...
  "lodash/prefer-wrapper-method": "error",
  // Prefer using main method names instead of aliases.
  "lodash/preferred-alias": "error",
  // Use/forbid property shorthand syntax.
  "lodash/prop-shorthand": ["error", "always"],
  // Prefer `_.times` over `_.map` without using the iteratee's arguments.
  "lodash/prefer-times": "error",

  // Preference over native

  // Prefer `_.constant()` over functions returning literals.
  // Prefer native implementation over `lodash`
  "lodash/prefer-constant": "off",
  // Prefer using `_.get` or `_.has` over expression chains like `a && a.b && a.b.c`.
  // Prefer native implementation over `lodash`
  "lodash/prefer-get": "off",
  // Prefer `_.includes()` over comparing `indexOf` to -1.
  // Prefer native implementation over `lodash`
  "lodash/prefer-includes": "off",
  // Prefer `_.isNil` over checks for both `null` and `undefined`.
  // Prefer native implementation over `lodash`
  "lodash/prefer-is-nil": "off",
  // Prefer using Lodash chains (e.g. `_.map()`) over native and mixed chains.
  // Prefer native implementation over `lodash`
  "lodash/prefer-lodash-chain": "off",
  // Prefer using Lodash collection methods (e.g. `_.map()`) over native array methods.
  // Prefer native implementation over `lodash`
  "lodash/prefer-lodash-method": "off",
  // Prefer using `_.is*` methods over typeof and instanceof checks when applicable.
  // Prefer native implementation over `lodash`
  "lodash/prefer-lodash-typecheck": "off",
  // Prefer `_.matches()` over conditions like `a.foo === 1 && a.bar === 2 && a.baz === 3`.
  // Prefer native implementation over `lodash`
  "lodash/prefer-matches": "off",
  // Prefer `_.noop()` over empty functions.
  // Prefer native implementation over `lodash`
  "lodash/prefer-noop": "off",
  // Prefer `_.overSome` and `_.overEvery` instead of checks with `&&` and `||` for methods that have a boolean check iteratee.
  // Prefer native implementation over `lodash`
  "lodash/prefer-over-quantifier": "off",
  // Prefer using `_.some` over comparing `findIndex` to -1.
  // Prefer native implementation over `lodash`
  "lodash/prefer-some": "off",
  // Prefer `_.startsWith()` over `a.indexOf(b) === 0`.
  // Prefer native implementation over `lodash`
  "lodash/prefer-startswith": "off"
};
