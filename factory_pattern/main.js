import {VehicleFactory} from "./factory.js";

const myCar = VehicleFactory.createVehicle("car");

console.log(myCar.describe());