"use strict";

// see https://github.com/benmosher/eslint-plugin-import

module.exports = {
  // Helpful warnings

  // Report any invalid exports, i.e. re-export of the same name
  "import/export": "error",
  // Report imported names marked with @deprecated documentation tag
  "import/no-deprecated": "off",
  // Forbid empty named import blocks.
  "import/no-empty-named-blocks": "error",
  // Forbid the use of extraneous packages
  "import/no-extraneous-dependencies": "error",
  // Forbid the use of mutable exports with var or let.
  "import/no-mutable-exports": "error",
  // Report use of exported name as identifier of default export
  "import/no-named-as-default": "error",
  // Report use of exported name as property of default export
  "import/no-named-as-default-member": "error",
  // Modules without any exports
  "import/no-unused-modules": "off",

  // Module systems

  // Report AMD require and define calls.
  "import/no-amd": "error",
  // Report CommonJS require calls and module.exports or exports.*.
  // No need due we have `module`, `script` and `dirty` presets, so you will have errors with commonjs syntax in ECMA modules and versa vice
  "import/no-commonjs": "off",
  // Forbid imports with CommonJS exports
  "import/no-import-module-exports": "off",
  // No Node.js builtin modules.
  "import/no-nodejs-modules": "off",
  // Report potentially ambiguous parse goal
  // This should not be enabled until this proposal has at least been *presented* to TC39.
  // At the moment, it's not a thing.
  "import/unambiguous": "off",

  // Static analysis

  // Ensure a default export is present, given a default import.
  "import/default": "error",
  // Ensure named imports correspond to a named export in the remote file.
  "import/named": "error",
  // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
  "import/namespace": "error",
  // Forbid import of modules using absolute paths
  "import/no-absolute-path": [
    "error",
    {
      esmodule: true,
      commonjs: true,
      amd: true,
    },
  ],
  // Forbid a module from importing a module with a dependency path back to itself
  "import/no-cycle": "error",
  // Prevent importing the submodules of other modules
  "import/no-dynamic-require": "off",
  // Prevent importing the submodules of other modules
  "import/no-internal-modules": "off",
  // Prevent importing packages through relative paths
  "import/no-relative-packages": "off",
  // Use this rule to prevent imports to folders in relative parent paths.
  "import/no-relative-parent-imports": "off",
  // Restrict which files can be imported in a given folder
  "import/no-restricted-paths": "off",
  // Forbid a module from importing itself
  "import/no-self-import": "error",
  // Ensure imports point to a file/module that can be resolved.
  "import/no-unresolved": [
    "error",
    { amd: true, commonjs: true, caseSensitive: true },
  ],
  // Prevent unnecessary path segemnts in import and require statements
  "import/no-useless-path-segments": "off",
  // Forbid Webpack loader syntax in imports
  "import/no-webpack-loader-syntax": "off",

  // Style guide

  // In both Flow and TypeScript you can mark an import as a type-only import by adding a "kind" marker to the import. Both languages support two positions for marker.
  "import/consistent-type-specifier-style": ["error", "prefer-inline"],
  // Enforce a leading comment with the webpackChunkName for dynamic imports
  "import/dynamic-import-chunkname": "off",
  // Ensure all exports appear after other statements
  "import/exports-last": "error",
  // Ensure consistent use of file extension within the import path
  "import/extensions": "off",
  // Ensure all imports appear before other statements
  "import/first": "error",
  // Prefer named exports to be grouped together in a single export declaration
  // TODO Broken
  "import/group-exports": "off",
  // Limit the maximum number of dependencies a module can have
  "import/max-dependencies": "off",
  // Enforce a newline after import statements
  "import/newline-after-import": "off",
  // Forbid anonymous values as default exports
  "import/no-anonymous-default-export": "off",
  // Forbid default exports
  "import/no-default-export": "off",
  // Report repeated import of the same module in multiple places
  "import/no-duplicates": ["error", { considerQueryString: true }],
  // Forbid named default exports
  "import/no-named-default": "error",
  // Forbid named exports
  "import/no-named-export": "off",
  // Report namespace imports
  "import/no-namespace": "off",
  // Forbid unassigned imports
  "import/no-unassigned-import": "off",
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
  // Prefer a default export if module exports a single name
  "import/prefer-default-export": "error",
};
