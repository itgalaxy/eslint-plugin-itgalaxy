// see https://github.com/xjamundx/eslint-plugin-promise

export default {
    // Ensure that each time a then() is applied to a promise, a catch() is applied as well.
    // Exceptions are made if you are returning that promise.
    'promise/catch-or-return': 'error',
    // Ensure that inside a then() you make sure to return a new promise or value.
    'promise/always-return': 'error',
    // Enforce standard parameter names for Promise constructors.
    'promise/param-names': 'error',
    // Allow use native promise
    'promise/no-native': 'off'
};