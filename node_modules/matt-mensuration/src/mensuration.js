import PerimeterCalculator from "./lib/perimetre.js";
import AreaCalculator from "./lib/area.js";
import VolmueCalculator from "./lib/volume.js";

const permCalc = new PerimeterCalculator();
const areaCalc = new AreaCalculator();
const volCalc = new VolmueCalculator();

module.exports = { permCalc, areaCalc, volCalc };
