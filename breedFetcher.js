const fetchBreedDescription = function(breedName, callback) {
  const request = require("request");
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body)[0];
    if (data === undefined) {
      error = "Breed name is not found.";
      callback(error, null);
    } else {
      callback(error, data.description.trim());
    }
  });
};
module.exports = { fetchBreedDescription };
