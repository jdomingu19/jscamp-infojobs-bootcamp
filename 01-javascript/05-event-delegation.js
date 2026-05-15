// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Event Delegation

// 0. Selecting the container that holds all job application buttons
const container = document.querySelector("#jobs-buttons");

// 1. Adding a single event listener to the container
// Event delegation allows handling clicks on child elements
// without attaching listeners to each button individually
container.addEventListener("click", (event) => {
  // 2. Checking if the clicked element has the target class
  if (event.target.classList.contains("button-apply-job")) {
    const button = event.target;
    button.textContent = "Job applied!";
    button.style.backgroundColor = "#22c55e";
    button.disabled = true;
  }

  // 3. Logging the actual element that triggered the event
  console.log("target", event.target);

  // 4. Logging the element on which the listener is registered
  console.log("currentTarget", event.currentTarget);
});
