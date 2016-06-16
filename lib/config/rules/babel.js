module.exports = {
    // Handles async/await functions correctly
    'babel/generator-star-spacing': [
        'error',
        {
            'before': true,
            'after': false
        }
    ],
    // Ignores capitalized decorators (@Decorator)
    'babel/new-cap': [
        'error',
        {
            'newIsCap': true,
            'capIsNew': true,
            'capIsNewExceptions': []
        }
    ],
    // Handles destructuring arrays with flow type in function parameters
    'babel/array-bracket-spacing': [
        'error',
        'never',
        {
            'singleValue': false,
            'objectsInArrays': false,
            'arraysInArrays': false
        }
    ],
    // doesn't complain about export x from "mod"; or export * as x from "mod";
    'babel/object-curly-spacing': [
        'error',
        'never'
    ],
    // doesn't fail when using object spread (...obj)
    'babel/object-shorthand': [
        'error',
        'always'
    ],
    // Handles async functions correctly
    'babel/arrow-parens': [
        'error',
        'always'
    ],

    // guard against awaiting async functions inside of a loop
    'babel/no-await-in-loop': 'error',
    // Require a particular separator between properties in Flow object types.
    'babel/flow-object-type': [
        'error',
        'comma'
    ]
};
