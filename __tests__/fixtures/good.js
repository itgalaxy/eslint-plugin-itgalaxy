import { CLIEngine, linter } from "eslint";
import remarkConfig from "remark-preset-lint-itgalaxy";

const constVariable = 1;
const arrayVariable = [1, 2];
const booleanVariable = true;
const stringVariable = "Capt. Janeway";
const errorMessage =
  "This is a super long error that was thrown because of Batman. " +
  "When you stop to think about how Batman had anything to do with this, you would get nowhere fast.";
const quotedFoo = "'this' is \"quoted\"";
const quotedBar = `'this' is "quoted"`;

arrayVariable.push(stringVariable);

function getKey(prefix = "", key = null) {
  let realKey = key || null;

  if (!realKey) {
    realKey = Object.prototype.hasOwnProperty.call(
      { key: "key", value: "value" },
      "key"
    )
      ? "very very very very very very very very very long key"
      : 1;
  }

  return `${prefix}_${key}_value_${realKey}_${new Date(...[2016, 10, 10])}`;
}

/*
function deferFn(fn) {
    return fn();
}
*/

const objectVariable = {
  addValue(value) {
    return this.value + value;
  },

  "data-blah": 5,

  getAge() {
    return this.value;
  },

  getId() {
    return this.id;
  },

  getSome() {
    return "some";
  },

  id: 5,

  name: "San Francisco",

  [getKey("enabled")]: true,

  setAge(value) {
    this.value = value;
  },

  value: 1

  // Need path in eslint, see https://github.com/eslint/eslint/issues/6196
  // defer: deferFn((config) => (config.exist ? 'exist' : 'non exist'))
};

objectVariable.log = function(items, options = {}) {
  const concatenateAll = (...args) => args.join("");

  return concatenateAll(this.addValue(1).addValue(items), options);
};

arrayVariable.push(constVariable);

function handler() {
  return "test";
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

handler();
handler();
handler();

{
  let foobaz = 2 * 10 + objectVariable.value;
  const bar = 1;

  foobaz = bar + 1;

  if (foobaz > bar) {
    foobaz += bar;
  }
}

handler();

let letVariable = 1;

if (booleanVariable) {
  letVariable += 1;
}

if (!booleanVariable) {
  letVariable -= 1;
}

if (!booleanVariable) {
  letVariable -= 1;
}

handler();

switch (letVariable) {
  case 1:
    letVariable = 10;
    break;
  case 2:
    letVariable = 20;
    break;
  default:
    letVariable = 0;
    break;
}

switch (letVariable) {
  case 1:
    letVariable = 10;
    break;
  case 2:
    letVariable = 20;
    break;
  default:
    letVariable = 0;
    break;
}

switch (letVariable) {
  case 10:
  case 20:
  case 30:
    letVariable = 50;
    break;
  default:
    letVariable = 0;
    break;
}

switch (letVariable) {
  case 1:
    handler(1);
    break;
  case 2:
    handler(2);
    break;
  default:
    handler(0);
}

arrayVariable.push(letVariable);

Object.prototype.hasOwnProperty.call(objectVariable, "id");
has.call(objectVariable, "id");

const itemsCopy = [...arrayVariable];

function fooFunc(func, interval) {
  if (interval > 100) {
    throw new Error("Invalid interval");
  }

  return func;
}

function fooFuncExtra(func, interval) {
  if (interval > 500) {
    handler();

    throw new Error("Invalid interval");
  }

  return func;
}

fooFuncExtra();

fooFunc(() => {
  itemsCopy.push("random string");
}, 1000);

[1, 2, 3].map(value => {
  const result = value + 1;

  return value * result;
});

const flat = {};

[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
  const flatten = memo.concat(item);

  flat[index] = flatten;

  return flatten;
});

itemsCopy.filter(msg => {
  const { subject, author } = msg;

  if (subject === "Mockingbird") {
    return author === "Harper Lee";
  }

  return false;
});

function getFullName(user) {
  const { firstName, lastName } = user;

  return `${firstName} ${lastName}`;
}

function processInput(input = [0, 0, 0, 0]) {
  const [left, right, top, bottom] = input;

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

function getFullNameWithDash({ firstName, lastName }) {
  return `${firstName}-${lastName}`;
}

const username = getFullName({
  firstName: "foo",
  lastName: "bar"
});
const usernameWithDash = getFullNameWithDash({
  firstName: "foo",
  lastName: "bar"
});
const [left, right, top, bottom] = arrayVariable;

render(username, [left, right, top, bottom]);
render(usernameWithDash, [left, right, top, bottom]);

if (booleanVariable) {
  throw new Error(`${errorMessage}: ${quotedFoo} - ${quotedBar}`);
}

(function() {
  objectVariable.log("Welcome to the Internet. Please follow me.");
})();

let test = null;

if (booleanVariable) {
  test = () => {
    objectVariable.log("Yup.");
  };

  test();
}

[1, 2, 3].map((number, index) => ({
  index: number,
  number: index
}));

[1, 2, 3].map(
  number =>
    `As time went by, the string containing the ${number} became much ` +
    "longer. So we needed to break it over multiple lines."
);

const itemHeightFoo = item => {
  const smallSize = 100;
  const largeSize = 200;

  return item.height > 256 ? smallSize : largeSize;
};

const itemHeightBar = item => {
  const { height, largeSize, smallSize } = item;

  return height > 256 ? largeSize : smallSize;
};

arrayVariable.push([itemHeightFoo, itemHeightBar]);

remarkConfig.prototype.eslint = 1;

CLIEngine.prototype.foo = () => "foo";

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
  }).valueLongLognLongLongValue.valueLongLognLongLongValue
    .valueLongLognLongLongValue.valueLongLognLongLongValue;

  render({
    anotherValue,
    realValue
  });
}

handler();

try {
  render();
} catch (error) {
  render({
    error
  });
}

handler();

function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => multiplier * element);
}

multiply(2, 1, 2, 3);

const numbers = [0, 1, 2];

multiply(1, ...numbers);

function fetch() {
  return new Promise(resolve => resolve("Some value"));
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

const { type, ...coords } = multiply(2, 1, 2, 3);

fetchJson(coords);

fetchJson("http://some-domain.com");

function trailingCommasInFUnctionSyntax(param1, param2) {
  return `${param1} ${param2}`;
}

trailingCommasInFUnctionSyntax("foo", "bar");

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

// eslint-disable-next-line no-console
console.log(PolygonWithBody.area());

const squareNotNamed = new PolygonNotNamed(10, 10);
const squareNamed = new PolygonNamed(10, 10);
const squareWithBody = new PolygonWithBody(10, 10);

console.log(squareNotNamed, squareNamed, squareWithBody); // eslint-disable-line no-console

function FooNewTarget() {
  if (!new.target) {
    throw new Error("Foo() must be called with new");
  }

  // All good
}

console.log(new FooNewTarget()); // eslint-disable-line no-console

function doSomething() {
  return new Promise(resolve => {
    let result = 0;

    result = result * 2 + 10;

    return resolve(result);
  });
}

async function fooAsync() {
  const result = await doSomething();

  Object.keys(result).forEach(item => {
    item.sum += 1;
  });

  return result;
}

fooAsync();

function tag(strings) {
  return strings.raw[0];
}

tag`string text line 1 \n string text line 2`;

function foo() {
  const before = tag("test");

  if (before === "before") {
    return "before";
  }

  fooAsync();

  const aqw = 0;
  const bwe = 0;

  return tag(before + aqw + bwe);
}

foo();

let n = 0;
let i = 0;
let value = 10;

while (n < 3) {
  n++;
  value += n;
}

while (i < 10) {
  i++;
  value += i;
}

handler(value);

function handleHands() {
  const hands = [];
  const handsValues = [];
  let lastIndex = 0;

  for (let first = 0; first < hands.length; first++) {
    for (let j = 0; j < hands[first].length; j++) {
      for (let k = 0; k < hands[first][j].length; k++) {
        handsValues.push(hands[first][j][k]);
      }
    }
  }

  for (let last = 0; last > hands.length; last--) {
    lastIndex = last;
  }

  return {
    handsValues,
    lastIndex
  };
}

handleHands();

for (i = 0; i < 10; i++) {
  if (i < 5) {
    // eslint-disable-next-line no-continue
    continue;
  }

  break;
}

handleHands();

module.exports = { foo };
module.exports.test = { foo };

handleHands();

let xBar = 1;
const yBar = 1;
const zBar = 1;
const fooA = yBar || zBar;
const fooB = yBar && zBar;
const fooC = yBar > zBar;
const fooD = yBar < zBar;

xBar += yBar;

handleHands(xBar, fooA, fooB, fooC, fooD);

export default linter;
export { foo, handler };
export {
  age as ageExport,
  arrayVariable as arrayVariableExport,
  fooAsync,
  fooFuncExtra
};
