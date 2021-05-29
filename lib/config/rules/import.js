"use strict";

// see https://github.com/benmosher/eslint-plugin-import

module.exports = {
  // Static analysis

  // Ensure imports point to a file/module that can be resolved.
  "import/no-unresolved": [
    "error",
    { amd: true, commonjs: true, caseSensitive: true },
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
  "import/no-absolute-path": [
    "error",
    {
      esmodule: true,
      commonjs: true,
      amd: true,
    },
  ],
  // Prevent importing the submodules of other modules
  "import/no-dynamic-require": "error",
  // Prevent importing the submodules of other modules
  "import/no-internal-modules": "off",
  // Forbid Webpack loader syntax in imports
  "import/no-webpack-loader-syntax": "off",
  // Forbid a module from importing itself
  "import/no-self-import": "error",
  // Forbid a module from importing a module with a dependency path back to itself
  "import/no-cycle": "error",
  // Prevent unnecessary path segemnts in import and require statements
  "import/no-useless-path-segments": "off",
  // Use this rule to prevent imports to folders in relative parent paths.
  "import/no-relative-parent-imports": "off",
  // Prevent importing packages through relative paths
  "import/no-relative-packages": "off",

  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  "import/export": "error",
  // Report use of exported name as identifier of default export
  "import/no-named-as-default": "error",
  // Report use of exported name as property of default export
  "import/no-named-as-default-member": "error",
  // Report imported names marked with @deprecated documentation tag
  "import/no-deprecated": "off",
  // Forbid the use of extraneous packages
  "import/no-extraneous-dependencies": "error",
  // Forbid the use of mutable exports with var or let.
  "import/no-mutable-exports": "error",
  // Modules without any exports
  // TODO Maybe enable in future
  "import/no-unused-modules": "off",

  // Module systems

  // Report potentially ambiguous parse goal
  // This should not be enabled until this proposal has at least been *presented* to TC39.
  // At the moment, it's not a thing.
  "import/unambiguous": "off",
  // Report CommonJS require calls and module.exports or exports.*.
  // No need due we have `module`, `script` and `dirty` presets, so you will have errors with commonjs syntax in ECMA modules and versa vice
  "import/no-commonjs": "off",
  // Report AMD require and define calls.
  "import/no-amd": "error",
  // No Node.js builtin modules.
  // "import/no-nodejs-modules": "off",
  // TODO test it
  // Forbid imports with CommonJS exports
  "import/no-import-module-exports": "off",

  // Style guide

  // Ensure all imports appear before other statements
  "import/first": "error",
  // Ensure all exports appear after other statements
  "import/exports-last": "error",
  // Report repeated import of the same module in multiple places
  "import/no-duplicates": ["error", { considerQueryString: true }],
  // Report namespace imports
  "import/no-namespace": "off",
  // Ensure consistent use of file extension within the import path
  "import/extensions": "off",
  // Enforce a convention in module import order
  "import/order": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        ["internal", "parent", "sibling", "index"],
      ],
    },
  ],
  // Enforce a newline after import statements
  "import/newline-after-import": "off",
  // Prefer a default export if module exports a single name
  "import/prefer-default-export": "error",
  // Limit the maximum number of dependencies a module can have
  "import/max-dependencies": "off",
  // Forbid unassigned imports
  "import/no-unassigned-import": "off",
  // Forbid named default exports
  "import/no-named-default": "error",
  // Forbid default exports
  "import/no-default-export": "off",
  // Forbid named exports
  "import/no-named-export": "off",
  // Forbid anonymous values as default exports
  "import/no-anonymous-default-export": "off",
  // Prefer named exports to be grouped together in a single export declaration
  // Broken
  // Need enable in next version
  "import/group-exports": "off",
  // Enforce a leading comment with the webpackChunkName for dynamic imports
  "import/dynamic-import-chunkname": "error",
};
