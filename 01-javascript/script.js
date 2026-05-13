// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: External JavaScript Code

// 0. Basic console output to verify that the script is running
console.log("Hello, JavaScript!"); // Hello, JavaScript!

// 1. Selecting the important button element by its unique ID
const importantButton = document.querySelector("#button-important");

// 2. Logging the selected element and its type
console.log(importantButton); // <button class="button-apply-job" id="button-important">Apply</button>
console.log(typeof importantButton); // object

// 3. Adding a click event listener to the button
// When the user clicks, a confirmation message is printed in the console
importantButton.addEventListener("click", () => {
  console.log("Thanks for your interest. We will contact you soon!");
});
