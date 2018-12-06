"use strict";

module.exports = {
  // Possible errors

  // Use or avoid thisArg for Lodash method callbacks, depending on major version.
  // In recommended
  // "lodash/callback-binding": "error",
  // Use value returned from collection methods properly.
  // In recommended
  // "lodash/collection-method-value": "error",
  // Always return a value in iteratees of Lodash collection methods that aren't forEach.
  // In recommended
  // "lodash/collection-return": "error",
  // Do not use `.value()` on chains that have already ended (e.g. with `max()` or `reduce()`)
  // In recommended
  // "lodash/no-double-unwrap": "error",
  // Do not use superfluous arguments on Lodash methods with a specified arity.
  // In recommended
  // "lodash/no-extra-args": "error",
  // Do not use this inside callbacks without binding them.
  // In recommended
  // "lodash/no-unbound-this": "error",
  // Prevent chaining without evaluation via `value()` or non-chainable methods like `max()`.
  // In recommended
  // "lodash/unwrap": "error",

  // Stylistic issues

  // Enforce a specific chain style: explicit, implicit, or explicit only when necessary.
  // In recommended
  // "lodash/chain-style": ["error", "as-needed"],
  // Prefer a either a Lodash chain or nested Lodash calls
  // In recommended
  // "lodash/chaining": ["error", "always"],
  // Enforce a specific function composition direction: `flow` or `flowRight`.
  // In recommended
  // "lodash/consistent-compose": ["error", "flow"],
  // Prefer identity shorthand syntax
  // In recommended
  // "lodash/identity-shorthand": ["error", "always"],
  // Prefer a specific import scope (e.g. `lodash/map` vs `lodash`)
  "lodash/import-scope": "off",
  // Prefer matches property shorthand syntax
  // In recommended
  // "lodash/matches-prop-shorthand": ["error", "always"],
  // Prefer matches shorthand syntax
  // In recommended
  // "lodash/matches-shorthand": ["error", "always", 3],
  // Do not use `.commit()` on chains that should end with `.value()`
  // In recommended
  // "lodash/no-commit": "error",
  // Enforce a specific path style for methods like get and property: array, string, or arrays only for deep paths.
  // In recommended
  // "lodash/path-style": ["error", "string"],
  // Prefer `_.compact()` over `_.filter()` for only truthy values.
  // In recommended
  // "lodash/prefer-compact": "error",
  // Prefer `_.filter()` over `_.forEach()` with an if statement inside.
  // In recommended
  // "lodash/prefer-filter": ["error", 3],
  // Prefer `_.find` over `_.filter` followed by selecting the first result.
  // In recommended
  // "lodash/prefer-find": "error",
  // Prefer `_.flatMap()` over consecutive map and flatten.
  // In recommended
  // "lodash/prefer-flat-map": "error",
  // Prefer using methods that do not mutate the source parameters, e.g. `_.without` instead of `_.pull`.
  // In recommended
  // "lodash/prefer-immutable-method": "error",
  // Prefer using `_.invoke()` over `_.map()` with a method call inside.
  // In recommended
  // "lodash/prefer-invoke-map": "error",
  // Prefer `_.map()` over `_.forEach()` with a push inside.
  // In recommended
  // "lodash/prefer-map": "error",
  // Prefer `_.reject()` over filter with `!(expression)` or `x.prop1 !== value`
  // In recommended
  // "lodash/prefer-reject": ["error", 3],
  // Prefer using `_.prototype.thru()` in the chain and not call functions in the initial value, e.g. `_(x).thru(f).map(g)`...
  // In recommended
  // "lodash/prefer-thru": "error",
  // Prefer using array and string methods in the chain and not the initial value, e.g. `_(str).split(' ')`...
  // In recommended
  // "lodash/prefer-wrapper-method": "error",
  // Prefer using main method names instead of aliases.
  // In recommended
  // "lodash/preferred-alias": "error",
  // Use/forbid property shorthand syntax.
  // In recommended
  // "lodash/prop-shorthand": ["error", "always"],
  // Prefer `_.times` over `_.map` without using the iteratee's arguments.

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
  "lodash/prefer-startswith": "off",
  // Prefer `_.times` over `_.map` without using the iteratee's arguments.
  "lodash/prefer-times": "error"
};
