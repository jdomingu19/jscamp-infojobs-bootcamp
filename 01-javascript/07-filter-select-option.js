// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Optional Chaining

// 1. Select the dropdown filter and the paragraph to display the chosen value
const filter = document.querySelector("#filter-technology");
const paragraph = document.querySelector("#filter-value");

// 2. Add a change event listener to update the paragraph with the selected option
filter.addEventListener("change", () => {
  console.log("Selected technology:", filter.value);
  paragraph.innerHTML = filter.value;
});
