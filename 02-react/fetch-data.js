// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: JavaScript Modules

// Selecting the job listings section container
const jobsListingSection = document.querySelector(".jobs-listings");

// Select the loading element to show or remove status messages
const loading = document.querySelector("#jobs-loading");

// Fetch a local JSON file and log its job listings
fetch("./data.json")
  // Convert the response into JSON format
  .then((response) => {
    return response.json();
  })
  // Process the jobs data and render job cards
  .then((jobsJSON) => {
    // Remove the loading indicator once data is available
    if (loading) loading.remove();

    // Show a fallback message if no jobs are returned
    if (jobsJSON.length === 0) {
      jobsListingSection.innerHTML =
        "<p>There are no jobs available at this time. Come back soon.</p>";
      return;
    }

    // Iterate over each job object and create a job card
    jobsJSON.forEach((job) => {
      const article = document.createElement("article");

      // Assign CSS class and dataset attributes for filtering
      article.className = "job-listing-card";
      article.dataset.technology = job.data.technology;
      article.dataset.location = job.data.location;
      article.dataset.level = job.data.level;

      // Inject job details and apply button into the card
      article.innerHTML = `<div>
          <h3>${job.title}</h3>
          <small>${job.company} | ${job.location}</small>
          <p>
            ${job.description}
          </p>
        </div>
        <button class="button-apply-job">Apply</button>`;

      // Append the job card to the listings section
      jobsListingSection.appendChild(article);
    });
  })
  // Handle any network or parsing errors gracefully
  .catch((error) => {
    if (loading) loading.textContent = "Jobs could not be loaded.";
    console.log(error);
  });
