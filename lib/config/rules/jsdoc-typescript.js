"use strict";

// See https://github.com/gajus/eslint-plugin-jsdoc

module.exports = {
  // Checks that @access tags use one of the following values:
  //
  // - "package", "private", "protected", "public"
  //
  // Also reports:
  //
  // - Mixing of @access with @public, @private, @protected, or @package on the same doc block.
  // - Use of multiple instances of @access (or the @public, etc. style tags) on the same doc block.
  "jsdoc/check-access": "error",
  // Reports invalid alignment of JSDoc block asterisks.
  "jsdoc/check-alignment": "error",
  // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
  "jsdoc/check-examples": "off",
  // Reports invalid padding inside JSDoc blocks.
  "jsdoc/check-indentation": "error",
  // Reports invalid alignment of JSDoc block lines.
  "jsdoc/check-line-alignment": "off",
  // Ensures that parameter names in JSDoc match those in the function declaration.
  "jsdoc/check-param-names": "error",
  // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
  "jsdoc/check-property-names": "error",
  // Reports against syntax not encouraged for the mode (e.g., Google Closure Compiler in "jsdoc" or "typescript" mode).
  // Note that this rule will not check for types that are wholly invalid for a given mode, as that is covered by `valid-types`.
  // No need because typescript supports both
  "jsdoc/check-syntax": "off",
  // Reports invalid block tag names.
  "jsdoc/check-tag-names": "error",
  // Checks that any @template names are actually used in the connected @typedef or type alias.
  // Disabled because doesn't check methods of classes
  "jsdoc/check-template-names": "off",
  // Reports invalid types.
  "jsdoc/check-types": "error",
  // This rule checks the values for a handful of tags:
  //
  // - @version - Checks that there is a present and valid semver version value.
  // - @since - As with @version
  // - @license - Checks that there is a present and valid SPDX identifier or is present within an allowedLicenses option.
  // - @author - Checks there is a value present, and if the option allowedAuthors is present, ensure that the author value is one of these array items.
  "jsdoc/check-values": "error",
  // Converts line and block comments preceding or following specified nodes into JSDoc comments
  "jsdoc/convert-to-jsdoc-comments": "off",
  // Empty tag
  "jsdoc/empty-tags": "error",
  // Reports an issue with any non-constructor function using @implements.
  "jsdoc/implements-on-classes": "error",
  // This rule will report an issue if JSDoc import() statements point to a package which is not listed in dependencies or devDependencies.
  // TODO broken
  "jsdoc/imports-as-dependencies": "off",
  // Reports on JSDoc texts that serve only to restate their attached name.
  "jsdoc/informative-docs": "off",
  // Enforces a regular expression pattern on descriptions.
  "jsdoc/match-description": "off",
  // Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
  "jsdoc/match-name": "off",
  // Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
  "jsdoc/multiline-blocks": "error",
  // Enforces a consistent padding of the block description.
  "jsdoc/newline-after-description": "off",
  // This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block, namely that it should begin with two asterisks, but which appear to be intended as jsdoc blocks due to the presence of whitespace followed by whitespace or asterisks, and an at-sign (@) and some non-whitespace (as with a jsdoc block tag).
  "jsdoc/no-bad-blocks": "error",
  // If tags are present, this rule will prevent empty lines in the block description. If no tags are present, this rule will prevent extra empty lines in the block description.
  "jsdoc/no-blank-block-descriptions": "error",
  // Reports and optionally removes blocks with whitespace only
  "jsdoc/no-blank-blocks": "error",
  // This rule reports defaults being used on the relevant portion of @param or @default. It also optionally reports the presence of the square-bracketed optional arguments at all.
  "jsdoc/no-defaults": "error",
  // This rule lets you report when certain comment structures are always expected.
  "jsdoc/no-missing-syntax": "off",
  // Prevents use of multiple asterisks at the beginning of lines.
  "jsdoc/no-multi-asterisks": "error",
  // Reports when certain comment structures are present.
  "jsdoc/no-restricted-syntax": "off",
  // This rule reports types being used on @param or @returns.
  "jsdoc/no-types": "off",
  // Checks that types in jsdoc comments are defined.
  "jsdoc/no-undefined-types": "off",
  // Requires that each JSDoc line starts with an `*`.
  "jsdoc/require-asterisk-prefix": "error",
  // Requires that all functions have a description.
  //
  // - All functions must have an implicit description or have the option descriptionStyle set to tag.
  // - Every jsdoc block description (or description tag if descriptionStyle is "tag") must have a non-empty description that explains the purpose of the method.
  "jsdoc/require-description": "off",
  // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,
  //
  // - Description must start with an uppercase alphabetical character.
  // - Paragraphs must start with an uppercase alphabetical character.
  // - Sentences must end with a period.
  // - Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.
  // - A colon or semi-colon followed by two line breaks is still part of the containing paragraph (unlike normal dual line breaks).
  // - Text within inline tags {...} are not checked for sentence divisions.
  // - Periods after items within the abbreviations option array are not treated as sentence endings.
  "jsdoc/require-description-complete-sentence": "off",
  // Requires that all functions have examples.
  //
  // - All functions must have one or more @example tags.
  // - Every example tag must have a non-empty description that explains the method's usage.
  "jsdoc/require-example": "off",
  // Checks that:
  //
  // - All files have a @file, @fileoverview, or @overview tag.
  // - Duplicate file overview tags within a given file will be reported
  // - File overview tags will be reported which are not, as per the docs, "at the beginning of the file"–where beginning of the file is interpreted in this rule as being when the overview tag is not preceded by anything other than a comment.
  "jsdoc/require-file-overview": "off",
  // Requires (or disallows) a hyphen before the `@param` description.
  "jsdoc/require-hyphen-before-param-description": ["error", "never"],
  // Checks for presence of jsdoc comments, on class declarations as well as functions.
  "jsdoc/require-jsdoc": "off",

  // `@param`

  // Requires that all function parameters are documented.
  "jsdoc/require-param": "error",
  // Requires that each `@param` tag has a `description` value.
  "jsdoc/require-param-description": "error",
  // Requires that all function parameters have names.
  "jsdoc/require-param-name": "error",
  // Requires that each `@param` tag has a `type` value.
  "jsdoc/require-param-type": "error",

  // `@property`

  // Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
  "jsdoc/require-property": "error",
  // Requires that each `@property` tag has a `description` value.
  "jsdoc/require-property-description": "error",
  // Requires that all function `@property` tags have names.
  "jsdoc/require-property-name": "error",
  // Requires that each `@property` tag has a `type` value.
  "jsdoc/require-property-type": "error",

  // `@returns`

  // Requires that returns are documented.
  "jsdoc/require-returns": "error",
  // Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
  // A lot of false positive with loops/`switch`/`if`/etc
  "jsdoc/require-returns-check": "off",
  // Requires that the `@returns` tag has a `description` value.
  "jsdoc/require-returns-description": "error",
  // Requires that `@returns` tag has `type` value.
  "jsdoc/require-returns-type": "error",
  // Requires @template tags be present when type parameters are used.
  "jsdoc/require-template": "error",
  // Requires that throw statements are documented.
  "jsdoc/require-throws": "off",
  // Requires that yields are documented.
  "jsdoc/require-yields": "error",
  // Ensures that if a @yields is present that a yield (or yield with a value) is present in the function body (or that if a @next is present that there is a yield with a return value present).
  "jsdoc/require-yields-check": "error",
  // Sorts tags by a specified sequence according to tag name.
  "jsdoc/sort-tags": "off",
  // Enforces lines (or no lines) between tags.
  "jsdoc/tag-lines": "error",
  // This rule may be desirable if your text is known not to contain HTML or Markdown and you therefore do not wish for it to be accidentally interpreted as such by the likes of Visual Studio Code or if you wish to view it escaped within it or your documentation.
  "jsdoc/text-escaping": "off",
  // Requires all types to be valid JSDoc, Closure, or TypeScript compiler types without syntax errors.
  // Doesn't support function overloading/tuples/`readonly`/module keyword/etc
  // Also `typescript` reports about it itself
  "jsdoc/valid-types": "off",
};
