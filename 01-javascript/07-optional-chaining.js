// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Optional Chaining

// 1. Select a button element by its unique ID
const button = document.querySelector("#some-button");

// 2. Safely access properties of the button using optional chaining
console.log(button?.textContent);
console.log(button?.id);
console.log(button?.disabled);

// 3. Safely call methods on the button if it exists
button?.classList.add("active");
button?.setAttribute("data-applied", "true");

// 4. Safely navigate nested properties to get container child width
const container = document.querySelector("#container");
const width = container?.firstChild?.getBoundingClientRect()?.width;
console.log(width);
