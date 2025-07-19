class AreaCalculator {
  rect = (width, height) => width * height;
  square = (side) => side ** 2;
  circle = (radius) => Math.PI * radius ** 2;
  triangle = (base, height) => 0.5 * base * height;
  parallelogram = (base, height) => base * height;
}
export default AreaCalculator;
