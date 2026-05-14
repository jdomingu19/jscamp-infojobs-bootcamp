// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Callbacks

// ?
console.log("Start: Loading the Script...");

// ?
const myButton = document.querySelector("#button-important");
const myParagraph = document.querySelector("#my-paragraph");

// ?
console.log("Button found:", myButton);
console.log("Paragraph found:", myParagraph);

// ?
myButton.addEventListener("click", function () {
  const message = "You clicked the button!";
  console.log(message);
  myParagraph.innerHTML = message;
});

// ?
console.log("End: Script loaded, waiting for events:");
