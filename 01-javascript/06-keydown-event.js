// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Keydown Event

// Add a keydown event listener to log pressed keys and modifier states
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
  console.log("Is the shift key pressed?:", event.shiftKey);
  console.log("Is the alt key pressed?:", event.altKey);
  console.log("Is the ctrl key pressed?:", event.ctrlKey);
  console.log("Is the meta key pressed?:", event.metaKey);
});
