// see http://eslint.org/docs/rules/#stylistic-issues

export default {
    // Enforce spacing inside array brackets
    'array-bracket-spacing': [
        'error',
        'never'
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
            'allowSingleLine': false
        }
    ],
    // Require camel case names
    'camelcase': [
        'error',
        {
            'properties': 'always'
        }
    ],
    // Require or disallow trailing commas
    'comma-dangle': [
        'error',
        'never'
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
    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': [
        'error',
        'never'
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
            max: 32,
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
            'SwitchCase': 1,
            'VariableDeclarator': 1,
            'outerIIFEBody': 1,
            'MemberExpression': 1,
            'FunctionDeclaration': {
                "body": 1,
                "parameters": 1
            },
            'FunctionExpression': {
                "body": 1,
                "parameters": 1
            }
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
            after: true
        }
    ],
    // Enforce position of line comments
    'line-comment-position': 'off',
    // Require or disallow newlines around directives
    'lines-around-directive': 'always',
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
    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': [
        'error',
        {
            'max': 1
        }
    ],
    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': [
        'error',
        60,
        {
            'ignoreTopLevelFunctions': false
        }
    ],
    // Enforce newlines between operands of ternary expressions
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
            'ignoreChainWithDepth': 4
        }
    ],
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
    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',
    // Disallow multiple empty lines
    'no-multiple-empty-lines': [
        'error',
        {
            'max': 1,
            'maxEOF': 1,
            'maxBOF': 0
        }
    ],
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
    'no-tabs': 'error',
    // Disallow the use of ternary operators
    'no-ternary': 'off',
    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // Allow dangling underscores in identifiers
    'no-underscore-dangle': [
        'error',
        {
            'allowAfterThis': false,
            'allowAfterSuper': false,
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
    'no-unneeded-ternary': 'error',
    // Disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // Disallow dangling underscores in identifiers
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
        'always'
    ],
    // Enforce placing object properties on separate lines
    'object-property-newline': [
        'error',
        {
            'allowMultiplePropertiesPerLine': false
        }
    ],
    // Require or disallow an newline around variable declarations
    'one-var-declaration-per-line': [
        'error',
        'always'
    ],
    // Allow or disallow one variable declaration per function
    'one-var': [
        'error',
        'never'
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
        {
            'blocks': 'never',
            'classes': 'never',
            'switches': 'never'
        }
    ],
    // Require quotes around object literal property names
    'quote-props': [
        'error',
        'as-needed',
        {
            'keywords': false,
            'unnecessary': true,
            'numbers': false
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
    // Require JSDoc comments
    'require-jsdoc': 'off',
    // Enforce spacing before and after semicolons
    'semi-spacing': [
        'error',
        {
            'before': false,
            'after': true
        }
    ],
    // Require or disallow use of semicolons instead of ASI
    'semi': [
        'error',
        'always',
        {
            'omitLastInOneLineBlock': true
        }
    ],
    // Requires object keys to be sorted
    'sort-keys': [
        'error',
        'asc',
        {
            'caseSensitive': false,
            'natural': true
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
    'wrap-regex': 'error'
};
