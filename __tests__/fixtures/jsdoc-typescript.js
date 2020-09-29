/**
 * Description
 *
 * @param {number} a Number
 * @param {number} b Number
 * @returns {number} Sum of numbers
 */
function sum(a, b) {
  return a + b;
}

/**
 * @typedef {object} SpecialType1 Creates a new type named 'SpecialType'
 * @property {string} prop1 A string property of SpecialType
 * @property {number} prop2 A number property of SpecialType
 * @property {number} [number=666] prop3 An optional number property of SpecialType
 */

/** @type {SpecialType1} */
const specialTypeObject1 = { prop1: "foo", prop2: 123 };

/**
 * @returns {{ a: string, b: number }} Returned value
 */
function ab() {
  return { a: "a", b: 12 };
}

/**
 * @returns {PromiseLike<string>} Promised value.
 */
function ps() {
  return Promise.resolve("test");
}

/** @type {Map<string, () => Promise<string>>} */
const pendingIdleTasks = new Map();

/**
 * @type {string}
 */
const string = "Hello world";

/**
 * @type {(string | boolean)}
 */
const sb1 = true;

/**
 * @type {string | boolean}
 */
const sb2 = "hello";

/** @type {number[]} */
const ns = [1, 2, 3];
/** @type {Array.<number>} */
const nds = [1, 2, 3];
/** @type {Array<number>} */
const nas = [1, 2, 3];

/** @type {{ a: string, b: number }} */
const var9 = { a: "str", b: 1 };

/**
 * A map-like object that maps arbitrary `string` properties to `number`s.
 *
 * @type {Object.<string, number>}
 */
const stringToNumber = { test: 123 };

/** @type {Object.<number, object>} */
const arrayLike = [];

arrayLike[1] = { foo: "bar" };

/** @type {function(string, boolean): number} Closure syntax */
const sbn = (one, two) => (two ? 1 : Number.parseInt(one, 10));
/** @type {(s: string, b: boolean) => number} TypeScript syntax */
const sbn2 = (one, two) => (two ? 1 : Number.parseInt(one, 10));
/** @type {(s: string, b?: boolean) => number} TypeScript syntax */
const sbn3 = (one, two) => (two ? 1 : Number.parseInt(one, 10));

/** @type {Function} */
const fn7 = () => "string";

/**
 * @type {*} - can be 'any' type
 */
const star = {};
/**
 * @type {?} - unknown type (same as 'any')
 */
const question = null;

/**
 * @type {number | string}
 */
const numberOrString = Math.random() < 0.5 ? "hello" : 100;
const typeAssertedNumber = /** @type {number} */ (numberOrString);

/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};

/**
 * @param {string} p1 A string param.
 * @param {string} [p2] p2 An optional param (Closure syntax)
 * @param {string} [p3] Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] An optional param with a default value
 * @returns {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4 = "test") {
  return p1 + p2 + p3 + p4;
}

class MyClass {
  /**
   * @param {string} data String
   */
  constructor(data) {
    // property types can be inferred
    this.name = "foo";

    // or set explicitly
    /** @type {string | null} */
    this.title = null;

    // or simply annotated, if they're set elsewhere
    /** @type {number} */
    this.size = 0;

    this.initialize(data); // Should error, initializer expects a string
  }

  /**
   * @param {string} value String
   */
  initialize = function (value) {
    this.size = value.length;
  };
}

/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}

export default {
  sum,
  specialTypeObject1,
  ab,
  ps,
  pendingIdleTasks,
  string,
  sb1,
  sb2,
  ns,
  nds,
  nas,
  var9,
  stringToNumber,
  arrayLike,
  sbn,
  sbn2,
  fn7,
  star,
  question,
  typeAssertedNumber,
  sbn3,
  JSDocState,
  stringsStringStrings,
  MyClass,
  SortableSet,
};
