import {
    CLIEngine,
    linter
} from 'eslint';
import remarkConfig from 'remark-preset-lint-itgalaxy';

const constVariable = 1;
const arrayVariable = [1, 2];
const booleanVariable = true;
const stringVariable = 'Capt. Janeway';
const errorMessage = 'This is a super long error that was thrown because of Batman. '
    + 'When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
const quotedFoo = '\'this\' is "quoted"';
const quotedBar = `'this' is "quoted"`;

arrayVariable.push(stringVariable);

function getKey(prefix = '', key = null) {
    let realKey = key ? key : null;

    if (!realKey) {
        realKey = Object.prototype.hasOwnProperty.call({
            key: 'key',
            value: 'value'
        }, 'key')
            ? 'very very very very very very very very very long key'
            : 1;
    }

    return `${prefix}_${key}_value_${realKey}_${new Date(...[2016, 10, 10])}`;
}

const objectVariable = {
    addValue(value) {
        return this.value + value;
    },
    'data-blah': 5,
    getAge() {
        return this.value;
    },
    id: 5,
    name: 'San Francisco',

    [getKey('enabled')]: true,

    setAge(value) {
        this.value = value;
    },

    value: 1
};

objectVariable.log = function (items, options = {}) {
    const concatenateAll = (...args) => args.join('');

    return concatenateAll(this.addValue(1).addValue(items), options);
};

arrayVariable.push(constVariable);

function handler() {
    return 'test';
}

const obj = {
    // __proto__
    __proto__: Object.getPrototypeOf({}),
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
        // Super calls
        return `d ${super.toString()}`;
    },
    // Computed (dynamic) property names
    [`prop_${(() => 42)()}`]: 42
};

console.log(obj); // eslint-disable-line no-console

const has = Object.prototype.hasOwnProperty;

{
    let foo = 1;
    const bar = 1;

    foo = bar + 1;

    if (foo > bar) {
        foo += bar;
    }
}

let letVariable = 1;

if (booleanVariable) {
    letVariable += 1;
}

arrayVariable.push(letVariable);

Object.prototype.hasOwnProperty.call(objectVariable, 'id');
has.call(objectVariable, 'id');

const itemsCopy = [...arrayVariable];

function fooFunc(func, interval) {
    if (interval > 100) {
        throw new Error('Invalid interval');
    }

    return func;
}

fooFunc(() => {
    itemsCopy.push('random string');
}, 1000);

[1, 2, 3].map((value) => {
    const result = value + 1;

    return value * result;
});

const flat = {};

[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item);

    flat[index] = flatten;

    return flatten;
});

itemsCopy.filter((msg) => {
    const {
        subject,
        author
    } = msg;

    if (subject === 'Mockingbird') {
        return author === 'Harper Lee';
    }

    return false;
});

function getFullName(user) {
    const {
        firstName,
        lastName
    } = user;

    return `${firstName} ${lastName}`;
}

function processInput(input = [0, 0, 0, 0]) {
    const left = input[0];
    const right = input[1];
    const top = input[2];
    const bottom = input[3];

    // then a miracle occurs
    return {
        bottom,
        left,
        right,
        top
    };
}

function render(data = {}, postition = [0, 0, 0, 0]) {
    return processInput(data, postition);
}

function getFullNameWithDash({
    firstName,
    lastName
}) {
    return `${firstName}-${lastName}`;
}

const username = getFullName({
    firstName: 'foo',
    lastName: 'bar'
});

const usernameWithDash = getFullNameWithDash({
    firstName: 'foo',
    lastName: 'bar'
});

const [left, right, top, bottom] = arrayVariable;

render(username, [left, right, top, bottom]);
render(usernameWithDash, [left, right, top, bottom]);

if (booleanVariable) {
    throw new Error(`${errorMessage}: ${quotedFoo} - ${quotedBar}`);
}

(function () {
    objectVariable.log('Welcome to the Internet. Please follow me.');
}());

let test = null;

if (booleanVariable) {
    test = () => {
        objectVariable.log('Yup.');
    };

    test();
}

[1, 2, 3].map((number, index) => ({
    index: number,
    number: index
}));

[1, 2, 3].map(
    (number) => `As time went by, the string containing the ${number} became much `
        + 'longer. So we needed to break it over multiple lines.'
);

const itemHeightFoo = (item) => {
    const smallSize = 100;
    const largeSize = 200;

    return item.height > 256 ? smallSize : largeSize;
};

const itemHeightBar = (item) => {
    const {
        height,
        largeSize,
        smallSize
    } = item;

    return height > 256 ? largeSize : smallSize;
};

arrayVariable.push([itemHeightFoo, itemHeightBar]);

remarkConfig.prototype.eslint = 1;

CLIEngine.prototype.foo = () => 'foo';

const sum = [1, 2, 3].reduce((total, num) => total + num, 0);

render(sum);

// Comment
const age = 21; // Comment
const hasAge = Boolean(age);

if (hasAge) {
    const anotherValue = {
        foo: 1
    };
    const realValue = render({
        age
    })
        .valueLongLognLongLongValue
        .valueLongLognLongLongValue
        .valueLongLognLongLongValue
        .valueLongLognLongLongValue;

    render({
        anotherValue,
        realValue
    });
}

try {
    render();
} catch (error) {
    render({
        error
    });
}

function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
}

multiply(2, 1, 2, 3);

const numbers = [0, 1, 2];

multiply(1, ...numbers);

function fetch() {
    return new Promise((resolve) => resolve('Some value'));
}

async function fetchJson(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();

        return JSON.parse(text);
    } catch (error) {
        throw error;
    }
}

fetchJson('http://some-domain.com');

function trailingCommasInFUnctionSyntax(
    param1,
    param2,
) {
    return `${param1} ${param2}`;
}

trailingCommasInFUnctionSyntax('foo', 'bar');

// const a **= 4; Uncomment after support in eslint

const PolygonNotNamed = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

const PolygonNamed = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

class PolygonWithBody {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const squareNotNamed = new PolygonNotNamed(10, 10);
const squareNamed = new PolygonNamed(10, 10);
const squareWithBody = new PolygonWithBody(10, 10);

console.log(squareNotNamed, squareNamed, squareWithBody); // eslint-disable-line no-console

function FooNewTarget() {
    if (!new.target) {
        throw new Error('Foo() must be called with new');
    }

    // All good
}

console.log(new FooNewTarget()); // eslint-disable-line no-console

const foo = async () => 1;

foo();

export default linter;
