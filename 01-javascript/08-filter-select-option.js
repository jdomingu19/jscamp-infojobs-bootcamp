// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Filter Select Option

// 1. Select the dropdown filter and the paragraph to display the chosen value
const filter = document.querySelector("#filter-technology");
const paragraph = document.querySelector("#filter-value");
const buttons = document.querySelectorAll(".button-apply-job");

// 2. Add a change event listener to update the paragraph and filter visible buttons
filter.addEventListener("change", () => {
  // Update the paragraph with the selected technology
  paragraph.innerHTML = filter.value;

  // Show or hide buttons depending on the selected filter value
  buttons.forEach((button) => {
    if (button.id === filter.value || filter.value === "") {
      button.style.display = "inline";
    } else {
      button.style.display = "none";
    }
  });
});
