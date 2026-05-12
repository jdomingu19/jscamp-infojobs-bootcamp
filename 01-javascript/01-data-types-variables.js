// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Data Types & Variables

// String examples:

// Text values enclosed in quotes
const myString1 = "Hello, JavaScript!";

const myString2 = "@jdomingu19";

const myString3 = `Username: ${myString2}`;

// Logging string variables to the console
console.log({ myString1 }); // { myString1: 'Hello, JavaScript!' }
console.log({ myString2 }); // { myString2: '@jdomingu19' }
console.log({ myString3 }); // { myString3: 'Username: @jdomingu19' }

// Checking the type of string variables
console.log(typeof myString1); // string
console.log(typeof myString2); // string
console.log(typeof myString3); // string

// Number examples:

// integer, floating-point, and BigInt
const myNumber1 = 42;

const myNumber2 = 26.27;

const myNumber3 = 9007199254740992n;

// Logging number variables to the console
console.log({ myNumber1 }); // { myNumber1: 42 }
console.log({ myNumber2 }); // { myNumber2: 26.27 }
console.log({ myNumber3 }); // { myNumber3: 9007199254740992n }

// Checking the type of number variables
console.log(typeof myNumber1); // number
console.log(typeof myNumber2); // number
console.log(typeof myNumber3); // bigint

// Safe integer limits in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Checking the type of safe integer constants
console.log(typeof Number.MAX_SAFE_INTEGER); // number
console.log(typeof Number.MIN_SAFE_INTEGER); // number

// Demonstrating precision differences between Number and BigInt
console.log(500000000000000000999 + 1); // 500000000000000000000
console.log(500000000000000000999n + 1n); // 500000000000000001000n

// Array examples:

// Ordered collections of values
const myArray1 = ["Link", "Zelda", "Rivali"];

const myArray2 = [26, 27, 42];

const myArray3 = [true, 42, "Link"];

// Logging array variables to the console
console.log({ myArray1 }); // { myArray1: [ 'Link', 'Zelda', 'Rivali' ] }
console.log({ myArray2 }); // { myArray2: [ 26, 27, 42 ] }
console.log({ myArray3 }); // { myArray3: [ true, 42, 'Link' ] }

// Checking the type of arrays (arrays are objects in JavaScript)
console.log(typeof myArray1); // object
console.log(typeof myArray2); // object
console.log(typeof myArray3); // object

// Object examples:

// Collections of key-value pairs
const myObject1 = { name: "Jesús", username: "@jdomingu19" };

const myObject2 = { id: 42, product: "Apple" };

const myObject3 = { 0: { name: "Link" }, 1: { name: "Zelda" } };

// Logging object variables to the console
console.log({ myObject1 }); // { myObject1: { name: 'Jesús', username: '@jdomingu19' } }
console.log({ myObject2 }); // { myObject2: { id: 42, product: 'Apple' } }
console.log({ myObject3 }); // { myObject3: { '0': { name: 'Link' }, '1': { name: 'Zelda' } } }

// Checking the type of objects
console.log(typeof myObject1); // object
console.log(typeof myObject2); // object
console.log(typeof myObject3); // object

// Undefined example:

// Variable declared but not assigned
let myUndefined;

// Logging undefined variable
console.log({ myUndefined }); // { myUndefined: undefined }

// Checking the type of undefined
console.log(typeof myUndefined); // undefined

// Null example:

// Intentional absence of value
let myNull = null;

// Logging null variable
console.log({ myNull }); // { myNull: null }

// Checking the type of null (historical quirk: returns 'object')
console.log(typeof myNull); // object

// Variable examples with let:

// Values can be reassigned
let username = "Jesús";
let age = 22;

// Logging initial values using template literals
console.log(`The name's ${username}!`); // The name's Jesús!
console.log(`He's ${age} years old`); // He's 22 years old

// Reassigning values to let variables
username = "@jdomingu19";
age = 23;

// Logging updated values after reassignment
console.log(`The name's ${username}!`); // The name's @jdomingu19!
console.log(`He's ${age} years old`); // He's 23 years old

// Constant example with const:

// Values cannot be reassigned
const APP_NAME = "DevJobs";

// TypeError: Assignment to constant variable.
// APP_NAME = "InfoJobs";

// Logging constant value and its type
console.log({ APP_NAME }); // { APP_NAME: 'DevJobs' }
console.log(typeof APP_NAME); // string
