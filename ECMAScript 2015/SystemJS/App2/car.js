export function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

Car.prototype.printDetails = function () {
  document.write(`<p>Manufacturer: ${this.make}</p>`);
  document.write(`<p>Model: ${this.model}</p>`);
  document.write(`<p>Color: ${this.color}</p>`);
};
