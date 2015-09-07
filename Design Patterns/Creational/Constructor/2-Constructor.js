function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.year + " '" + this.model + "' has done " + this.miles + " miles";
};

var bentley = new Car("Bentley Continental GT", 2015, 200);
var porsche = new Car("Porsche Macan S", 2014, 1000);

console.log(bentley.toString());
console.log(porsche.toString());