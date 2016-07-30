// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
    // Require braces in arrow function body
    'arrow-body-style': [
        'error',
        'as-needed',
        {
            'requireReturnForObjectLiteral': true
        }
    ],
    // Require parens in arrow function arguments
    'arrow-parens': [
        'error',
        'always'
    ],
    // Require space before/after arrow function's arrow
    'arrow-spacing': [
        'error',
        {
            before: true,
            after: true
        }
    ],
    // Verify super() callings in constructors
    'constructor-super': 'error',
    // Enforce the spacing around the * in generator functions
    'generator-star-spacing': [
        'error',
        {
            'before': true,
            'after': false
        }
    ],
    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',
    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [
        'error',
        {
            allowParens: false
        }
    ],
    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',
    // Disallow duplicate name in class members
    'no-dupe-class-members': 'error',
    // Disallow duplicate module imports
    'no-duplicate-imports': 'error',
    // Disallow use of the new operator with the Symbol object
    'no-new-symbol': 'error',
    // Restrict usage of specified node imports
    'no-restricted-imports': 'off',
    // Disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',
    // Disallow unnecessary computed property keys in object literals
    'no-useless-computed-key': 'error',
    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',
    'no-useless-rename': [
        2,
        {
            'ignoreDestructuring': false,
            'ignoreImport': false,
            'ignoreExport': false
        }
    ],
    // Require let or const instead of var
    'no-var': 'error',
    // Require method and property shorthand syntax for object literals
    'object-shorthand': [
        'error',
        'always',
        {
            avoidQuotes: true,
            ignoreConstructors: true
        }
    ],
    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: false,
            allowUnboundThis: true
        }
    ],
    // Suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
        'error',
        {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false
        }
    ],
    // Suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // Suggest using the rest parameters instead of arguments
    'prefer-rest-params': 'error',
    // Suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',
    // Suggest using template literals instead of strings concatenation
    'prefer-template': 'error',
    // Disallow generator functions that do not have yield
    'require-yield': 'error',
    'rest-spread-spacing': [
        'error',
        'never'
    ],
    'sort-imports': [
        'error',
        {
            'ignoreCase': false,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': [
                'none',
                'all',
                'multiple',
                'single'
            ]
        }
    ],
    // Enforce spacing around embedded expressions of template strings
    'template-curly-spacing': [
        'error',
        'never'
    ],
    // Enforce spacing around the * in yield* expressions
    'yield-star-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ]
};
