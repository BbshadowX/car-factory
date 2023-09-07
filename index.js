class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getInfo() {
    return `This car is a ${this.year}, ${this.make} ${this.model}.`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getInfo() {
    return `${super.getInfo()} The ${this.model} has a Range of ${
      this.range
    }mi.`;
  }
}

const num1 = new ElectricCar("Tesla", "Model S", "2019", "300");

console.log(num1.getInfo());
