// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Callback Example

// 0. Initial log to indicate that the script has started loading
console.log("Start: Loading the Script...");

// 1. Selecting DOM elements by their unique IDs
const myButton = document.querySelector("#button-important");
const myParagraph = document.querySelector("#my-paragraph");

// 2. Logging the selected elements to verify they were found
console.log("Button found:", myButton);
console.log("Paragraph found:", myParagraph);

// 3. Adding a callback function to the button's click event
// When the button is clicked, a message is logged and displayed in the paragraph
if (myButton !== null) {
  myButton.addEventListener("click", function () {
    const message = "You clicked the button!";
    console.log(message);
    myParagraph.innerHTML = message;
  });
}

// 4. Final log to indicate that the script has finished loading
// and is now waiting for user interactions
console.log("End: Script loaded, waiting for events:");
