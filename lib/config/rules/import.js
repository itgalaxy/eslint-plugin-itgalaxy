"use strict";

// see https://github.com/benmosher/eslint-plugin-import

module.exports = {
  // Static analysis

  // Ensure imports point to a file/module that can be resolved.
  "import/no-unresolved": [
    "error",
    { commonjs: true, amd: true, caseSensitive: true }
  ],
  // Ensure named imports correspond to a named export in the remote file.
  "import/named": "error",
  // Ensure a default export is present, given a default import.
  "import/default": "error",
  // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
  "import/namespace": "error",
  // Restrict which files can be imported in a given folder
  "import/no-restricted-paths": "off",
  // Forbid import of modules using absolute paths
  "import/no-absolute-path": "error",
  // Prevent importing the submodules of other modules
  "import/no-dynamic-require": "error",
  // Prevent importing the submodules of other modules
  "import/no-internal-modules": "off",
  // Forbid Webpack loader syntax in imports
  "import/no-webpack-loader-syntax": "off",

  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  "import/export": "error",
  // Report use of exported name as identifier of default export
  "import/no-named-as-default": "error",
  // Report use of exported name as property of default export
  "import/no-named-as-default-member": "error",
  // Report imported names marked with @deprecated documentation tag
  "import/no-deprecated": "error",
  // Maybe add glob for tests
  // Forbid the use of extraneous packages
  "import/no-extraneous-dependencies": "error",
  // Forbid the use of mutable exports with var or let.
  "import/no-mutable-exports": "error",

  // Module systems

  // Report potentially ambiguous parse goal
  // Info: need investigation
  "import/unambiguous": "off",
  // Report CommonJS require calls and module.exports or exports.*.
  "import/no-commonjs": "off",
  // Report AMD require and define calls.
  "import/no-amd": "error",
  // No Node.js builtin modules.
  "import/no-nodejs-modules": "off",

  // Style guide

  // Ensure all imports appear before other statements
  "import/first": "error",
  // Report repeated import of the same module in multiple places
  "import/no-duplicates": "error",
  // Report namespace imports
  "import/no-namespace": "off",
  // Ensure consistent use of file extension within the import path
  "import/extensions": [
    "error",
    "never",
    {
      json: "always"
    }
  ],
  // Enforce a convention in module import order
  "import/order": "off",
  // Enforce a newline after import statements
  "import/newline-after-import": "off",
  // Prefer a default export if module exports a single name
  "import/prefer-default-export": "error",
  // Limit the maximum number of dependencies a module can have
  "import/max-dependencies": "off",
  // Forbid unassigned imports
  "import/no-unassigned-import": "off",
  // Forbid named default exports
  "import/no-named-default": "off",
  // Forbid anonymous values as default exports
  "import/no-anonymous-default-export": "off",

  // Deprecated

  "import/imports-first": "off"
};
