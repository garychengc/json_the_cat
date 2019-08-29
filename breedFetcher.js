const request = require("request");
const userInput = process.argv.slice(2).join("");

request("https://api.thecatapi.com/v1/breeds/", (error, response, body) => {
  if (error) {
    return console.log(error); 
  }
  
  const data = JSON.parse(body);

  for (let breed of data) {
    if (breed.name === userInput) {
      console.log(breed.description);
      break;
    }
    
    if (breed.name === data[data.length - 1].name) {
      console.log("Breed name is not found.");
    }
  }
});
