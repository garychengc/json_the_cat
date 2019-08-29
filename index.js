const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv.slice(2).join('_');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch detials: ", error);
  } else {
    console.log(desc);
  }
});
