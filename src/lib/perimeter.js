class PerimeterCalculator {
  rect = (width, height) => 2 * (width + height);
  square = (side) => side * 4;
  circle = (radius) => 2 * Math.PI * radius;
  triangle = (side1, side2, side3) => side1 + side2 + side3;
  parallelogram = (base, side) => 2 * (base * side);
}

export default PerimeterCalculator;
