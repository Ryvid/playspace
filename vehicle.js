class Vehicle {
    constructor(type, wheels, doors, fuel) {
        this._type = type;
        this._wheels = wheels;
        this._doors = doors;
        this._fuel = fuel;
    }

    get type() {
        return this._type;
    }

    get wheels() {
        return this._wheels;
    }

    get doors() {
        return this._doors;
    }

    get fuel() {
        return this._fuel;
    }

    set type(type) {
        this._type = type;
    }

    set wheels(wheels) {
        this._wheels = wheels;
    }

    set doors(doors) {
        this._doors = doors;
    }

    set fuel(fuel) {
        this._fuel = fuel;
    }

    describe() {
        return `Type: ${this.type} - Number of Wheels: ${this.wheels} - Number of Doors: ${this.doors} - Runs on: ${this.fuel}`;
    }
}

class Car extends Vehicle {
    constructor(wheels = 4, doors = 4, fuel = "petrol") {
        super("Car", wheels, doors, fuel);
    }
}

class Truck extends Vehicle {
    constructor(wheels = 18, doors = 2, fuel = "diesel") {
        super("Truck", wheels, doors, fuel);
    }
}

export {Vehicle, Truck, Car};