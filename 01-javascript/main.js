// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: External JavaScript Code

// 0. Basic console output to verify that the script is running
// console.log("Hello, JavaScript!"); // Hello, JavaScript!

// 1. Selecting the important button element by its unique ID
// const importantButton = document.querySelector("#button-important");

// 2. Logging the selected element and its type
// console.log(importantButton); // <button class="button-apply-job" id="button-important">Apply</button>
// console.log(typeof importantButton); // object

// 3. Adding a click event listener to the button
// When the user clicks, a confirmation message is printed in the console
// importantButton.addEventListener("click", () => {
//   console.log("Thanks for your interest. We will contact you soon!");
// });

// 4. Selecting all job application buttons by their shared class name
// const buttonsApplyJob = document.querySelectorAll(".button-apply-job");

// 5. Iterating over each button and adding a click event listener
// When clicked, the button text changes,
// a CSS class is added, and the button is disabled
// buttonsApplyJob.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.textContent = "Applied!";
//     button.classList.add("is-applied");
//     button.disabled = true;
//   });
// });

// Selecting the job listings section container
const jobsListingSection = document.querySelector(".jobs-listings");

// Adding a single event listener to the container
// This demonstrates event delegation applied to job listing buttons
jobsListingSection.addEventListener("click", (event) => {
  // Storing the element that triggered the event
  const element = event.target;

  // Checking if the clicked element is a job application button
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Applied!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

// Select the location dropdown and the message span to show the chosen value
const locationFilter = document.querySelector("#filter-location");
const message = document.querySelector("#filter-selected-value");

// Add a change event listener to update the message when the user selects a location
locationFilter.addEventListener("change", () => {
  // Store the selected value from the dropdown
  const selectedValue = locationFilter.value;

  // Display the selected location or clear the message if no option is chosen
  if (selectedValue) {
    message.textContent = `You have selected: ${selectedValue}`;
  } else {
    message.textContent = "";
  }
});

// Select the job search input field
const searchJobInput = document.querySelector("#jobs-search-input");

// Add an input event listener to log what the user types
searchJobInput.addEventListener("input", () => {
  console.log("Writing:", searchJobInput.value);
});

// Add a blur event listener to detect when the input loses focus
searchJobInput.addEventListener("blur", () => {
  console.log("Input has lost focus");
});

// Select the job search form element
const searchJobForm = document.querySelector("#jobs-search-form");

// Add a submit event listener to prevent default and log submission
searchJobForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("You have submitted");
});

// Add a keydown event listener to log pressed keys and modifier states
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
  console.log("Is the shift key pressed?:", event.shiftKey);
  console.log("Is the alt key pressed?:", event.altKey);
  console.log("Is the ctrl key pressed?:", event.ctrlKey);
  console.log("Is the meta key pressed?:", event.metaKey);
});
