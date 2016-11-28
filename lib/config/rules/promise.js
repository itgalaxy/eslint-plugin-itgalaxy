'use strict';

// see https://github.com/xjamundx/eslint-plugin-promise

module.exports = {
    // Ensure that each time a then() is applied to a promise, a catch() is applied as well.
    // Exceptions are made if you are returning that promise.
    'promise/catch-or-return': 'error',
    // Prevents uneccessary wrapping of results in Promise.resolve
    // or Promise.reject as the Promise will do that for us
    'promise/no-return-wrap': 'error',
    // Enforce standard parameter names for Promise constructors.
    'promise/param-names': 'error',
    // Ensure that inside a then() you make sure to return a new promise or value.
    'promise/always-return': 'error',
    // Allow use native promise
    'promise/no-native': 'off',
    // Avoid nested .then() or .catch() statements
    'promise/no-nesting': 'off',
    // Avoid using promises inside of callbacks
    'promise/no-promise-in-callback': 'error',
    // Avoid calling cb() inside of a then()
    'promise/no-callback-in-promise': 'error',
    // Avoid creating new promises outside of utility libs
    'promise/avoid-new': 'off',

    // Async/Await Rules
    // Prefer await to then() for reading Promise values
    'promise/prefer-await-to-then': 'off',
    // Prefer async/await to the callback pattern
    'promise/prefer-await-to-callbacks': 'off',

    // Deprecated
    'promise/always-catch': 'off'
};