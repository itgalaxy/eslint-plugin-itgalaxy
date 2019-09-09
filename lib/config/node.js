"use strict";

const nodeRules = require("./rules/node");

module.exports = {
  env: { node: true },
  globals: {
    // ECMAScript
    ArrayBuffer: "readonly",
    Atomics: "readonly",
    BigInt: "readonly",
    BigInt64Array: "readonly",
    BigUint64Array: "readonly",
    DataView: "readonly",
    Float32Array: "readonly",
    Float64Array: "readonly",
    Int16Array: "readonly",
    Int32Array: "readonly",
    Int8Array: "readonly",
    Map: "readonly",
    Promise: "readonly",
    Proxy: "readonly",
    Reflect: "readonly",
    Set: "readonly",
    SharedArrayBuffer: "readonly",
    Symbol: "readonly",
    Uint16Array: "readonly",
    Uint32Array: "readonly",
    Uint8Array: "readonly",
    Uint8ClampedArray: "readonly",
    WeakMap: "readonly",
    WeakSet: "readonly",

    // ECMAScript (experimental)
    globalThis: "readonly",

    // ECMA-404
    Intl: "readonly",

    // Web Standard
    TextDecoder: "readonly",
    TextEncoder: "readonly",
    URL: "readonly",
    URLSearchParams: "readonly",
    WebAssembly: "readonly",
    clearInterval: "readonly",
    clearTimeout: "readonly",
    console: "readonly",
    queueMicrotask: "readonly",
    setInterval: "readonly",
    setTimeout: "readonly"
  },
  plugins: ["node", "import", "unicorn"],
  settings: {
    node: {
      tryExtensions: [".mjs", ".cjs", ".js", ".jsx", ".json", ".node"],
      convertPath: {
        "src/**/*.js?(x)": ["^src/(.+)$", "dist/$1"]
      }
    }
  },
  rules: {
    ...nodeRules
  }
};
