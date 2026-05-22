// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: JavaScript Modules

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
