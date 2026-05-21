// JSCamp InfoJobs Bootcamp @jdomingu19
// Full-Stack Web Bootcamp @midudev
// Module 3: JavaScript: Fetch API

// 1. Fetch a web page and log its raw text content
fetch("https://google.es")
  // Convert the response into plain text
  .then((response) => {
    return response.text();
  })
  // Log the text content in the console
  .then((text) => {
    console.log(text);
  })
  // Handle any network or parsing errors
  .catch((error) => {
    console.log(error);
  });

// 2. Fetch a Pokemon resource and log its JSON data
fetch("https://pokeapi.co/api/v2/pokemon/105")
  // Convert the response into JSON format
  .then((response) => {
    return response.json();
  })
  // Log the parsed JSON object in the console
  .then((pokemonJSON) => {
    console.log(pokemonJSON);
  })
  // Handle any network or parsing errors
  .catch((error) => {
    console.log(error);
  });
