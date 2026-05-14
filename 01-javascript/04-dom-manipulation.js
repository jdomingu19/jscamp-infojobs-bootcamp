// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: DOM Manipulation

// ?
const myButton = document.querySelector("#button-important");

// ?
console.log("Button found:", myButton);

// ?
console.log("textContent:", myButton.textContent);
console.log("getBoundingClientRect():", myButton.getBoundingClientRect());
console.log("innerHTML:", myButton.innerHTML);
console.log("id:", myButton.id);
console.log("className:", myButton.className);
console.log("disabled:", myButton.disabled);
console.log("textContent:", myButton.textContent);

// ?
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

// ?
const myButtons = document.querySelectorAll(".button-apply-job");

// ?
console.log("Buttons found:", myButtons);
console.log("length:", myButtons.length);
console.log("typeof:", typeof myButtons);

// ?
console.log("myButtons[0]:", myButtons[0]);
console.log("myButtons[1]:", myButtons[1]);
console.log("myButtons[2]:", myButtons[2]);

// ?
myButtons.forEach((button, index) => {
  console.log(`myButtons[${index}]`, button);
});

// ?
myButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Click on:", button.textContent);

    button.textContent = "Job Applied!";
    button.style.backgroundColor = "#22c55e";
    button.disabled = true;
  });
});

// ?
const firstButton = document.querySelector(".button-apply-job");
firstButton.addEventListener("click", () => {
  console.log("You clicked on the first button!");
});

const allButtons = document.querySelectorAll(".button-apply-job");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("You clicked on a 'button-apply-job'!");
  });
});
