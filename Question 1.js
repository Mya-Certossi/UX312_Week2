// distanceToMiles.js
function convertKilometersToMiles(kilometers) {
  const milesConversionFactor = 0.621371;
  const miles = kilometers * milesConversionFactor;
  return miles;
}

// Example usage:
const distanceInKilometers = 10;
const distanceInMiles = convertKilometersToMiles(distanceInKilometers);
console.log(`${distanceInKilometers} kilometers is equal to ${distanceInMiles} miles.`);