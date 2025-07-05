class PerimeterCalculator {
  rect = (width, height) => 2 * (width + height);
  square = (side) => side * 4;
  circle = (radius) => 2 * Math.PI * radius;
  triangle = (side1, side2, side3) => side1 + side2 + side3;
  parallelogram = (base, side) => 2 * (base * side);
}

class AreaCalculator {
  rect = (width, height) => width * height;
  square = (side) => side ** 2;
  circle = (radius) => Math.PI * radius ** 2;
  triangle = (base, height) => 0.5 * base * height;
  parallelogram = (base, height) => base * height;
}

class VolmueCalculator {
  cuboid = (width, breadth, height) => width * height * breadth;
  cube = (side) => side ** 3;
  sphere = (radius) => (4 / 3) * Math.PI * Math.cube(radius);
  cone = (radius, height) => Math.PI * radius ** 2 * (height / 3);
  cylinder = (radius, height) => Math.PI * radius ** 2 * height;
}

const permCalc = new PerimeterCalculator();
const areaCalc = new AreaCalculator();
const volCalc = new VolmueCalculator();

module.exports = { permCalc, areaCalc, volCalc };
