'use strict';

// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
    // Enforce spacing inside array brackets
    'array-bracket-spacing': [
        'error',
        'never',
        {
            'singleValue': false,
            'objectsInArrays': false,
            'arraysInArrays': false
        }
    ],
    // Disallow or enforce spaces inside of single line blocks
    'block-spacing': [
        'error',
        'always'
    ],
    // Enforce one true brace style
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: false
        }
    ],
    // Require camel case names
    'camelcase': [
        'error',
        {
            properties: 'always'
        }
    ],
    // Enforce spacing before and after comma
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    // Enforce one true comma style
    'comma-style': [
        'error',
        'last'
    ],
    // Require or disallow padding inside computed properties
    'computed-property-spacing': [
        'error',
        'never'
    ],
    // Enforces consistent naming when capturing the current execution context
    'consistent-this': [
        'error',
        '_this'
    ],
    // Enforce newline at the end of file, with no multiple empty lines
    'eol-last': [
        'error',
        'unix'
    ],
    // Don't require function expressions to have a name
    'func-names': 'off',
    // Enforces use of function declarations or expressions
    'func-style': [
        'error',
        'declaration',
        {
            'allowArrowFunctions': true
        }
    ],
    // Blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',
    // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': [
        'error', {
            min: 2,
            properties: 'always',
            exceptions: [
                '$',
                'i',
                'j',
                'k',
                'v',
                'm',
                'n',
                't',
                '_'
            ]
        }
    ],
    // Require identifiers to match the provided regular expression
    'id-match': [
        'error',
        '^[$a-zA-Z_][a-zA-Z0-9_]*$',
        {
            'properties': true
        }
    ],
    // This option sets a specific tab width for your code
    'indent': [
        'error',
        4,
        {
            'SwitchCase': 1
        }
    ],
    // Specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [
        'error',
        'prefer-double'
    ],
    // Enforces spacing between keys and values in object literal properties
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
        }
    ],
    // Enforce spacing before and after keywords
    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true,
            overrides: {}
        }
    ],
    // Disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [
        'error',
        'unix'
    ],
    // Enforces empty lines around comments
    'lines-around-comment': [
        'error',
        {
            'beforeBlockComment': false,
            'afterBlockComment': false,
            'beforeLineComment': false,
            'afterLineComment': false,
            'allowBlockStart': true,
            'allowBlockEnd': false,
            'allowObjectStart': true,
            'allowObjectEnd': false,
            'allowArrayStart': true,
            'allowArrayEnd': false
        }
    ],
    'max-depth': [
        'error',
        4
    ],
    'max-len': [
        'error',
        {
            'code': 120,
            'tabWidth': 4,
            'ignoreComments': false,
            'ignoreTrailingComments': false,
            'ignoreUrls': true
        }
    ],
    'max-lines': [
        'error',
        {
            'max': 500,
            'skipBlankLines': true,
            'skipComments': true
        }
    ],
    // Specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [
        'error',
        6
    ],
    'max-params': [
        'error',
        6
    ],
    'max-statements': [
        'error',
        60,
        {
            'ignoreTopLevelFunctions': false
        }
    ],
    // Specify the maximum number of statements allowed per line
    'max-statements-per-line': [
        'error',
        {
            'max': 1
        }
    ],
    'multiline-ternary': 'off',
    // Require a capital letter for constructors
    'new-cap': [
        'error',
        {
            'newIsCap': true,
            'capIsNew': true,
            'capIsNewExceptions': [],
            'properties': true
        }
    ],
    // Disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // Allow/disallow an empty newline after var statement
    'newline-after-var': [
        'error',
        'always'
    ],
    // Require newline before `return` statement
    'newline-before-return': 'error',
    // Enforce newline after each call when chaining the calls
    'newline-per-chained-call': [
        'error',
        {
            'ignoreChainWithDepth': 3
        }
    ],
    // Disallow use of the Array constructor
    'no-array-constructor': 'error',
    'no-bitwise': 0,
    // Disallow use of the continue statement
    'no-continue': 'error',
    // Disallow comments inline after code
    'no-inline-comments': 'error',
    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-operators': [
        'error',
        {
            'groups': [
                [
                    '+',
                    '-',
                    '*',
                    '/',
                    '%',
                    '**'
                ],
                [
                    '&',
                    '|',
                    '^',
                    '~',
                    '<<',
                    '>>',
                    '>>>'
                ],
                [
                    '==',
                    '!=',
                    '===',
                    '!==',
                    '>',
                    '>=',
                    '<',
                    '<='
                ],
                [
                    '&&',
                    '||'
                ],
                [
                    'in',
                    'instanceof'
                ]
            ],
            'allowSamePrecedence': true
        }
    ],
    'no-mixed-spaces-and-tabs': [
        'error',
        false
    ],
    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
        'error',
        {
            'max': 1,
            'maxEOF': 1,
            'maxBOF': 0
        }
    ],
    'no-negated-condition': 0,
    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',
    // Disallow use of the Object constructor
    'no-new-object': 'error',
    // Disallow space between function identifier and application
    'no-plusplus': 0,
    'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement'
    ],
    'no-spaced-func': 'error',
    // Disallow the use of ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
        'error',
        {
            'skipBlankLines': false
        }
    ],
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': [
        'error',
        {
            'allowAfterThis': true,
            'allow': [
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
    'no-unneeded-ternary': [
        'error',
        {
            'defaultAssignment': true
        }
    ],
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
        'error',
        {
            'ObjectExpression': {
                'multiline': true,
                'minProperties': 1
            },
            'ObjectPattern': {
                'multiline': true,
                'minProperties': 2
            }
        }
    ],
    // Require or disallow padding inside curly braces
    'object-curly-spacing': [
        'error',
        'never'
    ],
    // Enforce placing object properties on separate lines
    'object-property-newline': [
        'error',
        {
            'allowMultiplePropertiesPerLine': false
        }
    ],
    // Allow or disallow one variable declaration per function
    'one-var': [
        'error',
        'never'
    ],
    // Require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [
        'error',
        'always'
    ],
    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': [
        'error',
        'always'
    ],
    // Enforce operators to be placed before or after line breaks
    'operator-linebreak': [
        'error',
        'before'
    ],
    // Enforce padding within blocks
    'padded-blocks': [
        'error',
        'never'
    ],
    // Require quotes around object literal property names
    'quote-props': [
        'error',
        'as-needed',
        {
            'keywords': false,
            'numbers': false,
            'unnecessary': true
        }
    ],
    // Specify whether backticks, double or single quotes should be used
    'quotes': [
        'error',
        'single',
        {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }
    ],
    'require-jsdoc': 'off',
    // Require or disallow use of semicolons instead of ASI
    'semi': [
        'error',
        'always'
    ],
    // Enforce spacing before and after semicolons
    'semi-spacing': [
        'error',
        {
            'before': false,
            'after': true
        }
    ],
    // Sort variables within the same declaration block
    'sort-vars': 'off',
    // Require or disallow space before blocks
    'space-before-blocks': [
        'error',
        'always'
    ],
    // Require or disallow space before function opening parenthesis
    'space-before-function-paren': [
        'error',
        {
            'anonymous': 'always',
            'named': 'never'
        }
    ],
    // Require or disallow spaces inside parentheses
    'space-in-parens': [
        'error',
        'never'
    ],
    // Require spaces around operators
    'space-infix-ops': [
        'error',
        {
            'int32Hint': true
        }
    ],
    // Require or disallow spaces before/after unary operators (words on by default, nonwords)
    'space-unary-ops': [
        'error',
        {
            'words': true,
            'nonwords': false
        }
    ],
    // Require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
        'error',
        'always',
        {
            'exceptions': [
                '-',
                '+'
            ],
            'markers': [
                '=',
                '!'
            ]
        }
    ],
    'unicode-bom': [
        'error',
        'never'
    ],
    // Require regex literals to be wrapped in parentheses
    'wrap-regex': 'error',

    'objects/no-object-properties-first-line': 'off',
    'objects/no-object-properties-last-line': 'off',
    'objects/no-object-properties-one-line': 'off',
    'objects/no-object-property-split': 'error'
};
