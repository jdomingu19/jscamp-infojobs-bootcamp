// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: DOM Manipulation

// 0. Selecting a single button element by its unique ID
const myButton = document.querySelector("#button-important");

// 1. Logging various DOM properties of the selected element
console.log("Button found:", myButton);
console.log("textContent:", myButton.textContent);
console.log("getBoundingClientRect():", myButton.getBoundingClientRect());
console.log("innerHTML:", myButton.innerHTML);
console.log("id:", myButton.id);
console.log("className:", myButton.className);
console.log("disabled:", myButton.disabled);
console.log("textContent:", myButton.textContent);

// 2. Adding an event listener to toggle button state on click
// Demonstrates dynamic changes to text and disabled property
if (myButton !== null) {
  let isApplied = false;

  myButton.addEventListener("click", () => {
    if (isApplied) {
      myButton.textContent = "Click here!";
      isApplied = false;
    } else {
      myButton.textContent = "Text changed!";
      myButton.disabled = true;
      isApplied = true;
    }
  });
}

// 3. Selecting multiple buttons by their shared class name
const myButtons = document.querySelectorAll(".button-apply-job");

// 4. Logging details about the NodeList collection
console.log("Buttons found:", myButtons);
console.log("length:", myButtons.length);
console.log("typeof:", typeof myButtons);

// 5. Logging individual elements by index
console.log("myButtons[0]:", myButtons[0]);
console.log("myButtons[1]:", myButtons[1]);
console.log("myButtons[2]:", myButtons[2]);

// 6. Iterating over the NodeList with forEach to log indexed elements
myButtons.forEach((button, index) => {
  console.log(`myButtons[${index}]`, button);
});

// 7. Adding event listeners to each button to update text and style on click
myButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Click on:", button.textContent);

    button.textContent = "Job applied!";
    button.style.backgroundColor = "#22c55e";
    button.disabled = true;
  });
});

// 8. Adding a specific event listener to the first button only
const firstButton = document.querySelector(".button-apply-job");

firstButton.addEventListener("click", () => {
  console.log("You clicked on the first button!");
});

// 9. Adding event listeners to all buttons again for a generic message
const allButtons = document.querySelectorAll(".button-apply-job");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("You clicked on a 'button-apply-job'!");
  });
});
