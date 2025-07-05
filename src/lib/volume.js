export default class VolmueCalculator {
  cuboid = (width, breadth, height) => width * height * breadth;
  cube = (side) => side ** 3;
  sphere = (radius) => (4 / 3) * Math.PI * Math.cube(radius);
  cone = (radius, height) => Math.PI * radius ** 2 * (height / 3);
  cylinder = (radius, height) => Math.PI * radius ** 2 * height;
}
