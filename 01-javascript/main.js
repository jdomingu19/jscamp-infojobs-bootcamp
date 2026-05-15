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

// 4. Selecting all job application buttons by their shared class name
const buttonsApplyJob = document.querySelectorAll(".button-apply-job");

// 5. Iterating over each button and adding a click event listener
// When clicked, the button text changes,
// a CSS class is added, and the button is disabled
buttonsApplyJob.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Applied!";
    button.classList.add("is-applied");
    button.disabled = true;
  });
});
