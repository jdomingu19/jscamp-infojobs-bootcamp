// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: JavaScript Modules

// Select the location dropdown, the message span, and all job listing cards
const filterLocation = document.querySelector("#filter-location");
const filterSelectedValue = document.querySelector("#filter-selected-value");

// Add a change event listener to update the message and filter job cards
filterLocation.addEventListener("change", () => {
  const jobsCards = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterLocation.value;

  // Show selected location message or clear it if empty
  selectedValue
    ? (filterSelectedValue.textContent = `You have selected: ${selectedValue}`)
    : (filterSelectedValue.textContent = "");

  // Show or hide job cards based on matching data-location attribute
  jobsCards.forEach((job) => {
    // Retrieve the location value from the job card's data-location attribute
    const location = job.getAttribute("data-location");
    const isShown = selectedValue === "" || selectedValue === location;

    // Toggle the is-hidden class depending on whether the card should be visible
    job.classList.toggle("is-hidden", !isShown);
  });
});
