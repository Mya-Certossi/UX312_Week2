// cylinderVolumeCalculator.js
function calculateCylinderVolume(diameter, height) {
  const radius = diameter / 2;
  const volume = Math.PI * Math.pow(radius, 2) * height;
  return volume;
}

// Example usage:
const cylinderDiameter = 10;
const cylinderHeight = 5;
const cylinderVolume = calculateCylinderVolume(cylinderDiameter, cylinderHeight);
console.log(`The volume of the cylinder is ${cylinderVolume} cubic meters.`);
