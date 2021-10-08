import {Vehicle, Truck, Car} from "./vehicles.js";

class VehicleFactory {
    static createVehicle(type = "car") {
        if(type === "car") {
            return new Car();
        }

        if(type === "truck") {
            return new Truck();
        }
    } 
}