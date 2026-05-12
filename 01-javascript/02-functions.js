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
