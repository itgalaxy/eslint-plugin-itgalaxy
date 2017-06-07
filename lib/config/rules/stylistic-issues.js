'use strict';

// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
    // Enforce spacing inside array brackets
    'array-bracket-spacing': 'off',
    // Disallow or enforce spaces inside of single line blocks
    'block-spacing': 'off',
    // Enforce one true brace style
    'brace-style': 'off',
    // Require camel case names
    camelcase: [
        'error',
        {
            properties: 'always'
        }
    ],
    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',
    // Require or disallow trailing commas
    'comma-dangle': 'off',
    // Enforce spacing before and after comma
    'comma-spacing': 'off',
    // Enforce one true comma style
    'comma-style': 'off',
    // Require or disallow padding inside computed properties
    'computed-property-spacing': 'off',
    // Enforces consistent naming when capturing the current execution context
    'consistent-this': ['error', '_this'],
    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'off',
    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',
    'func-name-matching': 'error',
    // Don"t require function expressions to have a name
    'func-names': 'off',
    // Enforces use of function declarations or expressions
    'func-style': [
        'error',
        'declaration',
        {
            allowArrowFunctions: true
        }
    ],
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',
    // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': [
        'error',
        {
            min: 2,
            max: 32,
            properties: 'always',
            exceptions: ['$', 'i', 'j', 'k', 'v', 'm', 'n', 't', '_']
        }
    ],
    // Require identifiers to match the provided regular expression
    'id-match': [
        'error',
        '^[$a-zA-Z_][a-zA-Z0-9_]*$',
        {
            properties: true
        }
    ],
    // This option sets a specific tab width for your code
    indent: 'off',
    // Specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'off',
    // Enforces spacing between keys and values in object literal properties
    'key-spacing': 'off',
    // Enforce spacing before and after keywords
    'keyword-spacing': 'off',
    // Enforce position of line comments
    'line-comment-position': 'off',
    // Require or disallow newlines around directives
    'lines-around-directive': ['error', 'always'],
    // Disallow mixed "LF" and "CRLF" as linebreaks
    'linebreak-style': ['error', 'unix'],
    // Enforces empty lines around comments
    'lines-around-comment': [
        'error',
        {
            beforeBlockComment: false,
            afterBlockComment: false,
            beforeLineComment: false,
            afterLineComment: false,
            allowBlockStart: true,
            allowBlockEnd: false,
            allowObjectStart: true,
            allowObjectEnd: false,
            allowArrayStart: true,
            allowArrayEnd: false
        }
    ],
    'max-depth': ['error', 4],
    'max-len': 'off',
    'max-lines': [
        'error',
        {
            max: 500,
            skipBlankLines: true,
            skipComments: true
        }
    ],
    // Specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['error', 6],
    'max-params': ['error', 6],
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [
        'error',
        {
            max: 1
        }
    ],
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': [
        'error',
        60,
        {
            ignoreTopLevelFunctions: false
        }
    ],
    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',
    // Require a capital letter for constructors
    'new-cap': [
        'error',
        {
            newIsCap: true,
            capIsNew: true,
            newIsCapExceptions: [],
            capIsNewExceptions: [
                'Immutable.Map',
                'Immutable.Set',
                'Immutable.List'
            ],
            properties: true
        }
    ],
    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'off',
    // Allow/disallow an empty newline after var statement
    'newline-after-var': ['error', 'always'],
    // Require newline before `return` statement
    'newline-before-return': 'error',
    // Enforce newline after each call when chaining the calls
    'newline-per-chained-call': 'off',
    // Disallow use of the Array constructor
    'no-array-constructor': 'error',
    // Disallow bitwise operators
    'no-bitwise': 'off',
    // Disallow use of the continue statement
    'no-continue': 'error',
    // Disallow comments inline after code
    'no-inline-comments': 'off',
    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-operators': 'off',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'off',
    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': 'off',
    'no-negated-condition': 'off',
    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // Disallow use of the Object constructor
    'no-new-object': 'error',
    // Disallow space between function identifier and application
    'no-plusplus': 'off',
    // Disallow specified syntax
    'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement'
    ],
    'no-tabs': 'off',
    // Disallow the use of ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'off',
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': [
        'error',
        {
            allowAfterThis: false,
            allowAfterSuper: false,
            allow: [
                '_this',
                '_extend',
                '_read',
                '_write',
                '_writev',
                '_transform',
                '_flush'
            ]
        }
    ],
    // Disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 'error',
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'off',
    // Disallow whitespace before properties
    'nonblock-statement-body-position': 'off',
    // Disallow dangling underscores in identifiers
    'object-curly-newline': 'off',
    // Require or disallow padding inside curly braces
    'object-curly-spacing': 'off',
    // Enforce placing object properties on separate lines
    'object-property-newline': 'off',
    // Require or disallow an newline around variable declarations
    'one-var-declaration-per-line': 'off',
    // Allow or disallow one variable declaration per function
    'one-var': ['error', 'never'],
    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],
    // Enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // Enforce padding within blocks
    'padded-blocks': 'off',
    // Require quotes around object literal property names
    'quote-props': 'off',
    // Specify whether backticks, double or single quotes should be used
    quotes: 'off',
    // Require JSDoc comments
    'require-jsdoc': 'off',
    // Enforce spacing before and after semicolons
    'semi-spacing': 'off',
    // Require or disallow use of semicolons instead of ASI
    semi: 'off',
    // Requires object keys to be sorted
    'sort-keys': [
        'error',
        'asc',
        {
            caseSensitive: false,
            natural: true
        }
    ],
    // Sort variables within the same declaration block
    'sort-vars': 'off',
    // Require or disallow space before blocks
    'space-before-blocks': 'off',
    // Require or disallow space before function opening parenthesis
    'space-before-function-paren': 'off',
    // Require or disallow spaces inside parentheses
    'space-in-parens': 'off',
    // Require spaces around operators
    'space-infix-ops': 'off',
    // Require or disallow spaces before/after unary operators (words on by default, nonwords)
    'space-unary-ops': 'off',
    // Require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
        'error',
        'always',
        {
            line: {
                exceptions: ['-', '+'],
                markers: ['=', '!'] // space here to support sprockets directives
            },
            block: {
                exceptions: ['-', '+'],
                markers: ['=', '!'], // space here to support sprockets directives
                balanced: false
            }
        }
    ],
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    // Require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
};
