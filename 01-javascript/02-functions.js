// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Functions

// 1. Basic function
function greet() {
  return "Hello, there!";
}

console.log(greet); // [Function: greet]
console.log(typeof greet); // function
console.log(greet()); // Hello, there!

// 2. Function with parameters
function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser); // [Function: greetUser]
console.log(typeof greetUser); // function
console.log(greetUser("Jesús")); // Hello, Jesús!

// 3. Calculator example
function addTwoNumbers(a, b) {
  return a + b;
}

function subtractTwoNumbers(a, b) {
  return a - b;
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}

const a = 16;
const b = 26;

console.log(`${a} + ${b} = ${addTwoNumbers(a, b)}`); // 16 + 26 = 42
console.log(`${a} - ${b} = ${subtractTwoNumbers(a, b)}`); // 16 - 26 = -10
console.log(`${a} * ${b} = ${multiplyTwoNumbers(a, b)}`); // 16 * 26 = 416

// 4. Ask for user's name
function askForUserName() {
  let name = prompt("Hello!👋🏻\nWhat's your name?");
  alert("Hello, " + name + "! 🫱🏻‍🫲🏻");
}

askForUserName();

// 5. confirm() example
let yourAnswer = confirm(
  "Are you enjoying and learning a lot in this Bootcamp?",
);

// Using a ternary operator to handle the user's response
!yourAnswer
  ? console.log("No, not as much as I expected... 👀")
  : console.log("Yes, I am learning and enjoying it! 🎉");

// 6. Arrow function example
// Arrow functions provide a shorter syntax for defining functions.
// This version uses an explicit return inside curly braces.
const greetArrow = (name) => {
  return `Hello, ${name}!`;
};

console.log(greetArrow); // [Function: greetArrow]
console.log(typeof greetArrow); // function
console.log(greetArrow("Jesús")); // Hello, Jesús!

// 7. Arrow function with implicit return
// When the function body is a single expression,
// curly braces and 'return' can be omitted.
const greetArrowShort = (name) => `Hello, ${name}!`;

console.log(greetArrowShort); // [Function: greetArrowShort ]
console.log(typeof greetArrowShort); // function
console.log(greetArrowShort("Jesús")); // Hello, Jesús!

// 8. Arrow function with array methods
// Arrow functions are often used as callbacks,
// e.g., with map() to transform arrays.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n) => n * 2);

console.log({ numbers }); // { numbers: [ 1, 2, 3, 4, 5 ] }
console.log({ doubled }); // { doubled: [ 2, 4, 6, 8, 10 ] }
